import { Inter } from "next/font/google";
import Navbar from "@/components/navbar-menu/Navbar";
import Footer from "@/components/footer/Footer";
import "@/app/global.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
