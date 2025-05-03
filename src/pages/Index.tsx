
import Banner from "@/components/Home/Banner";
import Introduction from "@/components/Home/Introduction";
import DepartmentHighlights from "@/components/Home/DepartmentHighlights";
import HomecareServices from "@/components/Home/HomecareServices";
import HomeCareServiceTeaser from "@/components/Home/HomeCareServiceTeaser";
import Testimonials from "@/components/Home/Testimonials";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ChatBot from "@/components/Chat/ChatBot";
import FAQSection from "@/components/FAQ/FAQSection";

const Index = () => {
  const randomPosition = {
    x: Math.floor(Math.random() * 50),
    y: Math.floor(Math.random() * 50),
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-white/90" />
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/lovable-uploads/99a2e717-bbef-4f7d-9716-a7487aa92565.png')",
            backgroundRepeat: "repeat",
            backgroundPosition: `${randomPosition.x}% ${randomPosition.y}%`,
            backgroundSize: "300px",
            opacity: 0.1,
          }}
        />
      </div>
      <Navbar />
      {/* Pattern below header */}
      <div className="w-full h-12 bg-gradient-to-r from-lifeway-red/10 to-gray-100 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/lovable-uploads/99a2e717-bbef-4f7d-9716-a7487aa92565.png')",
            backgroundRepeat: "repeat",
            backgroundPosition: `${randomPosition.x}% ${randomPosition.y}%`,
            backgroundSize: "200px",
            opacity: 0.75,
          }}
        />
      </div>
      <main className="flex-grow relative z-10">
        <Banner />
        <Introduction />
        <DepartmentHighlights />
        <HomeCareServiceTeaser />
        <HomecareServices />
        <FAQSection />
        <Testimonials />
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Index;
