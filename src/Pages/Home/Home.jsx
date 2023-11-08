import Categories from "../Categories/Categories";
import TopCompanies from "../TopCompanies/TopCompanies";
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
            <TopCompanies></TopCompanies>
        </div>
    );
};

export default Home;