

import { Avatar } from "@mantine/core";

const DreamJob = () => {
  return (
    <section className="w-full bg-mine-shaft-900 py-20">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 gap-10">

        
        <div className="flex flex-col lg:w-[45%] w-full space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-bright-sun-400 leading-tight">
            Find Your <span className="text-mine-shaft-200">Dream Job</span>
          </h1>
          <p className="text-lg text-mine-shaft-100">
            A good life begins with a great company. Explore thousands of jobs across industries, locations, and skill levels — all in one place.
          </p>
        </div>

        
        <div className="relative w-full lg:w-[55%] flex items-center justify-center">
          <img
            src="/servicehome.png"
            alt="Dream Job Illustration"
            className="w-full max-w-[30rem] object-contain"
          />

          
          <div className="absolute right-6 top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md bg-mine-shaft-800 shadow-lg">
            <div className="text-center mb-1 text-sm text-mine-shaft-100">15k+ people are placed</div>
            <Avatar.Group spacing="sm">
              <Avatar src="" radius="xl" />
              <Avatar src="" radius="xl" />
              <Avatar src="" radius="xl" />
              <Avatar radius="xl">+5k</Avatar>
            </Avatar.Group>
          </div>

          
          <div className="absolute top-4 left-4 space-y-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-lg w-44">
              <p className="text-bright-sun-400 font-semibold">Remote Jobs</p>
              <p className="text-xs text-white">Work from anywhere</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-lg w-44">
              <p className="text-bright-sun-400 font-semibold">Top Companies</p>
              <p className="text-xs text-white">Explore great employers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-lg w-44">
              <p className="text-bright-sun-400 font-semibold">Internships</p>
              <p className="text-xs text-white">Kickstart your career</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamJob;

