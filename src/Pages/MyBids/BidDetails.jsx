/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";


const BidDetails = ({ bid, bids, setBids }) => {
    const { _id, useremail, deadline, price, name, status } = bid


    const handleComplete = (id) => {
        const statusData = { status: 'completed' }

        const updatedStatus = bids.map((item) => {
            if (item._id === id) {
                return { ...item, status: 'completed' }
            }
            return item
        })
        setBids(updatedStatus)

        axios.patch(`https://job-recruiter-server-new.vercel.app/reqbid/bid/${_id}`, statusData)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    return (
        <tr>
            <td className="text-white font-medium">{name}</td>
            <td className="text-white font-medium">{useremail}</td>
            <td className="text-white font-medium">{deadline}</td>
            <td className="mt-2 text-white font-medium">
                {
                    status === 'completed' ? (<ProgressBar
                        percent={100}
                        filledBackground="linear-gradient(to right, #00ff00, #00ff00)"
                    />)
                        :
                        status === 'pending' ? (
                            <button disabled className="btn btn-sm btn-accent">Complete</button>
                        )
                            : status === 'rejected' ? (
                                <ProgressBar
                                    percent={100}
                                    filledBackground="linear-gradient(to right, #ff0000, #ff0000)"
                                />
                            )
                                :
                                (<button onClick={() => handleComplete(_id)} className="btn btn-sm btn-accent">Complete</button>)
                }
            </td>
        </tr>
    );
};

export default BidDetails;