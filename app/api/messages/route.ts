import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  const msgs = await prisma.message.findMany({
    orderBy: { createdAt: "asc" },
  });
  return NextResponse.json(msgs);
}

export async function POST(request: Request) {
  const { sender, text } = await request.json();
  if (!text) {
    return NextResponse.json({ error: "text required" }, { status: 400 });
  }
  const msg = await prisma.message.create({
    data: { sender: sender || "Anonymous", text },
  });
  return NextResponse.json(msg);
}
