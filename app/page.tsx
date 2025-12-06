"use client";



import Link from "next/link";



export default function Home() {



  // Register the service worker when the component loads

  if (typeof window !== "undefined") {

    if ("serviceWorker" in navigator) {

      navigator.serviceWorker.register("/service-worker.js")

        .then(() => console.log("Service Worker Registered"))

        .catch((err) => console.error("Service Worker Error:", err));

    }

  }



  return (

    <div style={{ padding: 30 }}>

      <h1>SongPing</h1>

      <p>Send music as a message.</p>



      <div style={{ marginTop: 20 }}>

        <Link href="/send">Go to Send Page</Link>

      </div>



      <div style={{ marginTop: 20 }}>

        <Link href="/inbox">Go to Inbox</Link>

      </div>

    </div>

  );

}
