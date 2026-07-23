# Generative Search Engine

> **An AI-powered search engine that intelligently switches between traditional web search and AI-powered research based on the user's intent.**

---

#  About the Project

The idea behind this project came from a simple observation.

Whenever I wanted to search for something, I used Google to find websites. When I wanted to understand a concept in detail, I used an AI assistant.

This made me think:

**Why can't a single application decide what the user actually needs?**

That question inspired me to build this project.

The Generative Search Engine automatically understands whether the user's query is a normal search query or a research query.

If the user wants links, it provides a clean Google-style search interface.

If the user wants an explanation, it switches to an AI-powered research workspace and generates a structured answer.

My goal is to make searching more natural by combining traditional search with modern AI.

---

#  Problem Statement

Current search engines mainly return links.

AI assistants mainly return conversational answers.

Users often have to switch between multiple applications depending on what they need.

This project solves that problem by combining both experiences into a single platform.

---

#  Solution

The application first understands the user's intent.

If the query is:

• Searching for websites

The application displays:

- Search results
- Website links
- Search snippets

If the query is:

• Learning or researching a topic

The application displays:

- AI-generated explanation
- Headings
- Bullet points
- Examples
- Follow-up suggestions

The interface changes automatically without requiring the user to choose a mode.

---
#  Evolution of the Project

This project has evolved through multiple stages as I learned more about AI application development.

### Phase 1 – Local AI using Ollama

The initial version of the project used **Ollama** with the **Llama 3** model running locally.

This helped me understand:

- Running Large Language Models locally
- Backend integration with FastAPI
- Prompt engineering
- Local AI inference without relying on cloud services

Although this approach worked well during development, I observed some practical limitations:

- High CPU and memory usage
- Slower response generation on my laptop
- Difficulties deploying a locally hosted model to cloud platforms
- Timeouts during AI response generation after deployment

These challenges encouraged me to explore a cloud-based solution.

---

### Phase 2 – Migration to Google Gemini

To improve performance and deployment reliability, I migrated the AI module from Ollama to **Google Gemini 3.5 Flash**.

This decision provided several advantages:

- Faster AI responses
- Cloud-hosted inference
- Better deployment compatibility
- Reduced resource usage on local machines
- Simpler backend architecture
- More consistent user experience

The migration required updating the backend API integration, environment configuration, dependency management, and response handling.

This experience helped me understand the trade-offs between running local AI models and using cloud-hosted AI services.

Today, the project uses **Google Gemini 3.5 Flash** as its primary AI engine while maintaining the same overall application architecture.

#  Features

##  Smart Search

- Google-style search interface
- Live web search
- Website links
- Search snippets
- Fast search results

---

##  AI Research Workspace

- Google Gemini 3.5 Flash
- Structured explanations
- Introduction
- Key Concepts
- Examples
- Advantages
- Conclusion
- Follow-up questions

---

##  Additional Content

- YouTube recommendations
- Related search suggestions

---

##  User Experience

- Modern responsive interface
- Automatic intent detection
- Separate UI for Search and Research
- Fast response

---

#  System Architecture

```
                          User

                            │

                            ▼

                   Next.js Frontend

                            │

                            ▼

                  FastAPI Backend API

                            │

         ┌──────────────────┼──────────────────┐
         │                  │                  │

         ▼                  ▼                  ▼

 Intent Detection      Tavily Search      Gemini 3.5 Flash

         │                  │                  │

         └──────────────────┼──────────────────┘

                            ▼

                  Response Formatter

                            │

                            ▼

              Dynamic User Interface
```

---

#  Technology Stack

## Frontend

- Next.js
- React
- TypeScript

## Backend

- FastAPI
- Python

## Artificial Intelligence

- Google Gemini 3.5 Flash API

## Search APIs

- Tavily Search API
- YouTube Search API

## Deployment

- Render
- Netlify

## Development Tools

- Visual Studio Code
- Git
- GitHub

---

#  Project Structure

```
Generative-Search-Engine

│

├── Backend
│   ├── main.py
│   ├── requirements.txt
│   ├── .env
│

├── Frontend
│   ├── app
│   ├── public
│   ├── components
│

└── README.md
```

---

#  Project Workflow

User enters a query

↓

Frontend sends the request

↓

FastAPI Backend receives the query

↓

Intent Detection

↓

If Search Query

↓

Tavily Search API

↓

Search Results

OR

If Research Query

↓

Google Gemini 3.5 Flash

↓

Structured AI Response

↓

Frontend displays the correct interface

---

#  Current Features

✅ Intelligent intent detection

✅ Google-style search interface

✅ AI research interface

✅ Google Gemini 3.5 Flash integration

✅ Live web search

✅ YouTube recommendations

✅ Responsive UI

✅ Backend deployed on Render

✅ Frontend deployed online

---

#  Screenshots

##  Home Page

<img width="1918" height="1078" alt="homepage" src="https://github.com/user-attachments/assets/f44f5080-7864-437f-9b6f-bb83e92ae09e" />


---

##  Search Results

<img width="1918" height="1020" alt="Search Result" src="https://github.com/user-attachments/assets/e5d61448-4d97-4141-8aff-da18e430ab0a" />


---

##  AI Research Workspace

<img width="1918" height="1020" alt="AI Response" src="https://github.com/user-attachments/assets/0df76710-a9fe-472b-910c-2f138a3251cc" />


---


#  Challenges Faced During Development

Working on this project helped me learn much more than writing code.

Some of the challenges I worked through include:

- Designing two completely different user interfaces based on user intent.
- Integrating Google Gemini with the FastAPI backend.
- Connecting live search results with AI-generated responses.
- Managing API keys securely using environment variables.
- Handling frontend and backend communication.
- Debugging deployment issues after moving the application online.
- Improving response quality and performance.
- Learning how different technologies work together in a full-stack application.

Each challenge improved my understanding of software development, debugging, deployment, and system integration.

---

#  What I Learned

Through this project I gained practical experience with:

- Full Stack Development
- REST APIs
- Backend Development
- Frontend Development
- AI API Integration
- Deployment
- Git & GitHub
- Debugging
- Environment Variables
- Project Architecture
- Building user-focused applications

---

#  Upcoming Features

The project is still actively being improved.

The next planned features are:

* Voice Search using Speech-to-Text

* Real-Time Image Search

* Advanced Video Search

* User Login & Authentication

* Search History

* Bookmark Favourite Searches

* PDF Upload & AI Summarization

* Multi-language Support

* Android Mobile Application

* Faster AI Responses

* Better Intent Classification

* User Dashboard

---

#  Future Vision

My long-term goal is to build this project into a complete AI search platform that works across both web and mobile.

The application will allow users to:

- Search the web
- Perform AI-assisted research
- Upload documents
- Search using voice
- Save conversations
- Access their history
- Use the platform from both desktop and mobile devices

---

#  About Me

I am currently pursuing a B.Tech in Artificial Intelligence and Data Science.

I enjoy building practical AI applications that combine machine learning, backend development, frontend development, and modern web technologies.

This project is one of my learning projects, and I continue to improve it by adding new features, solving real-world development challenges, and learning better software engineering practices.

---

#  If you found this project interesting

If you like this project, please consider giving it a ⭐ on GitHub.

Feedback and suggestions are always welcome.

Thank you for visiting my repository.
