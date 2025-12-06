"use client";



import { useEffect, useState } from "react";



export default function InboxPage() {

  const [messages, setMessages] = useState([]);



  async function loadMessages() {

    const res = await fetch("/api/inbox");

    const data = await res.json();

    setMessages(data);

  }



  useEffect(() => {

    loadMessages();

    const timer = setInterval(loadMessages, 3000); // refresh every 3 seconds

    return () => clearInterval(timer);

  }, []);



  return (

    <div style={{ padding: 30 }}>

      <h1>Inbox</h1>

      <p>Incoming songs will appear here.</p>



      {messages.map((msg) => (

        <div

          key={msg.id}

          style={{

            marginTop: 20,

            padding: 15,

            border: "1px solid #ccc",

            borderRadius: "8px"

          }}

        >

          <h3>{msg.songTitle}</h3>

          <p>{msg.artist}</p>

          {msg.url && (

            <a

              href={msg.url}

              target="_blank"

              style={{ textDecoration: "underline" }}

            >

              Listen

            </a>

          )}

        </div>

      ))}

    </div>

  );

}
