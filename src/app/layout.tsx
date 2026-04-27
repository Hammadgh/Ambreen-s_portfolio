import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ambreen Rashid Khan - Clinical Psychologist | Mental Wellness Expert",
  description: "Empowering change for a happy, authentic life. Clinical psychologist offering individual, couples, and group therapy in Lahore, Pakistan.",
};
export const metadata = {
  verification: {
    google: "wA83WgRPghu40_a8j-KC6lIDv29FIIi8EPWHEjHC4-M",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
