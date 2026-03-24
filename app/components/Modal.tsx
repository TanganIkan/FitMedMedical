import { X } from "lucide-react";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-slate-950/70 transition-opacity backdrop-blur-sm" aria-hidden="true" onClick={onClose}></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-[32px] bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl border border-slate-100">
          {/* Header Modal */}
          <div className="flex items-center justify-between px-10 py-8 border-b border-slate-100">
            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600" id="modal-title">
              {title}
            </h3>
            <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors">
              <X className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>

          {/* Konten Dinamis (Daftar Harga, dll) */}
          <div className="px-10 py-10">{children}</div>

          {/* Footer Modal dengan Tombol Sesuai Style Hero */}
          <div className="px-10 pb-10 flex gap-4">
            <Link
              href="#booking"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2.5 py-4.5 text-base font-bold rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-all active:scale-95 group"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
