import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";



// create a single database connection

const prisma = new PrismaClient();



// function to generate a simple random 4-character code

function createCode() {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  let result = "";

  for (let i = 0; i < 4; i++) {

    result += letters[Math.floor(Math.random() * letters.length)];

  }

  return result;

}



export async function GET() {

  const code = createCode();



  // save the code to the database

  await prisma.pairing.create({

    data: {

      code: code

    }

  });



  // return it to the app

  return NextResponse.json({ code });

}
