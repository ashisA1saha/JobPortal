

const JobCategories = () => {
  const categories = [
    { title: "Software Development", jobs: 1200 },
    { title: "Design & UX", jobs: 780 },
    { title: "Marketing", jobs: 960 },
    { title: "Customer Support", jobs: 540 },
    { title: "Product Management", jobs: 430 },
    { title: "Sales", jobs: 890 },
    { title: "Human Resources", jobs: 300 },
    { title: "Finance", jobs: 260 },
  ];

  return (
    <section className="w-full bg-mine-shaft-900 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-mine-shaft-200">
          Explore <span className="text-bright-sun-400">Job Categories</span>
        </h2>

        <p className="text-mine-shaft-100 max-w-2xl mx-auto text-base md:text-lg">
          Whether youre looking for a career in design, development, or data—theres a category waiting for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition duration-300 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-bright-sun-400 mb-2">{cat.title}</h3>
              <p className="text-sm text-mine-shaft-100">{cat.jobs}+ Jobs Available</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
