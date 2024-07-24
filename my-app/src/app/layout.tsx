"use client";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar-menu/Navbar";
import Footer from "@/components/footer/Footer";
import { SessionProvider } from "next-auth/react";
import "@/app/global.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
