
import React from "react";
import pageHeaderBg from "@/assets/page-header-bg.png";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <header className="relative overflow-hidden bg-lifeway-grey py-12 sm:py-16 md:py-24 mt-16 md:mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${pageHeaderBg})` }}
      />
      <div className="absolute inset-0 bg-white/75" />
      <div className="container-custom relative z-10">
        <div className="text-center">
          <h1 className="heading-lg mb-4 text-lifeway-black">{title}</h1>
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
