"use client";



import { useState } from "react";



export default function SendSong() {

  const [title, setTitle] = useState("");

  const [artist, setArtist] = useState("");

  const [url, setUrl] = useState("");

  const [status, setStatus] = useState("");



  async function sendSong() {

    const response = await fetch("/api/send", {

      method: "POST",

      body: JSON.stringify({

        songTitle: title,

        artist: artist,

        url: url

      })

    });



    const data = await response.json();



    if (data.success) {

      setStatus("🎵 Song sent!");

    } else {

      setStatus("Something went wrong.");

    }

  }



  return (

    <div style={{ padding: 30 }}>

      <h1>Send a Song</h1>



      <p>Enter song information:</p>



      <input

        type="text"

        placeholder="Song Title"

        value={title}

        onChange={(e) => setTitle(e.target.value)}

        style={{

          padding: "10px",

          fontSize: "16px",

          width: "260px",

          marginTop: "10px"

        }}

      />



      <input

        type="text"

        placeholder="Artist"

        value={artist}

        onChange={(e) => setArtist(e.target.value)}

        style={{

          padding: "10px",

          fontSize: "16px",

          width: "260px",

          marginTop: "10px"

        }}

      />



      <input

        type="text"

        placeholder="Song URL (optional)"

        value={url}

        onChange={(e) => setUrl(e.target.value)}

        style={{

          padding: "10px",

          fontSize: "16px",

          width: "260px",

          marginTop: "10px"

        }}

      />



      <div style={{ marginTop: 20 }}>

        <button

          onClick={sendSong}

          style={{

            padding: "10px 20px",

            fontSize: "16px",

            cursor: "pointer"

          }}

        >

          Send Song

        </button>

      </div>



      {status && (

        <div style={{ marginTop: 20, fontSize: "18px" }}>

          {status}

        </div>

      )}

    </div>

  );

}
<div style={{ marginTop: 40 }}>

  <a href="/" style={{ display: "block", marginBottom: 10 }}>Home</a>

  <a href="/send" style={{ display: "block", marginBottom: 10 }}>Send Song</a>

  <a href="/inbox" style={{ display: "block", marginBottom: 10 }}>Inbox</a>

  <a href="/settings" style={{ display: "block", marginBottom: 10 }}>Settings</a>

</div>
