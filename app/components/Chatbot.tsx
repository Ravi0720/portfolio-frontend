"use client";
import React, { useState, useRef, useEffect } from "react";



interface ChatMessage {
  sender: "user" | "bot";
  content: string;
}

const Chatbot: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    setMessages((prev) => [...prev, { sender: "user", content: input }]);
    setLoading(true);

    try {
      // Assumes POST http://localhost:8000/api/chat with JSON { message: input }
      const res = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", content: data.reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", content: "Sorry, failed to get a response." }
      ]);
    }
    setInput("");
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl shadow-2xl p-6">
      <div className="bg-zinc-900 text-zinc-50 h-96 overflow-y-auto rounded-lg p-4 shadow-inner">
        {messages.map((msg, idx) => (
          <div key={idx} className={`my-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block px-3 py-2 rounded-2xl max-w-[70%] break-words ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-700 text-zinc-100"
              }`}>
              {msg.content}
            </span>
          </div>
        ))}
        {loading && <div className="text-left text-zinc-400 italic">[AI is typing...]</div>}
        <div ref={chatEndRef}></div>
      </div>
      <div className="mt-4 flex gap-2">
        <textarea
          className="flex-1 rounded-md p-3 resize-none border border-zinc-600 bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={2}
          placeholder="Type your message..."
          disabled={loading}
        />
        <button
          className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          onClick={sendMessage}
          disabled={loading || !input.trim()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
