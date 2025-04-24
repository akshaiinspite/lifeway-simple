
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
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/lovable-uploads/af6dca26-4f7c-4559-a3bd-7a401a03ea95.png')",
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
