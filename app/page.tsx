export default function HomePage() {

  return (

    <div style={{ padding: 30 }}>

      <h1>SongPing</h1>

      <p>Welcome to your music-sharing app.</p>



      <div style={{ marginTop: 30 }}>

        <a href="/send" style={{ display: "block", marginBottom: 10 }}>Send Song</a>

        <a href="/inbox" style={{ display: "block", marginBottom: 10 }}>Inbox</a>

        <a href="/settings" style={{ display: "block", marginBottom: 10 }}>Settings</a>

      </div>

    </div>

  );

}
