import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

// Corrected override with valid 'display' value
const override = {
  display: 'block', // Correct value for display
  margin: '100px auto',
};

const Spinners = ({ loading }) => {
  return (
    <ClipLoader 
      color="#4338ca" // Spinner color
      loading={loading} // Control the spinner visibility
      cssOverride={override} // Custom styles for the spinner
      size={150} // Size of the spinner
    />
  );
};

export default Spinners;
