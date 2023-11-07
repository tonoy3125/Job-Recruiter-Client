

const BidRequestsForm = ({ singlebid }) => {
    const { useremail, deadline, price, name, status } = singlebid
    
    return (
        <tr>
            <th>1</th>
            <td>{name}</td>
            <td>{useremail}</td>
            <td>{deadline}</td>
            <td>{status}</td>
            <td className="flex items-center gap-3">
                <button className="btn btn-sm btn-accent">Accept</button>
                <button className="btn btn-sm btn-accent">Reject</button>
            </td>
        </tr>
    );
};

export default BidRequestsForm;