import Footer from "../Footer/Footer";
import Header from "../Header/header";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/DreamJob";
import JobCatagories from "../LandingPage/JobCatagories";

const HomePage =()=>{
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-[Source Code Pro]">
            
            <DreamJob/>
            <Companies/>
            <JobCatagories/>
            
        </div>
        
    )
}
export default HomePage;