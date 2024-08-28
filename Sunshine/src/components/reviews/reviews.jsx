import React, { useEffect, useState } from 'react';
import { useGetreviewsQuery } from '../redux/api';
import LoadingPage from '../loading_page/loadingpage';

const ClientReviews = () => {
  const [clientReviews, setClientReviews] = useState([]);
  const { data, isLoading, error } = useGetreviewsQuery();

  useEffect(() => {
    if (data) {
      setClientReviews(data.data);
    }
  }, [data]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>Error Loading Data: {error.message}</div>;
  }

  if (clientReviews.length === 0) {
    return <div>No reviews available.</div>;
  }

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Here's What Our Clients Are Saying
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientReviews.map((review, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div
                  className="w-10 h-10 rounded-full bg-teal-500 flex justify-center items-center text-white font-bold mr-4"
                  aria-label={`Review by ${review.attributes.name}`}
                >
                  {review.attributes.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{review.attributes.name}</h3>
                  <p className="text-gray-500">{review.attributes.type}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(review.attributes.rating)
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-label={`${i + 1} star`}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-gray-500">
                  {review.attributes.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-gray-700">{review.attributes.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
