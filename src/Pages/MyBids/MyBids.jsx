import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import BidDetails from "./BidDetails";
import { Helmet } from "react-helmet";


const MyBids = () => {
    const { user } = useContext(AuthContext)
    const [bids, setBids] = useState([])
    const email = user?.email;

    useEffect(() => {
        fetch(`https://job-recruiter-server-new.vercel.app/bid/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBids(data)
            })
    }, [email])
    return (
        <div className="mt-10 mb-10 min-h-screen">
            <Helmet><title>Job Recruiter | My Bid</title></Helmet>
            <div className="overflow-x-auto container mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-black text-xl font-bold">Job title</th>
                            <th className="text-black text-xl font-bold">Email</th>
                            <th className="text-black text-xl font-bold">Deadline</th>
                            <th className="text-black text-xl font-bold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bids.map(bid => <BidDetails key={bid._id} bid={bid} bids={bids} setBids={setBids}></BidDetails>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBids;