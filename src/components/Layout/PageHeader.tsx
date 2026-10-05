
import React from "react";
import pageHeaderBg from "@/assets/page-header-bg.png";

interface PageHeaderProps {
  title: string;
  description?: string;
  /** Use "p" when the page renders its own SEO <h1> elsewhere (one H1 per page) */
  titleAs?: "h1" | "p";
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, titleAs = "h1" }) => {
  const TitleTag = titleAs;
  return (
    <header className="relative overflow-hidden bg-lifeway-grey py-12 sm:py-16 md:py-24 mt-16 md:mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${pageHeaderBg})` }}
      />
      <div className="absolute inset-0 bg-white/75" />
      <div className="container-custom relative z-10">
        <div className="text-center">
          <TitleTag className="heading-lg mb-4 text-lifeway-black">{title}</TitleTag>
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
