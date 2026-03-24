import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Home Service", href: "#home-service" },
    { name: "Services", href: "#services" },
    { name: "Blogs", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-6 w-full z-50 px-4">
      <div className="max-w-7xl mx-auto">
        <nav className="bg-white/90 backdrop-blur-sm rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 px-6 py-3 flex items-center justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgb(59,130,246,0.1)]">
          <div className="flex items-center gap-2 pl-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-3">
              <span className="text-white font-bold text-lg -rotate-3">T</span>
            </div>
            <Link href="/" className="text-xl font-bold text-slate-900 tracking-tight hidden sm:block">
              Trishnanda<span className="text-blue-600">.</span>
            </Link>
          </div>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="px-4 py-2 text-[13px] font-semibold text-slate-600 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="https://wa.me/6281935250752"
            target="_blank"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-blue-200 transition-all active:scale-95 group"
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
