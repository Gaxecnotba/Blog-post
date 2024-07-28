import { NextResponse } from "next/server";
import db from "../../../../lib/db";
import NextAuth from "next-auth";

export async function GET() {
  try {
    const allnews = await db.post.findMany();
    return NextResponse.json({
      message: "All records fetched successfully",
      data: allnews,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Error fetching posts" },
      { status: 500 }
    );
  }
}

// const handler = NextAuth()
