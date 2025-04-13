
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
import { Card } from "@/components/ui/card";

const HomeCareServiceTeaser = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 md:py-28 bg-lifeway-lightblue">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-4">
              <span className="text-lifeway-blue font-medium uppercase tracking-widest text-sm flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Home Care Services
              </span>
            </div>
            <h2 className="heading-lg mb-4 md:mb-6 text-lifeway-blue">
              🏡 Lifeway Home Care Services
            </h2>
            <p className="mb-6 md:mb-8 text-gray-700 italic text-lg font-serif">
              "The reason for your smile" – now right at home.
            </p>
            <p className="mb-6 md:mb-8 text-gray-700 leading-relaxed">
              At Lifeway, we understand that healing is personal—and often, it begins at home. 
              That's why our expert therapists bring compassionate, personalized care directly to your door.
            </p>

            <div className="mb-8 md:mb-10">
              <Carousel className="w-full">
                <CarouselContent className="-ml-2 md:-ml-4">
                  {[
                    { icon: <SmilePlus className="h-5 w-5 md:h-6 md:w-6 text-lifeway-blue" />, text: "Pediatric therapy in a familiar environment" },
                    { icon: <Heart className="h-5 w-5 md:h-6 md:w-6 text-lifeway-blue" />, text: "Post-surgical rehabilitation at home" },
                    { icon: <Star className="h-5 w-5 md:h-6 md:w-6 text-lifeway-blue" />, text: "Ongoing developmental support" }
                  ].map((item, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2">
                      <Card className="p-4 md:p-5 border border-gray-100 rounded-lg flex items-center shadow-soft animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="mr-4 flex-shrink-0 bg-white/50 p-2 rounded-full">{item.icon}</div>
                        <p className="text-gray-700 text-sm md:text-base">{item.text}</p>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:flex">
                  <CarouselPrevious className="relative -left-4 border-lifeway-blue text-lifeway-blue hover:bg-lifeway-blue hover:text-white" />
                  <CarouselNext className="relative -right-4 border-lifeway-blue text-lifeway-blue hover:bg-lifeway-blue hover:text-white" />
                </div>
              </Carousel>
            </div>
            
            <p className="mb-8 md:mb-10 text-gray-700 leading-relaxed">
              Our Home Care Services are designed to fit seamlessly into your life—ensuring comfort, consistency, and results.
              <span className="block mt-4 md:mt-5 font-medium">Let us be the reason for your smile, wherever you are.</span>
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <Card className="bg-white p-4 md:p-5 rounded-lg shadow-card border-t-4 border-t-lifeway-green border-gray-100 flex-grow">
                <p className="text-center font-medium mb-3 text-lifeway-blue">Experience expert care without leaving home.</p>
                <div className="flex items-center justify-center bg-lifeway-lightblue rounded-lg p-2">
                  <Phone className="h-5 w-5 md:h-5 md:w-5 text-lifeway-blue mr-2" />
                  <span className="font-bold text-sm md:text-base">Schedule your home visit today!</span>
                </div>
              </Card>
              
              <Link to="/home-services" className="btn-primary flex items-center justify-center hover:translate-y-[-2px] transition-transform">
                <Calendar className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Book Home Care Visit
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                alt="Home care services at Lifeway"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="inline-block bg-lifeway-blue/90 backdrop-blur-sm py-1 px-3 rounded-full mb-2 text-sm">Professional Care</div>
                <h3 className="text-xl font-medium">Compassionate Therapy at Home</h3>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 bg-lifeway-green rounded-lg hidden sm:block opacity-75"></div>
            
            {/* Decorative elements */}
            <div className="absolute w-20 h-20 -top-8 -left-8 bg-yellow-100 rounded-full opacity-20 hidden lg:block"></div>
            <div className="absolute w-16 h-16 -bottom-8 -right-8 bg-lifeway-blue rounded-full opacity-20 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCareServiceTeaser;
