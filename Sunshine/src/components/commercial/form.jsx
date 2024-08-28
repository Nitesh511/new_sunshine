import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    query: '',
    message: '',
    referral: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.phone) errors.phone = 'Contact Number is required';
    if (!formData.query) errors.query = 'Please select a query type';
    if (!formData.message) errors.message = 'Message cannot be empty';
    if (!formData.referral) errors.referral = 'Please select how you heard about us';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="bg-white  mb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Get In Touch, We'd Love To Hear From You.
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`mt-1 block w-full py-3 px-4 border rounded-md shadow-sm sm:text-lg border-gray-300 ${errors.firstName ? 'border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500'}`}
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`mt-1 block w-full py-3 px-4 border rounded-md shadow-sm sm:text-lg border-gray-300 ${errors.lastName ? 'border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500'}`}
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full py-3 px-4 border rounded-md shadow-sm sm:text-lg border-gray-300 ${errors.email ? 'border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500'}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 block w-full py-3 px-4 border rounded-md shadow-sm sm:text-lg border-gray-300 ${errors.phone ? 'border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500'}`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="query" className="block text-sm font-medium text-gray-700">
              What is your query about?
            </label>
            <select
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              className={`mt-1 block w-full py-3 px-4 border rounded-md shadow-sm sm:text-lg border-gray-300 ${errors.query ? 'border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500'}`}
            >
              <option value="">Select an option</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Product Information">Product Information</option>
              <option value="Feedback">Feedback</option>
              <option value="Other">Other</option>
            </select>
            {errors.query && <p className="text-red-500 text-sm mt-1">{errors.query}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 block w-full py-3 px-4 border rounded-md shadow-sm sm:text-lg border-gray-300 ${errors.message ? 'border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500'}`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          <div>
            <label htmlFor="referral" className="block text-sm font-medium text-gray-700">
              Where did you hear about us?
            </label>
            <select
              id="referral"
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              className={`mt-1 block w-full py-3 px-4 border rounded-md shadow-sm sm:text-lg border-gray-300 ${errors.referral ? 'border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500'}`}
            >
              <option value="">Select an option</option>
              <option value="Referral">Referral</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Search Engine">Search Engine</option>
              <option value="Social Media">Social Media</option>
              <option value="Other">Other</option>
            </select>
            {errors.referral && <p className="text-red-500 text-sm mt-1">{errors.referral}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Your Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
