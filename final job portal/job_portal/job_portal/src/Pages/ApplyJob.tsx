import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useParams } from 'react-router-dom';

interface FormData {
  name: string;
  email: string;
  resume: string;
  coverLetter: string;
}

const ApplyJob: React.FC = () => {
  const { jobId } = useParams();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    resume: '',
    coverLetter: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(`Application for Job ID ${jobId}:`, formData);
    
  };

  return (
    <div className="min-h-screen bg-mine-shaft-900 text-white px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Apply for Job #{jobId}</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-mine-shaft-800 border border-mine-shaft-600 text-white placeholder-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-mine-shaft-800 border border-mine-shaft-600 text-white placeholder-gray-400"
          />

          <input
            type="url"
            name="resume"
            placeholder="Link to Resume (Google Drive, Dropbox, etc.)"
            value={formData.resume}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-mine-shaft-800 border border-mine-shaft-600 text-white placeholder-gray-400"
          />

          <textarea
            name="coverLetter"
            placeholder="Cover Letter (optional)"
            value={formData.coverLetter}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 rounded-lg bg-mine-shaft-800 border border-mine-shaft-600 text-white placeholder-gray-400"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-bright-sun-600 text-black font-semibold rounded hover:bg-bright-sun-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;
