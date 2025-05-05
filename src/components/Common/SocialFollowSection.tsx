
import React from "react";
import { Facebook, Twitter, Instagram, MessageSquare } from "lucide-react";

const SocialFollowSection = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4 md:mb-0">
            Follow Us:
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.facebook.com/share/12JeDRhBoTi/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-blue-50 transition-colors"
            >
              <Facebook className="text-blue-600" size={24} />
              <span>Facebook</span>
            </a>
            <a
              href="https://x.com/Lifewayrehab?t=VNK38ivpS13siAGIddeAqw&s=08"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
            >
              <Twitter className="text-black" size={24} />
              <span>X</span>
            </a>
            <a
              href="https://www.instagram.com/lifewayrehab?igsh=NWFrbWJxNXk1OWRo"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-pink-50 transition-colors"
            >
              <Instagram className="text-pink-600" size={24} />
              <span>Instagram</span>
            </a>
            <a
              href="https://wa.me/919645500080"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-green-50 transition-colors"
            >
              <MessageSquare className="text-green-600" size={24} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFollowSection;
