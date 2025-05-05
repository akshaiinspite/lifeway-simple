
import React from "react";
import { MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const branches = [
  {
    id: 1,
    name: "Lifeway Main Center",
    address: "LifeWay Rehabilitation and Child Development Centre, Alangaden Arcade, Calicut road, Perinthalmanna - 679322",
    phone: "+91 9645500081",
    whatsapp: "+91 9645500080",
    hours: "Monday - Friday: 8AM - 6PM, Saturday: 9AM - 2PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15662.259521515545!2d76.2199255!3d10.9856455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd85fce5f2bb%3A0xee6d1a7d3b2850ef!2sLifeway%20Rehabilitation%20and%20Child%20Development%20Centre!5e0!3m2!1sen!2sin!4v1717773642258!5m2!1sen!2sin",
  },
  {
    id: 2,
    name: "Lifeway South Branch",
    address: "LifeWay Rehabilitation and Child Development Centre, Alangaden Arcade, Calicut road, Perinthalmanna - 679322",
    phone: "+91 9645500082",
    whatsapp: "+91 9645500080",
    hours: "Monday - Friday: 9AM - 5PM, Saturday: 10AM - 1PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15662.259521515545!2d76.2199255!3d10.9856455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd85fce5f2bb%3A0xee6d1a7d3b2850ef!2sLifeway%20Rehabilitation%20and%20Child%20Development%20Centre!5e0!3m2!1sen!2sin!4v1717773642258!5m2!1sen!2sin",
  }
];

const BranchLocations = () => {
  return (
    <div className="space-y-10">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
        
        {branches.map((branch) => (
          <div key={branch.id} className="mb-10 last:mb-0">
            <h3 className="text-xl font-bold mb-2">{branch.name}</h3>
            
            <div className="h-64 mb-4 rounded-lg overflow-hidden">
              <iframe
                title={branch.name}
                src={branch.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md"
              ></iframe>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-lifeway-red shrink-0 mr-2 mt-0.5" />
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-lifeway-red transition-colors"
                >
                  {branch.address}
                </a>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-lifeway-red shrink-0 mr-2 mt-0.5" />
                <a href={`tel:${branch.phone.replace(/\D/g, '')}`} className="hover:text-lifeway-red transition-colors">
                  {branch.phone}
                </a>
              </div>
              <div className="flex items-start">
                <MessageSquare className="h-5 w-5 text-lifeway-red shrink-0 mr-2 mt-0.5" />
                <a 
                  href={`https://wa.me/${branch.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-lifeway-red transition-colors"
                >
                  {branch.whatsapp} (WhatsApp)
                </a>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-lifeway-red shrink-0 mr-2 mt-0.5" />
                <span>{branch.hours}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href={`tel:${branch.phone.replace(/\D/g, '')}`}>
                  Call Now
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a 
                  href={`https://wa.me/${branch.whatsapp.replace(/\D/g, '')}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchLocations;
