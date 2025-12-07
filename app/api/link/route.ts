import prisma from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: "No URL provided" },
        { status: 400 }
      );
    }

    const saved = await prisma.link.create({
      data: { url },
    });

    return NextResponse.json(saved, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}

