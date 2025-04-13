
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-lifeway-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <div className="text-3xl font-serif font-bold text-white mb-4">
              Lifeway
              <span className="block text-sm text-lifeway-grey mt-1">
                The reason for your smile!
              </span>
            </div>
            <p className="text-lifeway-grey mb-6">
              Lifeway is dedicated to providing exceptional rehabilitation and 
              child development services, helping children reach their full potential.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-lifeway-grey hover:text-lifeway-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-lifeway-grey hover:text-lifeway-red transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-lifeway-grey hover:text-lifeway-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-lifeway-grey hover:text-lifeway-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-lifeway-grey hover:text-lifeway-red transition-colors">
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-lifeway-grey hover:text-lifeway-red transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-lifeway-grey hover:text-lifeway-red transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-lifeway-grey hover:text-lifeway-red transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div>
            <h4 className="text-xl font-bold mb-6">Departments</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/departments" className="text-lifeway-grey hover:text-lifeway-red transition-colors">
                  Occupational Therapy
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-lifeway-grey hover:text-lifeway-red transition-colors">
                  Physiotherapy
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-lifeway-grey hover:text-lifeway-red transition-colors">
                  Speech Therapy
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-lifeway-grey hover:text-lifeway-red transition-colors">
                  Special Education
                </Link>
              </li>
              <li>
                <Link to="/departments" className="text-lifeway-grey hover:text-lifeway-red transition-colors">
                  Clinical Psychology
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
                <span className="text-lifeway-grey">
                  123 Healing Way, Medical District
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-lifeway-red flex-shrink-0" size={18} />
                <a href="tel:+12345678900" className="text-lifeway-grey hover:text-lifeway-red transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-lifeway-red flex-shrink-0" size={18} />
                <a href="mailto:info@lifeway-hospital.com" className="text-lifeway-grey hover:text-lifeway-red transition-colors">
                  info@lifeway-hospital.com
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
            &copy; {new Date().getFullYear()} Lifeway Hospital. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-lifeway-grey hover:text-lifeway-red transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-lifeway-grey hover:text-lifeway-red transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
