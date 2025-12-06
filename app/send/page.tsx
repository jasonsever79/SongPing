import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();



// Accepts either { link } or { songTitle, artist, url }

export async function POST(request: Request) {

  try {

    const body = await request.json();

    const link = body.link ?? body.url ?? null;

    const songTitle = body.songTitle ?? body.title ?? "";

    const artist = body.artist ?? "";



    const message = await prisma.message.create({

      data: {

        songTitle,

        artist,

        url: link

      }

    });



    return NextResponse.json({ success: true, id: message.id });

  } catch (err) {

    console.error("POST /api/send error:", err);

    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });

  }

}



// Returns recent messages

export async function GET() {

  try {

    const messages = await prisma.message.findMany({

      orderBy: { createdAt: "desc" }

    });

    return NextResponse.json(messages);

  } catch (err) {

    console.error("GET /api/send error:", err);

    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });

  }

}
