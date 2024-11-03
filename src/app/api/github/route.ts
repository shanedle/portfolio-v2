import { getPinnedRepos } from "@/lib/github";
import { NextResponse } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const repos = await getPinnedRepos();
    return NextResponse.json(repos);
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 },
    );
  }
}
