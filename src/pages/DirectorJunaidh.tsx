
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PageHeader from "@/components/Layout/PageHeader";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const DirectorJunaidh = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Message from Director"
        description="Mr. Junaidh, Director at Lifeway Rehabilitation and Child Development Centre"
      />
      <div className="container-custom py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col items-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-lifeway-red">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80" 
                  alt="Director Junaidh"
                  className="object-cover"
                />
                <AvatarFallback>JN</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-2xl font-bold text-lifeway-black">Mr. Junaidh</h3>
            <p className="text-gray-600">Director</p>
          </div>
          
          <div className="md:w-2/3">
            <div className="prose max-w-none">
              <h2 className="heading-md text-lifeway-black mb-6">Director's Message</h2>
              
              <div className="text-lg space-y-4">
                <p>
                  "Rehabilitation is not just about physical healing, but also mental and emotional growth. Welcome to our rehabilitation centre. I'm Junaidh, Director at Lifeway Rehabilitation and Child Development Centre. I'm proud to lead a team that is committed to making a difference in the lives of our clients."
                </p>
                
                <p>
                  "Our rehabilitation centre is a place of hope and transformation. We are here to guide you every step of the way on your journey to wellness. I'm proud to be part of a community that caves, Supports and empowers individuals to achieve their goals."
                </p>
                
                <p>
                  "Together, we are creating positive change and empowering individuals to live their best lives. Thank you to our clients and families for your strength, Courage and resilience. We are honored to be part of your journey."
                </p>
                
                <p>
                  "To our dedicated team, thanks for your exceptional care and support, You're making a difference."
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

export default DirectorJunaidh;
