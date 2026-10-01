import Banner from "@/components/Home/Banner";
import Introduction from "@/components/Home/Introduction";
import RehabSpecialties from "@/components/Home/RehabSpecialties";
import PhysiotherapyCareSection from "@/components/Home/PhysiotherapyCareSection";
import AutismSupportSection from "@/components/Home/AutismSupportSection";
import AllAgesRehabSection from "@/components/Home/AllAgesRehabSection";
import FAQSection from "@/components/FAQ/FAQSection";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import SocialFollowSection from "@/components/Common/SocialFollowSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-grow relative z-10" tabIndex={-1}>
        <Banner />
        <Introduction />
        <RehabSpecialties />
        <PhysiotherapyCareSection />
        <AutismSupportSection />
        <AllAgesRehabSection />
        <FAQSection />
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
