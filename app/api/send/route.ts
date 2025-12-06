export async function POST(request: Request) {

  try {

    const { email, songUrl } = await request.json();



    if (!email || !songUrl) {

      return new Response(

        JSON.stringify({ error: "Missing email or song URL" }),

        { status: 400 }

      );

    }



    console.log("Sending email:", { email, songUrl });



    return new Response(

      JSON.stringify({ message: "Email sent (simulated)" }),

      {

        status: 200,

        headers: { "Content-Type": "application/json" }

      }

    );

  } catch (error) {

    return new Response(

      JSON.stringify({ error: "Invalid request" }),

      { status: 400 }

    );

  }

}
