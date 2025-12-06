import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();



export async function POST(req: Request) {

  const { code } = await req.json();



  // Find the pairing entry in the database

  const pairing = await prisma.pairing.findUnique({

    where: { code }

  });



  if (pairing) {

    return NextResponse.json({ success: true });

  } else {

    return NextResponse.json({ success: false });

  }

}
