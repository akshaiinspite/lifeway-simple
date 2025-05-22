
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Events from "./pages/Events";
import Appointments from "./pages/Appointments";
import HomeServices from "./pages/HomeServices";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import DirectorJunaidh from "./pages/DirectorJunaidh";
import DirectorShiny from "./pages/DirectorShiny";
import NotFound from "./pages/NotFound";
import EventsGallery from "./pages/EventsGallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events-gallery" element={<EventsGallery />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/home-services" element={<HomeServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/director-junaidh" element={<DirectorJunaidh />} />
          <Route path="/about-us/director-shiny" element={<DirectorShiny />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
