import { useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PageHeader from "@/components/Layout/PageHeader";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const directors = [
  {
    name: "Mr. Junaidh",
    designation: "Managing Director & CEO",
    initials: "JN",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
    messages: [
      "Rehabilitation is not just about physical healing, but also mental and emotional growth. Welcome to our rehabilitation centre. I'm Junaidh, Managing Director & CEO at Lifeway Rehabilitation and Child Development Centre. I'm proud to lead a team that is committed to making a difference in the lives of our clients.",
      "Our rehabilitation centre is a place of hope and transformation. We are here to guide you every step of the way on your journey to wellness. I'm proud to be part of a community that cares, supports and empowers individuals to achieve their goals.",
      "Together, we are creating positive change and empowering individuals to live their best lives. Thank you to our clients and families for your strength, courage and resilience. We are honored to be part of your journey.",
      "To our dedicated team, thanks for your exceptional care and support. You're making a difference.",
    ],
  },
  {
    name: "Ms. Shiny Alangaden",
    designation: "Managing Director",
    initials: "SA",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    messages: [
      "Recovery is not just a destination, it's a journey. I'm Shiny Alangaden, Managing Director at Lifeway Rehabilitation and Child Development Centre, and I'm here to support you write the next chapter of hope and healing.",
      "Our mission is to provide compassionate care and support to help individuals overcome challenges and achieve your goals. I'm proud to be part of your journey towards healing and wellness.",
      "Let's work together towards a brighter, healthier future. Thank you for trusting us with your journey to recovery.",
    ],
  },
];

const DirectorsMessage = () => {
  useEffect(() => {
    document.title = "Directors' Message | Lifeway Rehabilitation";
  }, []);

  return (
    <>
      <Navbar />
      <PageHeader
        title="Directors' Message"
        description="Messages from the Directors at Lifeway Rehabilitation and Child Development Centre"
      />
      <main className="container-custom py-16 space-y-16">
        {directors.map((d, i) => (
          <section key={i} className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="relative w-56 h-56 rounded-full overflow-hidden mb-4 border-4 border-lifeway-red">
                <Avatar className="w-full h-full">
                  <AvatarImage src={d.image} alt={d.name} className="object-cover" />
                  <AvatarFallback>{d.initials}</AvatarFallback>
                </Avatar>
              </div>
              <h2 className="text-2xl font-bold text-lifeway-black text-center">{d.name}</h2>
              <p className="text-gray-600">{d.designation}</p>
            </div>
            <div className="md:w-2/3">
              <h3 className="heading-md text-lifeway-black mb-6">Director's Message</h3>
              <div className="text-lg space-y-4 text-gray-700">
                {d.messages.map((m, j) => (
                  <p key={j}>"{m}"</p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default DirectorsMessage;
