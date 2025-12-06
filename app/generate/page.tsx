"use client";

import { useState } from "react";



export default function GenerateCodePage() {

  const [code, setCode] = useState("");



  function generateCode() {

    const newCode = Math.floor(1000 + Math.random() * 9000).toString();

    setCode(newCode);

  }



  return (

    <div style={{ padding: 30 }}>

      <h1>Generate Pair Code</h1>

      <p>Share this code with your partner so they can link to you.</p>



      <button

        onClick={generateCode}

        style={{

          padding: "10px 20px",

          fontSize: "16px",

          cursor: "pointer",

          marginTop: 20

        }}

      >

        Generate Code

      </button>



      {code && (

        <div

          style={{

            marginTop: 30,

            fontSize: "48px",

            fontWeight: "bold",

            letterSpacing: "10px"

          }}

        >

          {code}

        </div>

      )}

    </div>

  );

}
