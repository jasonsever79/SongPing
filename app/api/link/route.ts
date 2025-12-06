import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";



export async function GET(req: Request) {

  try {

    const { searchParams } = new URL(req.url);

    const pairingId = searchParams.get("pairingId");



    if (!pairingId) {

      return NextResponse.json(

        { error: "Missing pairingId parameter" },

        { status: 400 }

      );

    }



    const pairing = await prisma.pairing.findUnique({

      where: { pairingId: pairingId },

    });



    if (!pairing) {

      return NextResponse.json(

        { error: "Pairing not found" },

        { status: 404 }

      );

    }



    return NextResponse.json({ link: pairing.link });

  } catch (error) {

    console.error("Error in GET /api/link:", error);

    return NextResponse.json(

      { error: "Internal server error" },

      { status: 500 }

    );

  }

}
