"use client";



export default function SettingsPage() {

  return (

    <div style={{ padding: 20 }}>

      <h1>Settings</h1>

      <p>Customize your SongPing experience.</p>



      <div style={{ marginTop: 40 }}>

        <a href="/" style={{ display: "block", marginBottom: 10 }}>Home</a>

        <a href="/send" style={{ display: "block", marginBottom: 10 }}>Send Song</a>

        <a href="/inbox" style={{ display: "block", marginBottom: 10 }}>Inbox</a>

        <a href="/settings" style={{ display: "block", marginBottom: 10 }}>Settings</a>

      </div>

    </div>

  );

}
