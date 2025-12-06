export default function InboxPage() {

  return (

    <div style={{ padding: 30 }}>

      <h1>Inbox</h1>

      <p>Your received songs will appear here.</p>



      <div style={{ marginTop: 40 }}>

        <a href="/" style={{ display: "block", marginBottom: 10 }}>

          Home

        </a>

        <a href="/send" style={{ display: "block", marginBottom: 10 }}>

          Send Song

        </a>

        <a href="/inbox" style={{ display: "block", marginBottom: 10 }}>

          Inbox

        </a>

        <a href="/settings" style={{ display: "block", marginBottom: 10 }}>

          Settings

        </a>

      </div>

    </div>

  );

}
