"use client";

import { useState } from "react";



export default function SendPage() {

  const [songLink, setSongLink] = useState("");



  function handleSend() {

    alert("Pretending to send: " + songLink);

  }



  return (

    <div style={{ padding: 30 }}>

      <h1>Send a Song</h1>

      <p>Paste a link from Apple Music, Spotify, or YouTube.</p>



      <input

        type="text"

        value={songLink}

        onChange={(e) => setSongLink(e.target.value)}

        placeholder="Paste song link here..."

        style={{

          width: "100%",

          padding: 10,

          marginTop: 20,

          marginBottom: 20

        }}

      />



      <button

        onClick={handleSend}

        style={{ padding: 10, width: "100%" }}

      >

        Send Song

      </button>



      {/* Navigation */}

      <div style={{ marginTop: 40 }}>

        <a href="/" style={{ display: "block", marginBottom: 10 }}>Home</a>

        <a href="/send" style={{ display: "block", marginBottom: 10 }}>Send Song</a>

        <a href="/inbox" style={{ display: "block", marginBottom: 10 }}>Inbox</a>

        <a href="/settings" style={{ display: "block", marginBottom: 10 }}>Settings</a>

      </div>

    </div>

  );

}
