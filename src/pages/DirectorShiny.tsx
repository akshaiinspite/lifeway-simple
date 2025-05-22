
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PageHeader from "@/components/Layout/PageHeader";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const DirectorShiny = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Message from Director"
        description="Ms. Shiny Alangaden, Director at Lifeway Rehabilitation and Child Development Centre"
      />
      <div className="container-custom py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col items-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-lifeway-red">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                  alt="Director Shiny Alangaden"
                  className="object-cover"
                />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-2xl font-bold text-lifeway-black">Ms. Shiny Alangaden</h3>
            <p className="text-gray-600">Director</p>
          </div>
          
          <div className="md:w-2/3">
            <div className="prose max-w-none">
              <h2 className="heading-md text-lifeway-black mb-6">Director's Message</h2>
              
              <div className="text-lg space-y-4">
                <p>
                  "Recovery is not just a destination, it's a journey. I'm Shiny Alangaden, Director at Lifeway Rehabilitation and Child Development Centre, and I'm here to Support you write the next chapter of hope and healing."
                </p>
                
                <p>
                  "Our mission is to provide compassionate care and support to help individuals overcome challenges and achieve your goals. I'm proud to be part of your journey towards healing and wellness."
                </p>
                
                <p>
                  "Let's work together for a towards a brighter, healthier future. Thank you for trusting us with your journey to recovery."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default DirectorShiny;
