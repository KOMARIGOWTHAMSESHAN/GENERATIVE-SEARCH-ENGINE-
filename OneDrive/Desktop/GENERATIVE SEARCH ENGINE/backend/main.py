import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
from tavily import TavilyClient
from youtube_search import YoutubeSearch
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
model = genai.GenerativeModel("gemini-3.5-flash")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Tavily
TAVILY_API_KEY = os.getenv("TAVILY_API_KEY")
tavily_client = TavilyClient(api_key=TAVILY_API_KEY)

class SearchRequest(BaseModel):
    query: str

def determine_intent(query: str) -> str:
    """
    Instant, lightning-fast intent routing. 
    If the query looks for an educational deep dive, return 'ai' (Gemini layout).
    If it's a simple keyword/lookup, return 'web' (Google layout).
    """
    q = query.lower().strip()
    
    # Action keywords that demand a conversational explanation canvas
    research_triggers = [
        "explain", "how to", "why does", "calculus", 
        "tutorial", "derive", "theory", "difference between", 
        "teach me", "guide", "concept"
    ]
    
    if any(trigger in q for trigger in research_triggers):
        return "ai"
        
    return "web"

def get_youtube_results(query: str):
    try:
        videos = VideosSearch(query, limit=4).result()["result"]
        return [{"title": v["title"], "url": v["link"]} for v in videos]
    except:
        return []

@app.post("/api/generative-search")
async def search(req: SearchRequest):
    query = req.query
    
    # 1. Instantly get intent (0.00 milliseconds)
    intent = determine_intent(query)
    
    web_results = []
    context_text = ""

    # 2. Fetch live data via Tavily Search API
    try:
        tavily_response = tavily_client.search(query=query, max_results=5)
        for result in tavily_response.get("results", []):
            web_results.append({
                "title": result.get("title", "No Title"),
                "url": result.get("url", "#"),
                "snippet": result.get("content", "")
            })
        context_text = " ".join([r["title"] + " " + r["snippet"] for r in web_results])
    except Exception as e:
        print("Tavily Error:", e)

    video_results = get_youtube_results(query)
    
    image_results = [
        {"url": f"https://placehold.co/500x350?text={query}+1"},
        {"url": f"https://placehold.co/500x350?text={query}+2"}
    ]

    # 3. Only invoke Gemini to synthesize information if it's genuinely needed
    answer = ""
    if intent == "ai":
        try:
            prompt = f"""
You are a helpful AI research assistant.

Explain the topic in this format:

# Title

## Introduction

## Key Concepts

## Examples

## Advantages

## Conclusion

Topic:
{query}

Context:
{context_text}
"""

            response = model.generate_content(prompt)
            answer = response.text

        except Exception as e:
            print("Gemini Error:", e)
            answer = "Unable to generate AI response."
            
    return {
        "intent": intent, 
        "answer": answer,
        "web_results": web_results,
        "image_results": image_results,
        "video_results": video_results,
        "followups": [
            f"Core foundational principles of {query}",
            f"Practical application workflow of {query}"
        ]
    }