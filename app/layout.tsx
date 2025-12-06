export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (

    <html lang="en">

      <head>

        <link rel="manifest" href="/manifest.json" />

      </head>

      <body style={{ margin: 0, padding: 0, fontFamily: "sans-serif" }}>

        {children}

      </body>

    </html>

  );

}
