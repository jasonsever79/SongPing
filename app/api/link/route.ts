import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";



export async function GET(req: Request) {

  try {

    const { searchParams } = new URL(req.url);

    const pairingId = searchParams.get("id");



    if (!pairingId) {

      return NextResponse.json({ error: "Missing id" }, { status: 400 });

    }



    const pairing = await prisma.pairing.findUnique({

      where: { id: pairingId },

      include: { messages: true },

    });



    if (!pairing) {

      return NextResponse.json({ error: "Not found" }, { status: 404 });

    }



    return NextResponse.json(pairing);

  } catch (err) {

    console.error(err);

    return NextResponse.json({ error: "Server error" }, { status: 500 });

  }

}
