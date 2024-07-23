import { Inter as FontSans } from "next/font/google";
import Navbar from "@/components/navbar-menu/Navbar";
import Footer from "@/components/footer/Footer";
import "@/app/global.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
