"use client";

import { useState } from "react";
import CommentSection from "./CommentSection";

interface PostCardProps {
  postId: string;
  author: string;
  avatarSrc: string;
  content: string;
  timestamp: string;
}

export default function PostCard({
  postId,
  author,
  avatarSrc,
  content,
  timestamp,
}: PostCardProps) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <img
          src={avatarSrc}
          alt={`${author} avatar`}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold">{author}</p>
          <p className="text-xs text-gray-500">{timestamp}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-700">{content}</p>

      {/* Toggle Comments */}
      <button
        onClick={() => setShowComments((v) => !v)}
        className="text-sm text-blue-600 hover:underline"
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {/* Comments */}
      {showComments && <CommentSection postId={postId} />}
    </div>
  );
}
