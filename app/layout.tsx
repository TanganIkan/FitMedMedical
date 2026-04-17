import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fit Med Medical | 24/7 Bali Medical Home Service & IV Therapy",
  description: "Top-quality healthcare delivered directly to your villa, hotel, or residence in Bali. Expert doctors, IV drip for Bali Belly, home care, and lab services.",
  keywords: [
    "bali medical home service 24/7",
    "doctor on call villa and hotel in bali",
    "mobile medical clinic denpasar bali",

    "bali belly iv drip therapy treatment",
    "hangover and immune booster infusion bali",
    "nurse home visit and wound care bali",
    "home lab service and health checkup denpasar",

    "book doctor via whatsapp bali",
    "online medical consultation and prescription bali",
    "fast response medical assistance canggu denpasar",
  ],
  authors: [{ name: "Fit Med Medical Team" }],
  creator: "Fit Med Medical Centre",

  openGraph: {
    title: "Fit Med Medical | Bali Medical Home Service",
    description: "Certified medical professionals delivered to your door. 24/7 doctor consultations, IV therapies, and home care in Bali.",
    url: "https://fitmedmedical.com",
    siteName: "Fit Med Medical",
    images: [
      {
        url: "/images/Logo/fit-med.png",
        width: 400,
        height: 400,
        alt: "Fit Med Medical Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

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
