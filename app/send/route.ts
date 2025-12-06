import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();



export async function POST(req: Request) {

  try {

    const { url } = await req.json();



    const message = await prisma.message.create({

      data: {

        url,

        createdAt: new Date(),

      },

    });



    return NextResponse.json({ success: true, message });

  } catch (error) {

    console.error(error);

    return NextResponse.json(

      { error: "Failed to save message" },

      { status: 500 }

    );

  }

}
