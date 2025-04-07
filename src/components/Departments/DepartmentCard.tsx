
import { Link } from "react-router-dom";

export interface DepartmentCardProps {
  id: string;
  name: string;
  description: string;
  services: string[];
  ageGroups: string[];
  image: string;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({
  id,
  name,
  description,
  services,
  ageGroups,
  image,
}) => {
  return (
    <div id={id} className="mb-10 scroll-mt-24">
      <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <img
              src={image}
              alt={`${name} Department`}
              className="w-full h-full object-cover"
              style={{ minHeight: "300px" }}
            />
          </div>
          <div className="lg:col-span-2 p-6">
            <h3 className="text-2xl font-bold mb-3">{name}</h3>
            <p className="text-gray-700 mb-6">{description}</p>
            
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-2">Key Services</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-lifeway-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-2">Target Age Groups</h4>
              <div className="flex flex-wrap gap-2">
                {ageGroups.map((age, index) => (
                  <span
                    key={index}
                    className="bg-lifeway-grey/30 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {age}
                  </span>
                ))}
              </div>
            </div>
            
            <Link
              to="/contact"
              className="btn-primary inline-block"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;
