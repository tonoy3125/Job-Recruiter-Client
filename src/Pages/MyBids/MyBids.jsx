import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import BidDetails from "./BidDetails";
import { Helmet } from "react-helmet";


const MyBids = () => {
    const { user } = useContext(AuthContext)
    const [bids, setBids] = useState([])
    const email = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/bid/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBids(data)
            })
    }, [email])
    return (
        <div>
            <Helmet><title>Job Recruiter | My Bid</title></Helmet>
            <div className="overflow-x-auto container mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job title</th>
                            <th>Email</th>
                            <th>Deadline</th>
                            <th>Status</th>
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