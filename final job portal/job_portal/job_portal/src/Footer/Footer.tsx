

const Footer = () => {
  return (
    <footer className="bg-mine-shaft-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        
        <div>
          <h2 className="text-2xl font-bold text-bright-sun-400">JobConnect</h2>
          <p className="text-mine-shaft-100 mt-4">
            Empowering careers, connecting talent to opportunity across the globe.
          </p>
        </div>

        
        <div>
          <h3 className="font-semibold mb-3 text-mine-shaft-200">Quick Links</h3>
          <ul className="space-y-2 text-sm text-mine-shaft-100">
            <li><a href="/find-jobs" className="hover:text-bright-sun-400 transition">Find Jobs</a></li>
            <li><a href="/find-talents" className="hover:text-bright-sun-400 transition">Find Talents</a></li>
            <li><a href="/post-jobs" className="hover:text-bright-sun-400 transition">Post Jobs</a></li>
            <li><a href="/about" className="hover:text-bright-sun-400 transition">About Us</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-3 text-mine-shaft-200">Job Categories</h3>
          <ul className="space-y-2 text-sm text-mine-shaft-100">
            <li>Software Development</li>
            <li>Design & UX</li>
            <li>Marketing</li>
            <li>Customer Support</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-3 text-mine-shaft-200">Get in Touch</h3>
          <p className="text-sm text-mine-shaft-100">Email: dattaabhishek8@gmail.com</p>
          <p className="text-sm text-mine-shaft-100 mt-1">Phone: +6294603300</p>
          <div className="flex gap-4 mt-4">
           
          </div>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
