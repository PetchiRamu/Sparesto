import { Inter, Inter_Mono } from "next/font/google";
import "./globals.css";
// import Footer from "./components/footer";

import FooterWrapper from "./components/FooterWrapper";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});



export const metadata = {
  title: "Sparesto",
  description: "Powering Wind. Delivering Spares.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} antialiased`}
      >
        <header/>
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}

