import { useContext, useEffect, useState } from "react";
import { AuthContext } from './../../Providers/Authprovider';
import BidRequestsForm from "./BidRequestsForm";

const BidRequests = () => {
    const { user } = useContext(AuthContext)
    const [bidrequest, setBidrequest] = useState([])
    const email = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/bidjob/bid/${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBidrequest(data)
            })
    }, [email])


    return (
        <div>
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
                            bidrequest.map(singlebid => <BidRequestsForm key={singlebid._id} singlebid={singlebid} bidrequest={bidrequest} setBidrequest={setBidrequest}></BidRequestsForm>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BidRequests;