

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface JobForm {
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
}

const PostJob: React.FC = () => {
  const [formData, setFormData] = useState<JobForm>({
    title: '',
    company: '',
    location: '',
    type: '',
    description: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Job Posted:', formData);
    
  };

  return (
    <div className="min-h-screen bg-mine-shaft-900 text-white px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Post a Job</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-mine-shaft-800 border border-mine-shaft-600 text-white placeholder-gray-400"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-mine-shaft-800 border border-mine-shaft-600 text-white placeholder-gray-400"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-mine-shaft-800 border border-mine-shaft-600 text-white placeholder-gray-400"
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-mine-shaft-800 border border-mine-shaft-600 text-white"
          >
            <option value="">Select Job Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>

          <textarea
            name="description"
            placeholder="Job Description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={6}
            className="w-full p-3 rounded-lg bg-mine-shaft-800 border border-mine-shaft-600 text-white placeholder-gray-400"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-bright-sun-600 text-black font-semibold rounded hover:bg-bright-sun-700 transition"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
