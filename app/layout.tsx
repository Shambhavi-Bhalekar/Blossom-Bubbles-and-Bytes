import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Berkshire_Swash } from "next/font/google"; // Import the font properly
import "./globals.css";
import Aurora from "@/src/blocks/Backgrounds/Aurora/Aurora";
import { AnimatedGradientTextDemo } from "@/src/components/ui/text";
import { ConfettiDemo } from "@/src/components/ui/confetti";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const berkshireSwash = Berkshire_Swash({ // Add Berkshire Swash
  weight: "400", // Adjust weight if needed
  subsets: ["latin"],
  variable: "--font-berkshire",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${berkshireSwash.variable}`}>
      <body>
        <Aurora />
        <div className="mx-7">
          <ConfettiDemo />
        </div>
        <div className="mt-5">
          <AnimatedGradientTextDemo />
        </div>
        {children}
      </body>
    </html>
  );
}
