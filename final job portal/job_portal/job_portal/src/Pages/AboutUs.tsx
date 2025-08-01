

import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-900 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-10">
        
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-300 text-lg">
            Empowering careers. Connecting talent with opportunity.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-bright-sun-600">Our Mission</h2>
          <p className="text-gray-300">
            Our mission is to bridge the gap between ambitious professionals and companies seeking top talent.
            We strive to create a platform where job seekers and recruiters connect seamlessly through a
            beautiful, fast, and effective experience.
          </p>
        </section>

       
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-bright-sun-600">Our Vision</h2>
          <p className="text-gray-300">
            We envision a future where every person has access to meaningful work and every company finds the
            right person at the right time — with zero friction.
          </p>
        </section>

       
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-bright-sun-600">Our Values</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Transparency</li>
            <li>Innovation</li>
            <li>User-first design</li>
            <li>Trust and inclusion</li>
            <li>Continuous growth</li>
          </ul>
        </section>

        
        <div className="text-center pt-8">
          <p className="text-gray-400 mb-4">Want to know more or collaborate with us?</p>
          <button className="px-6 py-3 bg-bright-sun-600 text-black font-semibold rounded hover:bg-bright-sun-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
