/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";


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

        axios.patch(`http://localhost:5000/reqbid/bid/${_id}`, statusData)
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

        axios.patch(`http://localhost:5000/reqbid/bid/${_id}`, statusData)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }
    


    return (
        <tr>
            <th>1</th>
            <td>{name}</td>
            <td>{useremail}</td>
            <td>{deadline}</td>
            <td>{status}</td>
            <td className="flex items-center gap-3">
                <button onClick={() => handleAccept(_id)} className="btn btn-sm btn-accent">Accept</button>
                <button onClick={() => handleReject(_id)} className="btn btn-sm btn-accent">Reject</button>
            </td>
        </tr>
    );
};

export default BidRequestsForm;