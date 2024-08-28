// src/components/Meta.js
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const HelmetData = ({ title }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="A description of the page content." />
        {/* Add other meta tags as needed */}
      </Helmet>
    </HelmetProvider>
  );
};

export default HelmetData;
