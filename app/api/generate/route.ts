export async function POST(request: Request) {

  try {

    const { url } = await request.json();



    if (!url) {

      return new Response(

        JSON.stringify({ error: "Missing YouTube URL" }),

        { status: 400 }

      );

    }



    console.log("Generating metadata for:", url);



    // Temporary mock response

    return new Response(

      JSON.stringify({

        status: "ok",

        title: "Sample Song Title",

        thumbnail: "https://placehold.co/300x300?text=Thumbnail",

        message: "Generation simulated"

      }),

      {

        status: 200,

        headers: { "Content-Type": "application/json" }

      }

    );

  } catch (err) {

    return new Response(

      JSON.stringify({ error: "Invalid request" }),

      { status: 400 }

    );

  }

}
