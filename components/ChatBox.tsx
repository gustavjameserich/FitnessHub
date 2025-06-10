"use client";
import useSWR from "swr";
import { useState, useEffect, useRef } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ChatBox() {
  const { data: messages, mutate } = useSWR("/api/messages", fetcher, {
    refreshInterval: 3000,
  });
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input.trim() }),
    });
    setInput("");
    mutate(); // re-fetch
  };

  if (!messages) return <p>Loading chat…</p>;

  return (
    <div className="flex flex-col border rounded-lg h-full">
      <div className="p-3 overflow-y-auto flex-1 space-y-2">
        {messages.map((msg: any) => (
          <div key={msg.id} className="space-y-1">
            <p className="text-xs text-gray-500">{msg.sender}</p>
            <p className="bg-gray-100 rounded px-2 py-1 inline-block">
              {msg.text}
            </p>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="p-3 border-t flex space-x-2">
        <input
          className="flex-1 border rounded px-2 py-1 text-sm"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-3 rounded text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
