'use client'
import React, { useState, useEffect, useRef } from "react";
import Chatbot from "./Chatbot";
import SplineLoader from "./SplineLoader"; // static import of your SplineLoader component

const FloatingChatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 w-25 h-20 rounded-full bg-transparent shadow-[0_4px_24px_rgba(37,99,235,0.2)] flex items-center justify-center z-[1001] border-none cursor-pointer"
        aria-label="Open Chatbot"
      >
        <SplineLoader />
      </button>

      {/* Modal Chat Window */}
      {open && (
        <div
          ref={modalRef}
          className="fixed bottom-[110px] right-10 w-[360px] max-w-[95vw] bg-zinc-900 text-zinc-50 rounded-2xl shadow-[0_8px_40px_rgba(24,24,27,0.45)] p-0 z-[1002] overflow-hidden"
        >
          {/* Close Button */}
          <div className="text-right p-[10px_14px_0]">
            <button
              onClick={() => setOpen(false)}
              className="bg-transparent border-none text-zinc-50 text-xl cursor-pointer"
              aria-label="Close Chatbot"
            >
              ×
            </button>
          </div>
          {/* Chatbot Component */}
          <Chatbot />
        </div>
      )}
    </>
  );
};

export default FloatingChatbot;
