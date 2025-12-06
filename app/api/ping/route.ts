export async function GET() {

  return new Response(

    JSON.stringify({ status: "ok", message: "Ping successful" }),

    {

      status: 200,

      headers: { "Content-Type": "application/json" }

    }

  );

}
