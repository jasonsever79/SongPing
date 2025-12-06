import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();



export async function GET() {

  const messages = await prisma.message.findMany({

    orderBy: { createdAt: "desc" }

  });



  return NextResponse.json(messages);

}
