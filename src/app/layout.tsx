import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Flex } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/page";

import Footer from "./footer/page";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className} id="img">
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
