
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSEO from "@/components/SEO/PageSEO";
import SkipToContent from "@/components/Layout/SkipToContent";
import ScrollToTop from "@/components/Layout/ScrollToTop";
import Index from "./pages/Index";
import { rootLevelServicePaths } from "@/data/serviceDetails";

// Lazy-loaded routes for code splitting and fast initial page load (FCP / TBT / Speed Index)
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Team = lazy(() => import("./pages/Team"));
const Careers = lazy(() => import("./pages/Careers"));
const Events = lazy(() => import("./pages/Events"));
const EventsGallery = lazy(() => import("./pages/EventsGallery"));
const HomeServices = lazy(() => import("./pages/HomeServices"));
const Contact = lazy(() => import("./pages/Contact"));
const Appointments = lazy(() => import("./pages/Appointments"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const DirectorsMessage = lazy(() => import("./pages/DirectorsMessage"));
const Gallery = lazy(() => import("./pages/Gallery"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-lifeway-red border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SkipToContent />
        <ScrollToTop />
        <PageSEO />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            {/* Root-level SEO service URLs, e.g. /occupational-therapy-in-perinthalmanna */}
            {rootLevelServicePaths.map((path) => (
              <Route key={path} path={path} element={<ServiceDetail />} />
            ))}
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events-gallery" element={<EventsGallery />} />
            <Route path="/home-services" element={<HomeServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/best-rehabilitation-centre-malappuram" element={<AboutUs />} />
            <Route path="/best-rehabilitation-centre-malappuram/directors-message" element={<DirectorsMessage />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* SEO slug serves the home page (canonical → "/") */}
            <Route path="/rehabilitation-centre-in-perinthalmanna" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
