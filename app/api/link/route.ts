export const dynamic = "force-dynamic";



import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";



export async function GET(request: Request) {

  try {

    const { searchParams } = new URL(request.url);

    const pairingId = searchParams.get("id");



    if (!pairingId) {

      return NextResponse.json(

        { error: "Missing id parameter" },

        { status: 400 }

      );

    }



    // Look up pairing by numeric ID

    const pairing = await prisma.pairing.findUnique({

      where: { id: Number(pairingId) },

      include: {

        messages: true,

      },

    });



    if (!pairing) {

      return NextResponse.json(

        { error: "Pairing not found" },

        { status: 404 }

      );

    }



    return NextResponse.json(pairing);

  } catch (error) {

    console.error("Error in /api/link:", error);

    return NextResponse.json(

      { error: "Internal Server Error" },

      { status: 500 }

    );

  }

}
