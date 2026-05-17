import React from "react";
import { WHATSAPP_URL } from "@/lib/constants";

const WhatsAppButton = () => {
  return (
    <div className="fixed z-50 bottom-[max(1rem,env(safe-area-inset-bottom,1rem))] right-[max(1rem,env(safe-area-inset-right,1rem))]">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex items-center justify-center rounded-full w-14 h-14 sm:w-12 sm:h-12 bg-[#25D366] hover:bg-[#20BD5C] shadow-lg transition-colors"
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M20.52 3.48A11.79 11.79 0 0 0 12.04 0C5.46 0 .12 5.34.12 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.86 11.86 0 0 0 5.76 1.47h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.44-8.43zM12.04 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.85 9.85 0 0 1-1.5-5.26c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.02 2.91a9.86 9.86 0 0 1 2.91 7.02c0 5.47-4.45 9.87-9.99 9.87zm5.71-7.39c-.31-.16-1.85-.91-2.13-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.54-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.13-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.54-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.54.08-.83.39-.29.31-1.09 1.07-1.09 2.6 0 1.53 1.12 3.02 1.27 3.23.16.21 2.2 3.36 5.34 4.71.75.32 1.33.52 1.78.66.75.24 1.43.21 1.97.13.6-.09 1.85-.76 2.11-1.5.26-.74.26-1.37.18-1.5-.08-.13-.29-.21-.6-.37z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
