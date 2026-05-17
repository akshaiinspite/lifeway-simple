
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4 pt-24 pb-16"
        tabIndex={-1}
      >
        <div className="text-center max-w-md">
          <h1 className="heading-lg mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-6">
            We couldn&apos;t find <span className="font-mono text-sm break-all">{location.pathname}</span>.
            It may have moved or no longer exists.
          </p>
          <Link to="/" className="btn-primary inline-block">
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
