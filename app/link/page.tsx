export default function LinkPage() {

  return (

    <div style={{ padding: 30 }}>

      <h1>Link with Partner</h1>

      <p>Enter the 4-digit code your partner gives you.</p>



      <input

        placeholder="1234"

        maxLength={4}

        style={{

          marginTop: 20,

          padding: "10px",

          fontSize: "18px",

          width: "100px",

          textAlign: "center"

        }}

      />



      <div style={{ marginTop: 20 }}>

        <button

          style={{

            padding: "10px 20px",

            fontSize: "16px",

            cursor: "pointer"

          }}

          onClick={() => alert("Code submission will be added soon!")}

        >

          Link Devices

        </button>

      </div>

    </div>

  );

}
