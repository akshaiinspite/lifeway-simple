
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PageHeader from "@/components/Layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const EventsGallery = () => {
  const galleryImages = [
    {
      title: "Team Building Workshop",
      date: "March 15, 2025",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      title: "Annual Conference",
      date: "April 22, 2025",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    },
    {
      title: "Community Meet",
      date: "May 10, 2025",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    },
    {
      title: "Tech Seminar",
      date: "June 5, 2025",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Parent Workshop",
      date: "July 12, 2025",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    {
      title: "Staff Training",
      date: "August 8, 2025",
      imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    },
  ];

  const randomPosition = {
    x: Math.floor(Math.random() * 50),
    y: Math.floor(Math.random() * 50),
  };

  return (
    <>
      <Navbar />
      <PageHeader
        title="Events Gallery"
        description="Browse through our collection of memorable event moments"
      />
      {/* Pattern below header */}
      <div className="w-full h-12 bg-gradient-to-r from-orange-50 to-gray-100 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/lovable-uploads/8fc5e78f-d1a8-4414-9a39-e87a2e476fb9.png')",
            backgroundRepeat: "repeat",
            backgroundPosition: `${randomPosition.x}% ${randomPosition.y}%`,
            backgroundSize: "200px",
            opacity: 0.2,
          }}
        />
      </div>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsGallery;
