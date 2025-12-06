import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();



export async function GET(req: Request) {

  try {

    // Extract "id" from query params

    const url = new URL(req.url);

    const pairingId = url.searchParams.get("id");



    // If no id provided

    if (!pairingId) {

      return NextResponse.json(

        { error: "Missing id parameter" },

        { status: 400 }

      );

    }



    // Look up pairing by id

    const pairing = await prisma.pairing.findUnique({

      where: { id: Number(pairingId) },

      include: {

        messages: true,

      },

    });



    // If pairing not in database

    if (!pairing) {

      return NextResponse.json(

        { error: "Pairing not found" },

        { status: 404 }

      );

    }



    // Success

    return NextResponse.json(pairing);

  } catch (error) {

    console.error("Link route error:", error);

    return NextResponse.json(

      { error: "Internal server error" },

      { status: 500 }

    );

  }

}
