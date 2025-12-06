"use client";



import { useState } from "react";



export default function GenerateCodePage() {

  const [code, setCode] = useState("");



  async function generateCode() {

    const response = await fetch("/api/generate");

    const data = await response.json();

    setCode(data.code);

  }



  return (

    <div style={{ padding: 30 }}>

      <h1>Generate Pair Code</h1>

      <p>Tap the button to create a code you can share with your partner.</p>



      <button

        onClick={generateCode}

        style={{

          padding: "10px 20px",

          fontSize: "16px",

          cursor: "pointer"

        }}

      >

        Generate Code

      </button>



      {code && (

        <div style={{ marginTop: 20 }}>

          <h2>Your Code:</h2>

          <div

            style={{

              fontSize: "32px",

              fontWeight: "bold",

              letterSpacing: "4px"

            }}

          >

            {code}

          </div>

        </div>

      )}

    </div>

  );

}
