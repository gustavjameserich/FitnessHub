'use client'
import { useState } from 'react'
import CommentSection from './CommentSection'

interface PostCardProps {
  author: string
  avatarSrc: string
  content: string
  timestamp: string
}

export default function PostCard({
  author,
  avatarSrc,
  content,
  timestamp,
}: PostCardProps) {
  const [showComments, setShowComments] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow p-4 space-y-3">
      <div className="flex items-center space-x-3">
        <img
          src={avatarSrc}
          alt={author}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-xs text-black">{timestamp}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
      <button
        onClick={() => setShowComments((v) => !v)}
        className="text-sm text-blue-600 hover:underline"
      >
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <CommentSection postId="stub-id" />}
    </div>
  )
}
