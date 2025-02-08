import React, { useState } from "react";
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Accept `job` as a prop
const JobListing = ({ job }) => { 
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Use 'job' instead of 'jobs'
  let description = job.description;
  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative p-4">
      {/* Job title */}
      <h3 className="text-xl font-bold">{job.title}</h3>
      
      {/* Job type and location */}
      <p className="text-gray-600">{job.type} - {job.location}</p>
      
      {/* Job description */}
      <p className="mt-2 mb-4 text-gray-700">
        {description} {/* Show job description */}
      </p>

      {/* Button to toggle full description */}
      <button onClick={() => setShowFullDescription(prevState => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">
        {showFullDescription ? 'Less' : 'More'}
      </button>

      {/* Job salary */}
      <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>
      <div className="border border-gray-100 mb-5"></div>

      {/* Location */}
      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="text-orange-700 mb-3">
          <FaMapMarker className="inline text-lg mb-1 mr-1" />
          {job.location}
        </div>

        {/* Read More link */}
        <Link
          to={`/jobs/${job.id}`} // Correct link using job.id
          className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default JobListing;
