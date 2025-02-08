import React, { useState, useEffect } from 'react';
import JobListing from './JobListing';
import Spinners from './Spinners';
const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]); // State to store the jobs
  const [loading, setLoading] = useState(true); // State to handle loading

  useEffect(() => {
    const fetchJobs = async () => {
      const apiurl = isHome ? '/api/jobs?_limit=3' :
      '/api/jobs';
      try {
        const res = await fetch(apiurl);
        const data = await res.json();
        setJobs(data); // Set jobs after fetching
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };
    
    fetchJobs(); // Invoke fetchJobs when the component mounts
  }, []); // Empty dependency array means it runs only on component mount

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while fetching
  }

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse All Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading? 
          (<Spinners loading={loading}/>

          ): (
            <>
            {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
            </>
          )}
          
        </div>
      </div>
    </section>
  );
};

export default JobListings;
