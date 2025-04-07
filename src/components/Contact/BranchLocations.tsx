
import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const branches = [
  {
    id: 1,
    name: "Lifeway Main Center",
    address: "123 Healthcare Avenue, Medical District, City",
    phone: "+1 (234) 567-8900",
    hours: "Monday - Friday: 8AM - 6PM, Saturday: 9AM - 2PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00639682427755!3d40.7101282739538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x40a06c78f79e5de6!2s123%20William%20St%2C%20New%20York%2C%20NY%2010038%2C%20USA!5e0!3m2!1sen!2sin!4v1712513234478!5m2!1sen!2sin",
  },
  {
    id: 2,
    name: "Lifeway South Branch",
    address: "456 Wellness Road, South District, City",
    phone: "+1 (234) 567-8901",
    hours: "Monday - Friday: 9AM - 5PM, Saturday: 10AM - 1PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00639682427755!3d40.7101282739538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x40a06c78f79e5de6!2s123%20William%20St%2C%20New%20York%2C%20NY%2010038%2C%20USA!5e0!3m2!1sen!2sin!4v1712513234478!5m2!1sen!2sin",
  },
  {
    id: 3,
    name: "Lifeway East Center",
    address: "789 Care Street, East Neighborhood, City",
    phone: "+1 (234) 567-8902",
    hours: "Monday - Friday: 8AM - 7PM, Saturday: 9AM - 3PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00639682427755!3d40.7101282739538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x40a06c78f79e5de6!2s123%20William%20St%2C%20New%20York%2C%20NY%2010038%2C%20USA!5e0!3m2!1sen!2sin!4v1712513234478!5m2!1sen!2sin",
  },
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
                <span>{branch.address}</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-lifeway-red shrink-0 mr-2 mt-0.5" />
                <span>{branch.phone}</span>
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
                  href={`https://wa.me/${branch.phone.replace(/\D/g, '')}`} 
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
