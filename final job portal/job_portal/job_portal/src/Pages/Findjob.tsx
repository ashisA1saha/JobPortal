

import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
}

const Findjob: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  useEffect(() => {
    const dummyJobs: Job[] = [
      {
        id: 1,
        title: 'Frontend Developer',
        company: 'Google',
        location: 'Bengaluru',
        type: 'Full-time',
        description: 'Work with React and TypeScript to build scalable UI components.',
      },
      {
        id: 2,
        title: 'Backend Developer',
        company: 'Microsoft',
        location: 'Delhi',
        type: 'Part-time',
        description: 'Develop REST APIs with Node.js and MongoDB.',
      },
      {
        id: 3,
        title: 'UI/UX Designer',
        company: 'Amazon',
        location: 'Noida',
        type: 'Contract',
        description: 'Design intuitive user experiences for web and mobile platforms.',
      },
    ];

    setJobs(dummyJobs);
    setFilteredJobs(dummyJobs);
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(term) ||
      job.company.toLowerCase().includes(term) ||
      job.location.toLowerCase().includes(term)
    );

    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen bg-mine-shaft-900 text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Find Your Next Job</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by title, company, or location"
          className="w-full p-3 mb-6 rounded-lg bg-mine-shaft-800 border border-mine-shaft-600 text-white placeholder-gray-400"
        />

        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-4 bg-mine-shaft-800 border border-mine-shaft-700 rounded-lg mb-4 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-white">{job.title}</h2>
              <p className="text-gray-300">{job.company} — {job.location}</p>
              <p className="text-sm text-gray-400">{job.type}</p>
              <p className="mt-2 text-gray-200">{job.description}</p>
              <Link to={`/apply/${job.id}`}>
                <button className="mt-3 px-4 py-2 bg-bright-sun-600 text-black font-medium rounded hover:bg-bright-sun-800 transition">
                  Apply Now
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default Findjob;