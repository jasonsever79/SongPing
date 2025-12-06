import Link from "next/link";



export default function Home() {

  return (

    <div style={{ padding: 30 }}>

      <h1>SongPing</h1>

      <p>Send music as a message.</p>



      <div style={{ marginTop: 20 }}>

        <button

          style={{

            padding: "10px 20px",

            fontSize: "16px",

            cursor: "pointer"

          }}

          onClick={() => alert("Send a Song will go here!")}

        >

          Send a Song

        </button>

      </div>



      <div style={{ marginTop: 20 }}>

        <Link href="/link">

          <button

            style={{

              padding: "10px 20px",

              fontSize: "16px",

              cursor: "pointer"

            }}

          >

            Link with Partner
<div style={{ marginTop: 20 }}>

  <Link href="/generate">

    <button

      style={{

        padding: "10px 20px",

        fontSize: "16px",

        cursor: "pointer"

      }}

    >

      Generate Pair Code

    </button>

  </Link>

</div>
          </button>
<div style={{ marginTop: 20 }}>

  <Link href="/inbox">

    <button

      style={{

        padding: "10px 20px",

        fontSize: "16px",

        cursor: "pointer"

      }}

    >

      Inbox

    </button>

  </Link>

</div>
        </Link>

      </div>

    </div>

  );

}
