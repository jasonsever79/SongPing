export default function LinkWithPartner() {

  return (

    <div style={{ padding: 30 }}>

      <h1>Link With Partner</h1>

      <p>Enter the code your partner sent you:</p>



      <input

        type="text"

        placeholder="Enter code"

        style={{

          padding: "10px",

          fontSize: "16px",

          width: "250px",

          marginTop: "10px"

        }}

      />



      <div style={{ marginTop: 20 }}>

        <button

          style={{

            padding: "10px 20px",

            fontSize: "16px",

            cursor: "pointer",

          }}

        >

          Link

        </button>

      </div>

    </div>

  );

}


