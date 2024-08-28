import React, { useEffect, useState } from 'react';
import faqItems from './gaq_questions';
import { useGetfaqQuery } from '../redux/api';
import LoadingPage from '../loading_page/loadingpage';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faq, setFaq]= useState([]);

  const{data,isLoading,error}= useGetfaqQuery();

  useEffect(()=>{
    if(data){
      setFaq(data.data)
    }
  })

  if(isLoading){
    return <LoadingPage/>
  }

  if (error) {
    return <div>Error Loading Data: {error.message}</div>;
  }

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">FAQs 🙋‍♀️</h2>
      <p className="text-gray-600 mb-6 text-center">Frequently Asked Questions</p>
      <div className="space-y-4">
        {faq.map((item, index) => (
          <div key={index}>
            <button
              className={`flex justify-between items-center w-full text-left ${
                activeIndex === index
                  ? 'bg-gray-100 text-blue-600'
                  : 'text-gray-900 hover:bg-gray-100'
              } px-4 py-3 rounded-lg`}
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.attributes.question}</span>
              <svg
                className={`h-6 w-6 transition-transform ${
                  activeIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="bg-gray-100 p-4 rounded-b-lg">
                <p className="text-gray-700">{item.attributes.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;