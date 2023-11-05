import { useLoaderData } from "react-router-dom";
import JobDetail from "./JobDetail";


const JobDetails = () => {

    const jobs = useLoaderData()
    console.log(jobs)

    return (
        <div>
            {
                jobs?.map(job => <JobDetail key={job._id} job={job}></JobDetail>)
            }
        </div>
    );
};

export default JobDetails;