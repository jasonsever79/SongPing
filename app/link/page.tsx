"use client";



import { useState } from "react";



export default function LinkWithPartner() {

  const [code, setCode] = useState("");

  const [status, setStatus] = useState("");



  async function submitCode() {

    const response = await fetch("/api/link", {

      method: "POST",

      body: JSON.stringify({ code }),

    });



    const data = await response.json();



    if (data.success) {

      setStatus("✔ Linked successfully!");

    } else {

      setStatus("❌ Invalid code. Try again.");

    }

  }



  return (

    <div style={{ padding: 30 }}>

      <h1>Link With Partner</h1>

      <p>Enter the code your partner sent you:</p>



      <input

        type="text"

        placeholder="Enter code"

        value={code}

        onChange={(e) => setCode(e.target.value)}

        style={{

          padding: "10px",

          fontSize: "16px",

          width: "250px",

          marginTop: "10px"

        }}

      />



      <div style={{ marginTop: 20 }}>

        <button

          onClick={submitCode}

          style={{

            padding: "10px 20px",

            fontSize: "16px",

            cursor: "pointer",

          }}

        >

          Link

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


