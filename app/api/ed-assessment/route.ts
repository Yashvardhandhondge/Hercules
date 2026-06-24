import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // In production, you'd store this or forward to an analytics service.
  // For now, just acknowledge receipt.
  console.log("[ED Assessment]", {
    score: body.score,
    severity: body.severity,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
