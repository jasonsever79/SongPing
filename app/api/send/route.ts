import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();



export async function POST(req: Request) {

  const { songTitle, artist, url } = await req.json();



  const message = await prisma.message.create({

    data: { songTitle, artist, url }

  });



  return NextResponse.json({ success: true, id: message.id });

}
