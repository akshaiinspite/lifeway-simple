
import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  // Generate random position for the background pattern
  const randomPosition = {
    x: Math.floor(Math.random() * 50),
    y: Math.floor(Math.random() * 50),
  };

  return (
    <div className="relative overflow-hidden bg-lifeway-grey py-16 md:py-24">
      {/* Background pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/lovable-uploads/4002ac48-bd37-4753-bb37-09539ee5794a.png')",
          backgroundRepeat: "repeat",
          backgroundPosition: `${randomPosition.x}% ${randomPosition.y}%`,
          backgroundSize: "300px",
        }}
      />
      <div className="container-custom relative z-10">
        <div className="text-center">
          <h1 className="heading-lg mb-4 text-lifeway-black">{title}</h1>
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
