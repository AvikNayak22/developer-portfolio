import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Avik Nayak | Developer",
  description: "Portfolio of Avik Nayak, a web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans">
      <body className="bg-gray-900 text-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
