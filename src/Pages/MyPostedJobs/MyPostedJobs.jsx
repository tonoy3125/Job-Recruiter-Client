import { useContext, useEffect, useState } from "react";
import { AuthContext } from './../../Providers/Authprovider';
import PostedJobCard from "./PostedJobCard";


const MyPostedJobs = () => {
    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState([])
    const email = user?.email;
    // console.log(email, user)

    useEffect(() => {
        fetch(`http://localhost:5000/postedjob/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setJobs(data)
            })
    }, [email])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 px-1 lg:px-0 container mx-auto gap-5">
                {
                    jobs?.map(job => <PostedJobCard key={job._id} job={job} jobs={jobs} setJobs={setJobs}></PostedJobCard>)
                }
            </div>
        </div>
    );
};

export default MyPostedJobs;