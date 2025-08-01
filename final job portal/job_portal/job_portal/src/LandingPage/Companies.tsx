
const Companies = () => {
  const companyLogos = [
    { name: "Google", src: "google.png" },
    { name: "Microsoft", src: "microsoft.webp" },
    { name: "Netflix", src: "netflix.png" },
    { name: "Amazon", src: "amazon2.png" },
    { name: "Adobe", src: "adobe.png" },
    { name: "Spotify", src: "spotify.png" },
    { name: "Dropbox", src: "Dropbox-Logo.png" },
    { name: "Slack", src: "Slack-logo.png" },
  ];

  return (
    <section className="w-full bg-mine-shaft-900 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-10">

        <div className="text-4xl md:text-5xl font-semibold text-mine-shaft-200">
          Trusted By <span className="text-bright-sun-400">1000+</span> Companies
        </div>

        <p className="text-mine-shaft-100 max-w-2xl mx-auto text-base md:text-lg">
          We partner with leading companies around the world to bring you access to the best opportunities in tech, design, marketing, and more.
        </p>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-center mt-10">
          {companyLogos.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,214,10,0.4)]"
            >
              <img
                src={company.src}
                alt={company.name}
                className="h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;

