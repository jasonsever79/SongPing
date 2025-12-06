import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();



export async function GET(req: Request) {

  try {

    const url = new URL(req.url);

    const pairingId = url.searchParams.get("id"); // ← use "id", not "code"



    if (!pairingId) {

      return NextResponse.json(

        { error: "Missing pairing id" },

        { status: 400 }

      );

    }



    // Query by the *actual* unique field: id

    const pairing = await prisma.pairing.findUnique({

      where: { id: pairingId },

    });



    if (!pairing) {

      return NextResponse.json(

        { error: "Pairing not found" },

        { status: 404 }

      );

    }



    return NextResponse.json(pairing);

  } catch (err) {

    console.error(err);

    return NextResponse.json(

      { error: "Server error" },

      { status: 500 }

    );

  }

}
