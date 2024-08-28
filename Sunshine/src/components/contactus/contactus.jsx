import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import HelmetData from '../helmet/helmet';

const ContactUs = () => {
  return (
    <>
    <HelmetData title={"SUNSHINE | CONTACTUS"}/>  
    <div className="max-w-4xl mx-auto px-4 py-8 font-subheading ">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">We'd love to hear from you! Please fill out the form below or use the contact details to reach us directly.</p>
          
          <div className="mb-4">
      <div className="flex items-center mb-2 text-orange-600 cursor-pointer">
        <FaMapMarkerAlt className="text-xl mr-2" />
        <span >Canberra, ACT</span>
      </div>
      <div className="flex items-center mb-2 text-orange-600">
        <a href="tel:0435595003" className="flex items-center text-orange-600 hover:underline">
          <FaPhone className="text-xl mr-2" />
          <span>0435 595 003</span>
        </a>
      </div>
      <div className="flex items-center mb-2">
        <a href="tel:0435595003" className="flex items-center text-orange-600 hover:underline">
          <FaPhone className="text-xl mr-2" />
          <span>0452 398 100</span>
        </a>
      </div>
      <div className="flex items-center">
        <a href="mailto:admin@sunshineblindscanberra.com" className="flex items-center text-orange-600 hover:underline">
          <FaEnvelope className="text-xl mr-2" />
          <span>admin@sunshineblindscanberra.com</span>
        </a>
      </div>
    </div>

          
          <iframe
            className="w-full h-64 border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.564156591069!2d-122.4194156846818!3d37.7749292797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b8f2fdcdb%3A0x580f8e62b51e4d6b!2sSunshine%20Curtains!5e0!3m2!1sen!2sus!4v1636582788595!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        
        <div>
      
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-medium mb-2">Subject</label>
              <input
                id="subject"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-light bg-orange-600 font-lg font-subheading text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
