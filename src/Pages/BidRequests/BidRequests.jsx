import { useContext, useEffect, useState } from "react";
import { AuthContext } from './../../Providers/Authprovider';
import BidRequestsForm from "./BidRequestsForm";
import { Helmet } from "react-helmet";

const BidRequests = () => {
    const { user } = useContext(AuthContext)
    const [bidrequest, setBidrequest] = useState([])
    const email = user?.email;

    useEffect(() => {
        fetch(`https://job-recruiter-server-new.vercel.app/bidjob/bid/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBidrequest(data)
            })
    }, [email])


    return (
        <div className="min-h-screen">
            <Helmet><title>Job Recruiter | Bid Request</title></Helmet>
            <div className="overflow-x-auto container mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-black text-xl font-bold">Job title</th>
                            <th className="text-black text-xl font-bold">Email</th>
                            <th className="text-black text-xl font-bold">Deadline</th>
                            <th className="text-black text-xl font-bold">Status</th>
                            <th className="text-black text-xl font-bold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bidrequest.map(singlebid => <BidRequestsForm key={singlebid._id} singlebid={singlebid} bidrequest={bidrequest} setBidrequest={setBidrequest}></BidRequestsForm>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BidRequests;