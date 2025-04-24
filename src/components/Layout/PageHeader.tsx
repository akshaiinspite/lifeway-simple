
import React from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="relative overflow-hidden bg-lifeway-grey py-16 md:py-24">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/lovable-uploads/af6dca26-4f7c-4559-a3bd-7a401a03ea95.png')",
          backgroundRepeat: "repeat",
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
