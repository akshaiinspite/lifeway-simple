
import { Link } from "react-router-dom";
import { Home, Calendar, Phone, SmilePlus, Heart, Star } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const HomeCareServiceTeaser = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-4">
              <span className="text-lifeway-red font-medium uppercase tracking-widest text-sm flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Home Care Services
              </span>
            </div>
            <h2 className="heading-lg mb-4 md:mb-6">
              🏡 Lifeway Home Care Services
            </h2>
            <p className="mb-4 md:mb-6 text-gray-700 italic text-lg font-serif">
              "The reason for your smile" – now right at home.
            </p>
            <p className="mb-4 md:mb-6 text-gray-700">
              At Lifeway, we understand that healing is personal—and often, it begins at home. 
              That's why our expert therapists bring compassionate, personalized care directly to your door.
            </p>

            <div className="mb-6 md:mb-8">
              <Carousel className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {[
                    { icon: <SmilePlus className="h-5 w-5 md:h-6 md:w-6 text-lifeway-red" />, text: "Pediatric therapy in a familiar environment" },
                    { icon: <Heart className="h-5 w-5 md:h-6 md:w-6 text-lifeway-red" />, text: "Post-surgical rehabilitation at home" },
                    { icon: <Star className="h-5 w-5 md:h-6 md:w-6 text-lifeway-red" />, text: "Ongoing developmental support" }
                  ].map((item, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                      <div className="p-3 md:p-4 border border-gray-100 rounded-lg bg-white flex items-center shadow-sm">
                        <div className="mr-3 md:mr-4 flex-shrink-0">{item.icon}</div>
                        <p className="text-gray-700 text-sm md:text-base">{item.text}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:flex">
                  <CarouselPrevious className="relative -left-4" />
                  <CarouselNext className="relative -right-4" />
                </div>
              </Carousel>
            </div>
            
            <p className="mb-6 md:mb-8 text-gray-700">
              Our Home Care Services are designed to fit seamlessly into your life—ensuring comfort, consistency, and results.
              <span className="block mt-3 md:mt-4 font-medium">Let us be the reason for your smile, wherever you are.</span>
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-100 flex-grow">
                <p className="text-center font-medium mb-2">Experience expert care without leaving home.</p>
                <div className="flex items-center justify-center">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 text-lifeway-red mr-2" />
                  <span className="font-bold text-sm md:text-base">Schedule your home visit today!</span>
                </div>
              </div>
              
              <Link to="/home-services" className="btn-primary flex items-center justify-center">
                <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Book Home Care Visit
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                alt="Home care services at Lifeway"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 bg-lifeway-red rounded-lg hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCareServiceTeaser;
