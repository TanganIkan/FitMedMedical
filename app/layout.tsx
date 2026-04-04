import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/images/Logo/fit-med.png",

    apple: "/images/Logo/fit-med.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900">
        <Suspense fallback={null}>
          <ProgressBar />
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
