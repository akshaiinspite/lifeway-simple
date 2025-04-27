
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
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-white/90" /> {/* White overlay */}
        <div
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: "url('/lovable-uploads/9ebce2f5-dee9-4600-8d85-b52c34d4a8aa.png')",
            backgroundRepeat: "repeat",
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
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Index;
