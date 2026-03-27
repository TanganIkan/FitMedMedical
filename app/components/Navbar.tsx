"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Promotion", href: "/promotion" },
    { name: "Home Service", href: "#home-service" },
    { name: "Services", href: "#services" },
    { name: "Blogs", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-6 w-full z-50 px-4">
      <div className="max-w-7xl mx-auto">
        <nav className="bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 px-6 py-3 flex items-center justify-between transition-all duration-300">
          {/* Logo Section */}
          <div className="flex items-center gap-2 pl-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-3">
              <span className="text-white font-bold text-lg -rotate-3">F</span>
            </div>
            <Link href="/" className="text-xl font-bold text-slate-900 tracking-tight hidden sm:block">
              Fit Med Medical<span className="text-blue-600">.</span>
            </Link>
          </div>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-[13px] font-bold transition-all duration-300 rounded-full
                      ${isActive ? "text-blue-600 bg-blue-50/50" : "text-slate-500 hover:text-blue-600 hover:bg-slate-50"}`}
                  >
                    {link.name}

                    {isActive && <motion.span layoutId="nav-indicator" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-600 rounded-full" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <Link
            href="https://wa.me/6281935250752"
            target="_blank"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-200 transition-all active:scale-95 group"
          >
            <Phone className="w-4 h-4 fill-white group-hover:animate-bounce" />
            <span className="hidden md:inline">Book Now</span>
            <span className="md:hidden">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
