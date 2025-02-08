import React from 'react'
import { useState } from 'react';
import { useParams,useLoaderData, Link,useNavigate } from 'react-router-dom';


const EditJobPage = ({ updateJobSubmit }) => {
    const job = useLoaderData();
    const [title, setTitle] = useState(job.title);
    const [type, setType] = useState(job.type);
    const [location, setLocation] = useState(job.location);
    const [description, setDescription] = useState(job.description);
    const [salary, setSalary] = useState(job.salary);
    const [companyName, setCompanyName] = useState(job.company.name);
    const [companyDescription, setCompanyDescription] = useState(job.company.description);
    const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
    const [contactPhone, setContactPhone] = useState(job.company.contactPhone);
    const [successMessage, setSuccessMessage] = useState(false); // ✅ State for success message
    const navigate = useNavigate();
    const { id } = useParams();
  
    const submitForm = (e) => {
      e.preventDefault();
  
      const updatedJob = {
        id,
        title,
        type,
        location,
        description,
        salary,
        company: {
          name: companyName,
          description: companyDescription,
          contactEmail,
          contactPhone,
        },
      };
  
      updateJobSubmit(updatedJob);
      console.log('Job Updated:', updatedJob);
  
      setSuccessMessage(true); // ✅ Show success message
      setTimeout(() => {
        setSuccessMessage(false); // Hide the message
        navigate(`/jobs/${id}`); // ✅ Redirect to the job page after 2 seconds
      }, 2000);
    };
  
    return (
      <section className="bg-indigo-50">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-center font-semibold mb-6">Edit Job</h2>
              
              {/* Show success message */}
              {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                  Job updated successfully!
                </div>
              )}
  
              {/* Job Type */}
              <div className="mb-4">
                <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
                  Job Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
  
              {/* Job Title */}
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                  Job Listing Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="e.g., Senior React Developer"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
  
              {/* Description */}
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Job responsibilities, qualifications, etc."
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
  
              {/* Salary */}
              <div className="mb-4">
                <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">
                  Salary
                </label>
                <select
                  id="salary"
                  name="salary"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                >
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - 60K">$50K - $60K</option>
                  <option value="$60K - 70K">$60K - $70K</option>
                  <option value="$70K - $80K">$70K - $80K</option>
                  <option value="$80K - $90K">$80K - $90K</option>
                  <option value="$90K - $100K">$90K - $100K</option>
                  <option value="$100K - $125K">$100K - $125K</option>
                  <option value="$125K - $150K">$125K - $150K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>
  
              {/* Location */}
              <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Company Location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
  
              {/* Company Info */}
              <h3 className="text-2xl mb-5">Company Info</h3>
  
              {/* Company Name */}
              <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700 font-bold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Company Name"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
  
              {/* Submit Button */}
              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full"
                  type="submit"
                >
                  Update Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default EditJobPage;