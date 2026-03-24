"use client"; // Pindahkan "use client" ke sini

import { useState } from "react";
import Treatment from "./Treatment";
import Modal from "./Modal";

const TREATMENT_CONTENT: Record<string, { name: string; price: string }[]> = {
  VACCINATIONS: [
    { name: "DENGUE FEVER", price: "1.000 K" },
    { name: "HEPATITIS A", price: "885 K" },
    { name: "HEPATITIS B", price: "705 K" },
    { name: "HPV (VACCINE)", price: "3.000 K" },
  ],
  "MEDICAL TESTS": [
    { name: "PCR SWAB TEST", price: "275 K" },
    { name: "ANTIGEN TEST", price: "95 K" },
    { name: "VITAMIN D TEST", price: "450 K" },
  ],
  "GENERAL HEALTH PANELS": [
    { name: "BASIC CHECKUP", price: "1.200 K" },
    { name: "FULL BLOOD PANEL", price: "2.500 K" },
  ],
  "PRIVATE WELLNESS TESTS": [
    { name: "DNA WELLNESS", price: "5.500 K" },
    { name: "FOOD INTOLERANCE", price: "3.200 K" },
  ],
};

export default function HomeClientWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleOpenModal = (title: string) => {
    setSelectedTitle(title);
    setIsModalOpen(true);
  };

  return (
    <>
      <Treatment onOpenModal={handleOpenModal} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={selectedTitle}>
        <div className="flex flex-col">
          {(TREATMENT_CONTENT[selectedTitle] || []).map((item, idx, arr) => (
            <div key={idx} className={`flex justify-between items-center py-5 px-4 rounded-xl transition-colors hover:bg-slate-50 ${idx !== arr.length - 1 ? "border-b border-dashed border-slate-200" : ""}`}>
              <span className="font-bold text-slate-800 uppercase tracking-tight text-sm">{item.name}</span>
              <span className="bg-blue-50 px-5 py-2 rounded-full font-black text-blue-600 text-[13px] shadow-sm border border-blue-100">{item.price}</span>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}
