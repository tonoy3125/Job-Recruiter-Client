import Categories from "../Categories/Categories";
import WorkingProcess from "../WorkingProcess/WorkingProcess";
import Banner from "./Banner";
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Helmet><title>Job Recruiter | Home</title></Helmet>
            <Categories></Categories>
            <WorkingProcess></WorkingProcess>
        </div>
    );
};

export default Home;