

import React, { useState, useEffect, ChangeEvent } from 'react';

interface Talent {
  id: number;
  name: string;
  role: string;
  location: string;
  experience: string;
  bio: string;
}

const FindTalent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [talents, setTalents] = useState<Talent[]>([]);
  const [filteredTalents, setFilteredTalents] = useState<Talent[]>([]);

  useEffect(() => {
    const dummyTalents: Talent[] = [
      {
        id: 1,
        name: 'Abhishek Datta',
        role: 'Frontend Developer',
        location: 'Kolkata',
        experience: '3 years',
        bio: 'Experienced in React, TypeScript, and UI design.',
      },
      {
        id: 2,
        name: 'Asish Saha',
        role: 'Database Developer',
        location: 'Belgharia',
        experience: '5 years',
        bio: 'Specialist in MySQL and MongoDB.',
      },
      {
        id: 3,
        name: 'Ram Das',
        role: 'UI/UX Designer',
        location: 'Delhi',
        experience: '4 years',
        bio: 'Passionate about creating accessible and beautiful interfaces.',
      },
    ];

    setTalents(dummyTalents);
    setFilteredTalents(dummyTalents);
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = talents.filter((talent) =>
      talent.name.toLowerCase().includes(term) ||
      talent.role.toLowerCase().includes(term) ||
      talent.location.toLowerCase().includes(term)
    );

    setFilteredTalents(filtered);
  };

  return (
    <div className="min-h-screen bg-mine-shaft-900 text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Find Top Talent</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name, role, or location"
          className="w-full p-3 mb-6 rounded-lg bg-mine-shaft-800 border border-mine-shaft-600 text-white placeholder-gray-400"
        />

        {filteredTalents.length > 0 ? (
          filteredTalents.map((talent) => (
            <div
              key={talent.id}
              className="p-4 bg-mine-shaft-800 border border-mine-shaft-700 rounded-lg mb-4 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold">{talent.name}</h2>
              <p className="text-gray-300">{talent.role} — {talent.location}</p>
              <p className="text-sm text-gray-400">Experience: {talent.experience}</p>
              <p className="mt-2 text-gray-200">{talent.bio}</p>
              <button className="mt-3 px-4 py-2 bg-bright-sun-600 text-black font-medium rounded hover:bg-bright-sun-700 transition">
                Contact
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No matching talent found.</p>
        )}
      </div>
    </div>
  );
};

export default FindTalent;
