import { useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PageHeader from "@/components/Layout/PageHeader";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import SocialFollowSection from "@/components/Common/SocialFollowSection";
import frontWeb from "@/assets/front-web.jpg";
import homeCare from "@/assets/home-care.png";
import inpatient from "@/assets/inpatient-rehab.png";
import online from "@/assets/online-therapy.png";
import pickup from "@/assets/pickup-drop.png";

const images = [
  { src: frontWeb, alt: "Lifeway Rehabilitation Centre entrance" },
  { src: inpatient, alt: "In-patient rehabilitation session" },
  { src: homeCare, alt: "Home care therapy session" },
  { src: online, alt: "Online therapy session" },
  { src: pickup, alt: "Pickup and drop service" },
];

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery | Lifeway Rehabilitation";
  }, []);

  return (
    <>
      <Navbar />
      <PageHeader
        title="Gallery"
        description="A glimpse into our facility, therapy sessions, and care in action."
      />
      <main className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <figure key={i} className="rounded-lg overflow-hidden shadow-md bg-white">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
                <figcaption className="p-3 text-sm text-gray-700 text-center">{img.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </main>
      <SocialFollowSection />
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Gallery;
