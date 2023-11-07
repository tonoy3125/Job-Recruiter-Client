

const BidDetails = ({ bid }) => {
    const { useremail, deadline, price, name, status } = bid
    return (
        <tr>
            <th>1</th>
            <td>{name}</td>
            <td>{useremail}</td>
            <td>{deadline}</td>
            <td>{status}</td>
            <td><button className="btn btn-sm btn-accent">Complete</button></td>
        </tr>
    );
};

export default BidDetails;