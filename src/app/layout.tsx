import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { Analytics } from "@vercel/analytics/react"

const comfortaa = Comfortaa({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "KK Chakma",
  description: "Kamal Kanti Chakma Portfolio, a software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={comfortaa.className}>
          <div>
            <Navbar />
          </div>
          {children}
          <Analytics/>
          <div className="mt-10">
            <Footer />
          </div>
        </body>
      </Providers>
    </html>
  );
}
