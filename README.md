Generative Search Engine

A full-stack AI-powered search platform that combines traditional web search with intelligent AI-generated responses.

Project Motivation

While using both search engines and AI assistants, I noticed that each has its own strengths.

Search engines provide access to websites and sources, but users often have to open multiple links to find an answer.

AI assistants provide direct answers, but sometimes users still need access to relevant sources and search results.

I built this project to explore how both approaches can work together in a single application. The system analyzes the user's query and decides whether to generate an AI response or return relevant search results.

More importantly, this project was an opportunity for me to learn full-stack software engineering, API integration, cloud deployment, debugging, and real-world application development.

---

What This Project Does

- Accepts natural language queries from users
- Detects user intent
- Generates AI responses using Llama 3
- Displays search results for search-oriented queries
- Suggests follow-up questions
- Provides a responsive user experience
- Connects a frontend and backend through REST APIs

---

Tech Stack

Tools

- Git
- GitHub
- VS code

Frontend

- Next.js
- React
- TypeScript

Backend

- FastAPI
- Python

AI Integration

- Llama 3

Deployment

- Frontend: Netlify
- Backend: Render

---

Architecture

User Query

↓

Next.js Frontend

↓

FastAPI Backend

↓

Intent Detection Layer

↓

Llama 3 OR Search Results

↓

Response Returned To User

---

Challenges I Faced

This project was not built in a single attempt.

Some of the challenges I encountered included:

- Frontend and backend communication issues
- API routing errors
- Deployment failures
- GitHub repository organization
- Cloud hosting configuration
- Timeout issues during AI response generation
- Managing different environments for development and deployment

Debugging these problems helped me understand how software behaves outside of a local development environment.

---

What I Learned

Through this project I gained hands-on experience with:

- Full-stack development
- REST API design
- Frontend-backend integration
- AI application development
- Cloud deployment workflows
- Debugging production issues
- Version control using Git and GitHub
- Software architecture fundamentals

---

Screenshots

Home Page

(<img width="1917" height="1077" alt="image" src="https://github.com/user-attachments/assets/e5f8ff36-6b3c-46f3-995b-0435a4c513dd" />
)

Search Results

(<img width="1907" height="1077" alt="image" src="https://github.com/user-attachments/assets/2e6f87bb-0cb2-4000-a8b4-164f74eb17ed" />
)

AI Response
(<img width="1917" height="1077" alt="image" src="https://github.com/user-attachments/assets/ce9e4b32-3722-4872-ae7c-d6d62ddc3b2b" />
)




---

Live Demo

Frontend:
[https://6a37568f952929129b75eed8--generative-search-engine.netlify.app/]

Backend:
[https://generative-serch-engine.onrender.com]

---

Future Improvements

Some improvements I plan to work on:

- User authentication
- Search history
- Better result ranking
- Response caching
- Source citations
- Conversation memory
- Performance optimization

---

Repository Structure

Generative-Search-Engine

├── Backend

│   ├── main.py

│   ├── requirements.txt

│   └── ...

│

├── Frontend

│   ├── app

│   │   └── page.tsx

│   ├── package.json

│   └── ...

│

├── README.md

└── .gitignore

---

Personal Note

This project represents my effort to learn modern software engineering by building something end-to-end rather than only studying theory.

From designing the user experience to deploying the application in the cloud, every stage of development taught me something new.

The project is still evolving, and I plan to continue improving it as I learn more about software engineering, distributed systems, and AI-powered applications.

---

Author

komari Gowtham Seshan

Computer Science Student

GitHub: [https://github.com/KOMARIGOWTHAMSESHAN/GENERATIVE-SEARCH-ENGINE-.git]

LinkedIn: [www.linkedin.com/in/k-gowtham-seshan-653633384]
