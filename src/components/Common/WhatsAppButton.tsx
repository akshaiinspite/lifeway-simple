
import React from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-20 right-4 z-50">
      <Button
        asChild
        className="rounded-full w-12 h-12 bg-green-500 hover:bg-green-600"
      >
        <a
          href="https://wa.me/919645500080"
          target="_blank"
          rel="noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageSquare className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppButton;
