import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import { WatchProvider } from "./contexts/WatchContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watch ecommerce store",
  description: "Developed for fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WatchProvider>
          <NavBar />
          {children}
        </WatchProvider>
        <Footer />
      </body>
    </html>
  );
}
