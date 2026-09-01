
import { Link } from "react-router-dom";
import { Home, Calendar, SmilePlus, Heart, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import homeCareImg from "@/assets/home-care.webp";

const HomeCareServiceTeaser = () => {
  return (
    <section id="home-rehabilitation" className="py-12 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-4">
              <span className="text-lifeway-red font-medium uppercase tracking-widest text-sm flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Home Care Services
              </span>
            </div>
            <h2 className="heading-lg mb-4 md:mb-6">Lifeway Home Rehabilitation Services</h2>
            <p className="mb-4 md:mb-6 text-gray-700 italic text-lg font-serif">
              Compassionate care—now at your doorstep.
            </p>
            <p className="mb-4 md:mb-6 text-gray-700">
              At Lifeway, we understand that recovery is personal—and often best supported in the comfort of your home. Our multidisciplinary team provides expert, personalized rehabilitation services for individuals of all ages, addressing neurological, orthopaedic, paediatric, and functional needs.
            </p>

            <div className="mb-6 md:mb-8">
              <Carousel className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {[
                    { icon: <Heart className="h-5 w-5 md:h-6 md:w-6 text-lifeway-red" />, text: "Rehabilitation in the comfort of your home" },
                    { icon: <SmilePlus className="h-5 w-5 md:h-6 md:w-6 text-lifeway-red" />, text: "Post-surgical and injury recovery care" },
                    { icon: <Star className="h-5 w-5 md:h-6 md:w-6 text-lifeway-red" />, text: "Neuro, ortho, and paediatric home-based therapy" },
                    { icon: <Home className="h-5 w-5 md:h-6 md:w-6 text-lifeway-red" />, text: "Speech, occupational, and psychological support at home" }
                  ].map((item, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                      <div className="p-3 md:p-4 border border-gray-100 rounded-lg bg-white flex items-center shadow-sm">
                        <div className="mr-3 md:mr-4 flex-shrink-0">{item.icon}</div>
                        <p className="text-gray-700 text-sm md:text-base">{item.text}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-6">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              </Carousel>
            </div>
            
            <p className="mb-6 md:mb-8 text-gray-700">
              Our home care services are designed to integrate seamlessly into your daily life—ensuring comfort, continuity, and effective outcomes.
              <span className="block mt-3 md:mt-4 font-medium">Let us bring quality rehabilitation care to you, wherever you are.</span>
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <Link to="/appointments" className="btn-primary flex items-center justify-center">
                <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Book Home Care Visit
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <img
              src={homeCareImg}
              alt="Home care services at Lifeway"
              title="Lifeway Home Rehabilitation Care"
              className="w-full h-auto rounded-lg shadow-xl"
              loading="lazy"
              decoding="async"
              width={1254}
              height={1254}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCareServiceTeaser;
