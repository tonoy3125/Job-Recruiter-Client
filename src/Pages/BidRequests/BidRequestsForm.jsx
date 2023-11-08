/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import "react-step-progress-bar/styles.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";



const BidRequestsForm = ({ singlebid, bidrequest, setBidrequest }) => {
    const { _id, useremail, deadline, price, name, status } = singlebid

    // const newStatus = (/* your condition here */) ? 'inprogress' : 'complete';

    const handleAccept = (id) => {
        const statusData = { status: 'progress' }

        const updatedStatus = bidrequest.map((item) => {
            if (item._id === id) {
                return { ...item, status: 'progress' }
            }
            return item
        })
        setBidrequest(updatedStatus)

        axios.patch(`https://job-recruiter-server-new.vercel.app/reqbid/bid/${_id}`, statusData)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }
    const handleReject = (id) => {
        const statusData = { status: 'rejected' }

        const updatedStatus = bidrequest.map((item) => {
            if (item._id === id) {
                return { ...item, status: 'rejected' }
            }
            return item
        })
        setBidrequest(updatedStatus)

        axios.patch(`https://job-recruiter-server-new.vercel.app/reqbid/bid/${_id}`, statusData)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }



    return (
        <tr>
            <td className="text-white font-medium">{name}</td>
            <td className="text-white font-medium">{useremail}</td>
            <td className="text-white font-medium">{deadline}</td>
            <td className="text-white font-medium">{status}</td>
            <td className="flex items-center gap-3 text-white font-medium">
                {status === 'progress' || status === 'rejected' ? (
                    <ProgressBar
                        percent={status === 'progress' ? 50 : 100}
                        filledBackground={
                            status === 'progress' ? 'linear-gradient(to right, #fefb72, #f0bb31)' : 'linear-gradient(to right, #ff0000, #ff0000)'
                        }
                    />
                ) : status === 'completed' ? (
                    <ProgressBar
                        percent={100}
                        filledBackground="linear-gradient(to right, #00ff00, #00ff00)"
                    />
                ) :
                    (<div className=" flex flex-col gap-3">
                        <button onClick={() => handleAccept(_id)} className="btn btn-sm btn-accent">Accept</button>
                        <button onClick={() => handleReject(_id)} className="btn btn-sm btn-accent">Reject</button>
                    </div>)
                }
                {/* <button onClick={() => handleAccept(_id)} className="btn btn-sm btn-accent">Accept</button>
                <button onClick={() => handleReject(_id)} className="btn btn-sm btn-accent">Reject</button> */}



            </td>
        </tr>
    );
};

export default BidRequestsForm;