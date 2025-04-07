
import { useState } from 'react';
import { toast } from "sonner";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    resume: null as File | null,
  });
  
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Application submitted successfully! We'll be in touch soon.");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        message: '',
        resume: null,
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="firstName" className="block mb-2 font-medium">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lifeway-red focus:border-lifeway-red outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-2 font-medium">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lifeway-red focus:border-lifeway-red outline-none"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lifeway-red focus:border-lifeway-red outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lifeway-red focus:border-lifeway-red outline-none"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="position" className="block mb-2 font-medium">Position Applying For *</label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lifeway-red focus:border-lifeway-red outline-none"
            required
          >
            <option value="">Select a position</option>
            <option value="Occupational Therapist">Occupational Therapist</option>
            <option value="Physical Therapist">Physical Therapist</option>
            <option value="Speech Therapist">Speech Therapist</option>
            <option value="Special Education Teacher">Special Education Teacher</option>
            <option value="Clinical Psychologist">Clinical Psychologist</option>
            <option value="Administrative Assistant">Administrative Assistant</option>
            <option value="Internship">Internship</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 font-medium">Cover Letter / Additional Information</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lifeway-red focus:border-lifeway-red outline-none resize-none"
          ></textarea>
        </div>
        
        <div className="mb-8">
          <label htmlFor="resume" className="block mb-2 font-medium">Resume/CV (PDF or DOC) *</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lifeway-red focus:border-lifeway-red outline-none"
            required
          />
          <p className="mt-2 text-sm text-gray-500">
            Max file size: 5MB. Accepted formats: PDF, DOC, DOCX
          </p>
        </div>
        
        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
