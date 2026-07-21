/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface WAButtonProps {
  className?: string;
  children?: ReactNode;
}

export default function WAButton({ className, children }: WAButtonProps) {
  const trackConversion = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-18255807725/1yTLCMiBrM0cEO2JhoFE",
      });
    }
  };

  return (
    <Link
      href="https://wa.me/6285743333986"
      onClick={trackConversion}
      className={className} // <--- Class styling akan disuntikkan dari luar
    >
      {/* Teks atau icon di dalam tombol juga bisa di-custom */}
      {children ? children : "Free Consultation"}
    </Link>
  );
}
