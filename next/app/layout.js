export default function RootLayout({ children }) {
  return (
      <html lang="pl">
          <head>
              <link rel="icon" href="/icon.jpg" type="image/jpeg" />
              <title>Moja Aplikacja</title>
          </head>
          <body>{children}</body>
      </html>
  );
}
