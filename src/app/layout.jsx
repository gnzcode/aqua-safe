import "./globals.css";

export const metadata = {
  title: "Aqua Safe",
  description:
    "Aqua Safe es una empresa dedicada a la preservación y reconstrucción de ecosistemas acuáticos. Nuestro objetivo es restaurar y proteger los hábitats acuáticos en todo el mundo, con un enfoque especial en zonas costeras.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
        <link rel="shortcut icon" href="assets/favicon.svg" type="image/svg" />
        <meta name="robots" content="noindex" />
      </head>
      <body>{children}</body>
    </html>
  );
}
