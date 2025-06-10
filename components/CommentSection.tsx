"use client";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CommentSection({ postId }: { postId: string }) {
  const { data: comments, mutate } = useSWR(
    `/api/comments?postId=${postId}`,
    fetcher,
    { refreshInterval: 3000 }
  );
  const [newComment, setNewComment] = useState("");

  const addComment = async () => {
    if (!newComment.trim()) return;
    await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId, text: newComment.trim() }),
    });
    setNewComment("");
    mutate(); // re-fetch
  };

  if (!comments) return <p>Loading comments…</p>;

  return (
    <div className="mt-3 space-y-2">
      {comments.map((c: any) => (
        <div key={c.id} className="bg-gray-100 rounded px-3 py-2">
          <p className="text-sm font-medium">{c.author}</p>
          <p className="text-sm">{c.text}</p>
        </div>
      ))}
      <div className="flex space-x-2">
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="flex-1 border rounded px-2 py-1 text-sm"
        />
        <button
          onClick={addComment}
          className="bg-blue-600 text-white px-3 rounded text-sm"
        >
          Post
        </button>
      </div>
    </div>
  );
}
