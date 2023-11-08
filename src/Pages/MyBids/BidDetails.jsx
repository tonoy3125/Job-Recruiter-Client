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
            <th>1</th>
            <td>{name}</td>
            <td>{useremail}</td>
            <td>{deadline}</td>
            {/* {
                status === 'progress' ? <td>progress</td> : 'pending' && status === 'complete' ? <td>Completed</td> : 'progress' && status === 'rejected' ? <td>Canceled</td> : ''
            } */}
            {
                status === 'progress' ? (<button onClick={() => handleComplete(_id)} className="btn btn-sm btn-accent">Complete</button>) : (status === 'completed' && 'Completed') || (status === 'rejected' && 'Canceled')
            }
        </tr>
    );
};

export default BidDetails;