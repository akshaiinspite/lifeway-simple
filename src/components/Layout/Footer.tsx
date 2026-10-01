
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, MessageSquare } from "lucide-react";
import lifewayLogoRed from "@/assets/lifeway-logo-red.png";

const Footer = () => {
  return (
    <footer className="bg-lifeway-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <img 
                src={lifewayLogoRed}
                alt="Lifeway Rehabilitation logo"
                title="Lifeway Logo - A way to new life"
                className="h-14 w-14 sm:h-16 sm:w-16 shrink-0 object-contain"
                width={64}
                height={64}
                loading="lazy"
                decoding="async"
              />
              <div className="leading-none">
                <span className="block text-2xl sm:text-3xl font-serif font-bold text-white">
                  Lifeway
                </span>
                <span className="block text-sm sm:text-base font-serif font-normal text-lifeway-grey mt-1 tracking-wide">
                  A way to new life
                </span>
              </div>
            </div>
            <p className="text-lifeway-grey mb-6">
              Lifeway is dedicated to providing exceptional rehabilitation and 
              child development services, helping children reach their full potential.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/12JeDRhBoTi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lifeway-grey hover:text-lifeway-red transition-colors min-h-[48px] min-w-[48px] inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://x.com/Lifewayrehab?t=VNK38ivpS13siAGIddeAqw&s=08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lifeway-grey hover:text-lifeway-red transition-colors min-h-[48px] min-w-[48px] inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com/lifewayrehab?igsh=NWFrbWJxNXk1OWRo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lifeway-grey hover:text-lifeway-red transition-colors min-h-[48px] min-w-[48px] inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/919645500081" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lifeway-grey hover:text-lifeway-red transition-colors min-h-[48px] min-w-[48px] inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10"
                aria-label="WhatsApp"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-1.5 min-h-[44px]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-1.5 min-h-[44px]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-1.5 min-h-[44px]">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-1.5 min-h-[44px]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-1.5 min-h-[44px]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/rehabilitation-centre-in-perinthalmanna" className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-1.5 min-h-[44px]">
                  Rehabilitation Centre
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/occupational-therapy" className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-1.5 min-h-[44px]">
                  Occupational Therapy
                </Link>
              </li>
              <li>
                <Link to="/services/physiotherapy" className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-1.5 min-h-[44px]">
                  Physiotherapy
                </Link>
              </li>
              <li>
                <Link to="/services/speech-therapy" className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-1.5 min-h-[44px]">
                  Speech Therapy
                </Link>
              </li>
              <li>
                <Link to="/services/special-education" className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-1.5 min-h-[44px]">
                  Special Education
                </Link>
              </li>
              <li>
                <Link to="/services/clinical-psychology" className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-1.5 min-h-[44px]">
                  Clinical Psychology
                </Link>
              </li>
              <li>
                <Link to="/services#convenient-care" className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-1.5 min-h-[44px]">
                  Convenient Care Options
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-lifeway-red flex-shrink-0 mt-1" size={18} />
                <a 
                  href="https://maps.google.com/?q=LifeWay+Rehabilitation+and+Child+Development+Centre,+Alangaden+Arcade,+Calicut+road,+Perinthalmanna+-+679322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-2 min-h-[48px]"
                >
                  LifeWay Rehabilitation and Child Development Centre,
                  <br />
                  Alangaden Arcade, Calicut road,
                  <br />
                  Perinthalmanna - 679322
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-lifeway-red flex-shrink-0" size={18} />
                <div className="flex flex-col space-y-1">
                  <a href="tel:+919645500081" className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-1.5 min-h-[44px] flex items-center">
                    +91 9645500081
                  </a>
                  <a href="tel:+919645500082" className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-1.5 min-h-[44px] flex items-center">
                    +91 9645500082
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <MessageSquare className="mr-3 text-lifeway-red flex-shrink-0" size={18} />
                <a 
                  href="https://wa.me/919645500081" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-2 min-h-[44px] flex items-center"
                >
                  +91 9645500081 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-lifeway-red flex-shrink-0" size={18} />
                <a href="mailto:lifewaypmna@gmail.com" className="text-lifeway-grey hover:text-lifeway-red transition-colors inline-block py-2 min-h-[44px] flex items-center">
                  lifewaypmna@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 text-lifeway-red flex-shrink-0 mt-1" size={18} />
                <span className="text-lifeway-grey">
                  Monday - Friday: 8:00 AM - 7:00 PM
                  <br />
                  Saturday: 8:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-lifeway-grey text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lifeway Rehabilitation and Child Development Centre. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Add "Follow Us" section with social media icons */}
      <div className="container-custom mt-8 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-lifeway-grey text-base mb-4 md:mb-0">
            Follow us on social media:
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <a 
              href="https://www.facebook.com/share/12JeDRhBoTi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-lifeway-grey hover:text-lifeway-red transition-colors min-h-[48px] px-3 py-2 rounded-md hover:bg-white/10"
            >
              <Facebook size={20} />
              <span>Facebook</span>
            </a>
            <a 
              href="https://x.com/Lifewayrehab?t=VNK38ivpS13siAGIddeAqw&s=08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-lifeway-grey hover:text-lifeway-red transition-colors min-h-[48px] px-3 py-2 rounded-md hover:bg-white/10"
            >
              <Twitter size={20} />
              <span>X</span>
            </a>
            <a 
              href="https://www.instagram.com/lifewayrehab?igsh=NWFrbWJxNXk1OWRo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-lifeway-grey hover:text-lifeway-red transition-colors min-h-[48px] px-3 py-2 rounded-md hover:bg-white/10"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a 
              href="https://wa.me/919645500081" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-lifeway-grey hover:text-lifeway-red transition-colors min-h-[48px] px-3 py-2 rounded-md hover:bg-white/10"
            >
              <MessageSquare size={20} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
