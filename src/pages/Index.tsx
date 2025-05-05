
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
import WhatsAppButton from "@/components/Common/WhatsAppButton";

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
            backgroundImage: "url('/lovable-uploads/4002ac48-bd37-4753-bb37-09539ee5794a.png')",
            backgroundRepeat: "repeat",
            backgroundPosition: `${randomPosition.x}% ${randomPosition.y}%`,
            backgroundSize: "300px",
          }}
        />
      </div>
      <Navbar />
      <main className="flex-grow relative z-10">
        <Banner />
        <Introduction />
        <DepartmentHighlights />
        <HomeCareServiceTeaser />
        <HomecareServices />
        <FAQSection />
        <Testimonials />
      </main>
      
      <WhatsAppButton />
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Index;
