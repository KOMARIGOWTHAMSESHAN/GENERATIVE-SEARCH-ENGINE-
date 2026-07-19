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
<<<<<<< HEAD
print(answer)
=======
print(answer)
>>>>>>> 79863cda403ded94dc0d830bed42fd5344adf761
