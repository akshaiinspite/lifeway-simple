
import Banner from "@/components/Home/Banner";
import Introduction from "@/components/Home/Introduction";
import RehabSpecialties from "@/components/Home/RehabSpecialties";
import HomeCareServiceTeaser from "@/components/Home/HomeCareServiceTeaser";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import SocialFollowSection from "@/components/Common/SocialFollowSection";

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
      <main id="main-content" className="flex-grow relative z-10" tabIndex={-1}>
        <Banner />
        <Introduction />
        <RehabSpecialties />
        <HomeCareServiceTeaser />
        <SocialFollowSection />
      </main>
      
      <WhatsAppButton />
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
