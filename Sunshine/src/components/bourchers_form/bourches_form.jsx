import React, { useState,useEffect } from 'react';
import { useCreateLeedMutation } from '../redux/api';

const BrochureRequestForm = () => {

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    showroom: ''
  });

  const [requestBrochure, { isLoading, isError, isSuccess }] = useCreateLeedMutation();
  const [showMessage, setShowMessage] = useState(isSuccess);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Wrap formData inside a data object
      const requestData = { data: formData };
      await requestBrochure(requestData).unwrap();
      // Handle success
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        showroom: ''
      });
      setShowMessage(true);
      // Remove success message after 2 seconds
      setTimeout(() => setShowMessage(false), 2000);
    } catch (error) {
      // Handle error
      console.error("Submission error: ", error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 2000); // 2 seconds

      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }
  }, [isSuccess]);

  return (
    <div className='bg-gray-100 '>
    <div className=" shadow-lg rounded-lg p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Brochure Request</h2>
      <p className="text-gray-600 mb-6">
        Please enter your details below so we can make sure you receive our brochure download link.
      </p>
      <p className="text-gray-600 mb-6">*We take safeguarding your details seriously.</p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstname" className="block text-gray-700 font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label htmlFor="lastname" className="block text-gray-700 font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="showroom" className="block text-gray-700 font-bold mb-2">
            Please select your nearest showroom below:**
          </label>
          <select
            id="showroom"
            name="showroom"
            value={formData.showroom}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Showroom</option>
            <option value="canberra">Canberra</option>
            {/* Add more showroom options as needed */}
          </select>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="bg-orange-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Your Request'}
          </button>
          {showMessage  && <p className="text-green-500 mt-4">Request sent successfully!</p>}
          {isError && <p className="text-red-500 mt-4">An error occurred. Please try again.</p>}
        </div>
      </form>
    </div>
    </div>
  );
};

export default BrochureRequestForm;
