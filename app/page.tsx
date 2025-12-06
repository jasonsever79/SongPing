"use client";



import { useState } from "react";



export default function Home() {

  const [url, setUrl] = useState("");

  const [status, setStatus] = useState("");

  const [error, setError] = useState("");



  async function handleSend() {

    setStatus("");

    setError("");



    if (!url) {

      setError("Please enter a YouTube link.");

      return;

    }



    try {

      // 1️⃣ Ping test

      const pingRes = await fetch("/api/ping");

      const pingData = await pingRes.json();

      console.log("Ping:", pingData);



      // 2️⃣ Generate metadata (mock)

      const generateRes = await fetch("/api/generate", {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ url }),

      });

      const generateData = await generateRes.json();

      console.log("Generate:", generateData);



      // 3️⃣ Send email (mock)

      const sendRes = await fetch("/api/send", {

        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({

          email: "test@example.com",

          message: `Generated data for ${url}`,

        }),

      });

      const sendData = await sendRes.json();

      console.log("Send:", sendData);



      setStatus("SongPing completed successfully! 🎶");

    } catch (err) {

      console.error(err);

      setError("Something went wrong.");

    }

  }



  return (

    <main className="p-6 max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">SongPing 🎵</h1>



      <input

        type="text"

        placeholder="Enter YouTube link..."

        className="border p-2 w-full mb-3"

        value={url}

        onChange={(e) => setUrl(e.target.value)}

      />



      <button

        className="bg-blue-600 text-white px-4 py-2 rounded"

        onClick={handleSend}

      >

        Send

      </button>



      {status && <p className="text-green-600 mt-4">{status}</p>}

      {error && <p className="text-red-600 mt-4">{error}</p>}

    </main>

  );

}
