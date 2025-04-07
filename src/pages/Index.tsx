
import Banner from "@/components/Home/Banner";
import Introduction from "@/components/Home/Introduction";
import DepartmentHighlights from "@/components/Home/DepartmentHighlights";
import HomecareServices from "@/components/Home/HomecareServices";
import Testimonials from "@/components/Home/Testimonials";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Introduction />
      <DepartmentHighlights />
      <HomecareServices />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Index;
