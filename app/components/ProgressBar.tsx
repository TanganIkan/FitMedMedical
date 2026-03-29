"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import { motion, AnimatePresence } from "framer-motion";

export default function ProgressBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setIsLoading(false);
    nProgress.done();

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (anchor && anchor.href && anchor.href.startsWith(window.location.origin)) {
        const isExternal = anchor.target === "_blank";
        const isSamePage = anchor.pathname === window.location.pathname && anchor.hash !== "";
        const isCurrentPage = anchor.href === window.location.href;

        if (!isExternal && !isSamePage && !isCurrentPage) {
          e.preventDefault();
          setIsLoading(true);
          nProgress.start();

          setTimeout(() => {
            router.push(anchor.href);
          }, 2000);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      nProgress.done();
    };
  }, [pathname, searchParams, router]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="h-screen w-full flex flex-col items-center justify-center bg-white z-[99999] fixed inset-0">
          <div className="relative flex flex-col items-center gap-8">
            <div className="relative w-28 h-28">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-4 border-slate-100 border-t-blue-600 rounded-full" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute inset-4 border-4 border-slate-50 border-b-emerald-400 rounded-full" />
              <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-[40px] bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)]" />
            </div>

            <div className="text-center space-y-2">
              <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-900 italic">
                Fit Med<span className="text-blue-600">Medical</span>
              </motion.h2>
              <div className="flex items-center justify-center gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                    className="w-1.5 h-1.5 bg-blue-600 rounded-full opacity-70"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-10 opacity-[0.03] select-none pointer-events-none text-left">
            <h1 className="text-9xl font-black italic uppercase leading-none">
              Professional
              <br />
              Healthcare
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
