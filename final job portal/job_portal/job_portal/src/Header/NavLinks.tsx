
import { Link, useLocation } from 'react-router-dom';
const NavLinks=()=>{
    const links= [
        {name:"Home Page",url:"home"},
        {name:"Find Jobs",url:"find-jobs"},
        {name:"Find Talents",url:"find-talents"},
        {name:"Post Jobs",url:"post-jobs"},
        {name:"About Us",url:"about"},
        
    ]
    const location =useLocation();
    return <div className="flex gap-5  text-mine-shaft-300 h-full items-center">
            {links.map((link, index) => {
        const isActive = location.pathname === `/${link.url}`;
        return (
          <div
            key={index}
            className={`h-full flex items-center border-t-2 transition-colors duration-200 ${
              isActive
                ? "border-bright-sun-500 text-bright-sun-500"
                : "border-transparent hover:border-bright-sun-300 hover:text-bright-sun-300"
            }`}
          >
            <Link to={`/${link.url}`} className="px-2 py-1">
              {link.name}
            </Link>
          </div>
        );
      })}
    </div>
};

export default NavLinks;