import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");
  if (!postId) {
    return NextResponse.json({ error: "postId required" }, { status: 400 });
  }
  const comments = await prisma.comment.findMany({
    where: { postId },
    orderBy: { createdAt: "asc" },
  });
  return NextResponse.json(comments);
}

export async function POST(request: Request) {
  const { postId, author, text } = await request.json();
  if (!postId || !text) {
    return NextResponse.json(
      { error: "postId and text required" },
      { status: 400 }
    );
  }
  const comment = await prisma.comment.create({
    data: { postId, author: author || "Anonymous", text },
  });
  return NextResponse.json(comment);
}
