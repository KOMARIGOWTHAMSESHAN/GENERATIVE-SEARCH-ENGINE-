
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

model = SentenceTransformer(
    "all-MiniLM-L6-v2"
)

intents = {
    "Research": [
        "Explain FastAPI",
        "How does React work",
        "Compare Python and Java",
        "Research React",
        "Research FastAPI",
        "Research Machine Learning",
        "Research Artificial Inteligence"
    ],
    "Search": [
        "google",
        "what is google",
        "React tutorial",
        "Python documentation",
        "FastAPI examples"
    ],
    "News": [
        "Latest AI news",
        "Tech news today",
        "Current events"
    ],
    "Images": [
        "Show images of Virat Kohli",
        "Photos of Chennai",
        "Pictures of cats"
    ]
}

intent_embeddings = {}

for intent, examples in intents.items():

    intent_embeddings[intent] = model.encode(
        examples
    ).mean(axis=0)


def classify(query):

    query_embedding = model.encode(
        query
    )

    best_intent = None
    best_score = -1

    for intent, emb in intent_embeddings.items():

        score = cosine_similarity(
            [query_embedding],
            [emb]
        )[0][0]

        if score > best_score:
            best_score = score
            best_intent = intent

    return best_intent
print(
    classify(
        "Explain how FastAPI works"
    )
)

print(
    classify(
        "Latest AI news"
    )
)

print(
    classify(
        "Show images of Virat Kohli"
    )
)

import requests
from qdrant_client import QdrantClient


# Embedding Function


def get_embedding(text):
    response = requests.post(
        "http://localhost:11434/api/embeddings",
        json={
            "model": "nomic-embed-text",
            "prompt": text
        }
    )

    return response.json()["embedding"]



# Qdrant Connection


client = QdrantClient(
    host="localhost",
    port=6333
)


# User Query


query = "How can I build APIs in Python?"

query_embedding = get_embedding(query)

# Retrieve Documents

results = client.query_points(
    collection_name="documents",
    query=query_embedding,
    limit=3
)

context = ""

for point in results.points:
    context += point.payload["text"] + "\n"


# Build Prompt


prompt = f"""
Answer the question using the context.

Context:
{context}

Question:
{query}

Answer:
"""

# Ask Ollama

response = requests.post(
    "http://localhost:11434/api/generate",
    json={
        "model": "llama3",
        "prompt": prompt,
        "stream": False
    }
)

answer = response.json()["response"]

print("\nQUESTION:")
print(query)

print("\nCONTEXT:")
print(context)

print("\nANSWER:")
print(answer)

