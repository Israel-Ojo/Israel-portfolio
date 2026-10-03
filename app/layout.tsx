import "./globals.css";

export const metadata = {
  title: "Ojo Israel — Frontend Developer & UI Engineer",
  description:
    "Portfolio of Ojo Israel, a frontend developer specializing in React and Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}