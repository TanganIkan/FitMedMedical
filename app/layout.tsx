import { Suspense } from "react"; // 1. Import Suspense
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900">
        <ProgressBar />
        <Suspense fallback={null}>
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
