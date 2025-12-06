import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();



export async function GET(req: Request) {

  try {

    const { searchParams } = new URL(req.url);

    const pairingId = searchParams.get("code");



    if (!pairingId) {

      return NextResponse.json({ error: "Missing pairing code" }, { status: 400 });

    }



    const pairing = await prisma.pairing.findUnique({

      where: { code: pairingId },

    });



    if (!pairing) {

      return NextResponse.json({ error: "Not found" }, { status: 404 });

    }



    return NextResponse.json(pairing);

  } catch (err) {

    return NextResponse.json({ error: "Server error" }, { status: 500 });

  }

}
