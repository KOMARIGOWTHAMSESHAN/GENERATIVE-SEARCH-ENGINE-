"use client";

import { Content } from "next/font/google";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Instant Adaptive Layout State
  const [uiMode, setUiMode] = useState<"search" | "research" | null>(null);
  const [backendData, setBackendData] = useState({
    searchResults:  "",
    llmResponse: ""
  });

  // Fast Frontend Intent Rule Engine
  const classifyIntentLocally = (text: string): "search" | "research" => {
    const cleanText = text.toLowerCase().trim();
    
    // Quick triggers for research/deep queries
    const researchKeywords = [
      "explain", "why", "how", "what is", "difference between", 
      "summarize", "write", "code", "create", "teach"
    ];
    
    const isResearch = researchKeywords.some(keyword => cleanText.startsWith(keyword) || cleanText.includes(" " + keyword));
    return isResearch ? "research" : "search";
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    // 1. INSTANTLY change layout based on query keywords (0-second delay)
    const detectedMode = classifyIntentLocally(query);
    setUiMode(detectedMode);
    setSearched(true);
    setLoading(true);

    if (detectedMode === "search") {
      setBackendData({ searchResults: "🔍 Querying local Qdrant vectors...", llmResponse: "" });
    } else {
      setBackendData({ searchResults: "", llmResponse: "🤖 Llama 3 is thinking..." });
    }
    
    try {
      // 2. Fire the network call immediately using the direct standard localhost loopback
      const response = await fetch("http://127.0.0.1:8000/api/generative-search", {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) throw new Error(`Backend Error : ${response.status}`);
      const data = await response.json();

      
      console.log("STATUS :", response.status)
      
      console.log("DATA:",data)

      // 3. Populate layout dynamically with data
      setBackendData({
        searchResults: data.answer || data.search_results || data.context || JSON.stringify(data.results || [] , null , 2 ),
        llmResponse: data.answer || data.llm_response || data.response || data.output || data.result || "No response content generated."
      });

    } catch (error) {
      console.error("Network bridge down:", error);
      // Fast fallback display if backend drops connection
      setBackendData({
        searchResults: `Showing offline index sandbox matching results for: "${query}"`,
        llmResponse: `⚠️ Frontend changed layout instantly, but couldn't pull text data from port 8000.`
      });
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setQuery("");
    setSearched(false);
    setUiMode(null);
    setBackendData({ searchResults: "", llmResponse: "" });
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Arial, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: !searched ? "center" : "flex-start",
        background: uiMode === "research" ? "#1e1e2e" : "#f8f9fa",
        color: uiMode === "research" ? "#cdd6f4" : "#202124",
        transition: "background 0.2s ease",
        padding: "20px"
      }}
    >
      {/* INITIAL LANDING VIEW */}
      {!searched && (
        <div style={{ textAlign: "center", width: "100%", maxWidth: "600px" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "8px", color: "#111" }}>
            Generative Search Engine
          </h1>
          <p style={{ color: "#666", fontSize: "15px", marginBottom: "40px" }}>
            Dynamic Intent-Driven Morphing Architecture
          </p>

          <div style={{ display: "flex", width: "100%", gap: "12px" }}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Ask a question or enter web search terms..."
              style={{
                flex: 1,
                padding: "16px 24px",
                borderRadius: "30px",
                border: "1px solid #dadce0",
                fontSize: "16px",
                outline: "none",
                background: "#fff"
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                padding: "16px 32px",
                borderRadius: "30px",
                border: "none",
                background: "#000",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer"
              }}
            >
              Search
            </button>
          </div>
        </div>
      )}

      {/* ADAPTIVE MORPHED UI VIEWS */}
      {searched && (
        <div style={{ width: "100%", maxWidth: "800px", marginTop: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
            <button
              onClick={reset}
              style={{
                padding: "8px 16px",
                border: "1px solid",
                borderColor: uiMode === "research" ? "#45475a" : "#dadce0",
                borderRadius: "20px",
                background: uiMode === "research" ? "#313244" : "#fff",
                color: uiMode === "research" ? "#cdd6f4" : "#202124",
                cursor: "pointer"
              }}
            >
              ⬅️ Back
            </button>
            <h3 style={{ margin: 0, fontWeight: "500" }}>
              Results for: <span style={{ color: uiMode === "research" ? "#89b4fa" : "#1a0dab" }}>{query}</span>
            </h3>
          </div>

          {/* LAYOUT A: GOOGLE VIEW STYLE */}
          {uiMode === "search" && (
            <div>
              <div style={{ fontSize: "14px", color: "#70757a", marginBottom: "15px" }}>
                {loading ? "⚡ Running rapid index traversal..." : "Document segments found successfully"}
              </div>
              <div
                style={{
                  background: "#fff",
                  padding: "24px",
                  borderRadius: "12px",
                  border: "1px solid #e0e0e0",
                  color: "#202124"
                }}
              >
                <h2 style={{ color: "#1a0dab", margin: "0 0 8px 0", fontSize: "20px", fontWeight: "500" }}>
                  Knowledge Graph Vector Match for "{query}"
                </h2>
                <p style={{ color: "#4d5156", fontSize: "14px", lineHeight: "1.6", margin: 0, whiteSpace: "pre-wrap" }}>
                  {backendData.searchResults}
                </p>
              </div>
            </div>
          )}

          {/* LAYOUT B: CHATGPT VIEW STYLE */}
          {uiMode === "research" && (
            <div
              style={{
                background: "#313244",
                padding: "30px",
                borderRadius: "16px",
                lineHeight: "1.7",
                fontSize: "16px"
              }}
            >
              <div style={{ marginBottom: "16px" }}>
                <span style={{ background: "#f38ba8", color: "#11111b", padding: "4px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "700" }}>
                  {loading ? "⏳ SYSTEM GENERATING..." : "GENERATIVE COGNITIVE RESPONSE"}
                </span>
              </div>
              <p style={{  whiteSpace: "pre-wrap",lineHeight: "1.8" }}>
                {backendData.llmResponse}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
