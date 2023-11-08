import Categories from "../Categories/Categories";
import NewsAndBlogs from "../NewAndBlog/NewsAndBlogs";
import Subscription from "../Subscription/Subscription";
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
            <NewsAndBlogs></NewsAndBlogs>
            <TopCompanies></TopCompanies>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;