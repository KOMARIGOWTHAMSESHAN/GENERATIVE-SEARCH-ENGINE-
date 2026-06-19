Generative Search Engine

Overview

Generative Search Engine is a full-stack AI-powered search platform that combines traditional search workflows with retrieval-augmented generation (RAG). The system dynamically analyzes user intent and routes queries through either a search pipeline or a research pipeline.

For direct information retrieval, the application performs semantic search using vector embeddings stored in Qdrant. For research-oriented queries, the system retrieves relevant context and generates detailed responses using a local Llama 3 model running through Ollama.

The goal of this project is to explore how modern search systems can combine information retrieval, vector databases, large language models, and adaptive user interfaces within a single application.

---

Features

- Intent-aware query routing
- Semantic vector search using embeddings
- Retrieval-Augmented Generation (RAG)
- Local LLM inference using Ollama (Llama 3)
- Qdrant vector database integration
- FastAPI backend services
- Next.js frontend interface
- Adaptive UI for search and research workflows
- Modular architecture for future web search integration

---

System Architecture

User Query
↓
Intent Classification
↓
┌─────────────────────┬─────────────────────┐
│                     │
Search Mode      Research Mode
│                     │
Qdrant Search     Context Retrieval
│                     │
Search Results    Llama 3 Generation
│                     │
Frontend Display  Research Report

---

Technology Stack

Frontend

- Next.js
- React
- TypeScript

Backend

- FastAPI
- Python

AI & Retrieval

- Ollama
- Llama 3
- Qdrant
- Vector Embeddings

Development Tools

- Docker
- Git
- GitHub

---

Project Structure

backend/

- main.py
- ingest.py
- embeddings.py
- search.py
- rag.py
- chunking.py
- store_documents.py

frontend/

- src/app/page.tsx

---

How It Works

1. The user submits a query through the frontend.
2. The intent classification module determines whether the query is informational or research-oriented.
3. Search queries are routed to the retrieval pipeline.
4. Research queries retrieve relevant context from Qdrant and generate responses using Llama 3.
5. Results are returned to the frontend and displayed in an adaptive interface.

---

Current Capabilities

- Local AI-powered question answering
- Semantic document retrieval
- Research report generation
- Adaptive search interface
- Retrieval-Augmented Generation pipeline

---

Future Improvements

- Real-time web search integration
- YouTube search support
- Multi-document ingestion
- PDF knowledge base support
- User authentication
- Search history
- Response streaming
- Cloud deployment

---

Learning Outcomes

Through this project, I gained practical experience with:

- Retrieval-Augmented Generation (RAG)
- Vector databases
- Embedding models
- FastAPI development
- Next.js application development
- API integration
- Local LLM deployment
- Full-stack AI system design

---

Author

Gowtham

Built as a personal project to explore modern AI-powered search systems, semantic retrieval, and retrieval-augmented generation architectures.
