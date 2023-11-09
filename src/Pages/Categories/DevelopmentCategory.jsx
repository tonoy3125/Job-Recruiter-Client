/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const DevelopmentCategory = ({ develop }) => {
    const { _id, name, category_name, deadline, minimum_price, maximum_price, description } = develop
    return (
        <div className="mx-1 lg:mx-0">
            <div className="p-8 transition-colors duration-300 transform border shadow-2xl shadow-[#2980b9] cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#870058] dark:border-gray-700 dark:hover:border-transparent">
                <h1 className="mt-4 text-2xl font-semibold text-black capitalize dark:text-white group-hover:text-white">{name}</h1>
                <p className="mt-2 text-white capitalize dark:text-gray-300 group-hover:text-gray-300">{deadline}</p>
                <p className="mt-2 text-white capitalize dark:text-gray-300 group-hover:text-gray-300">Price: {minimum_price}-{maximum_price} TK</p>
                <p className="mt-2 text-white capitalize dark:text-gray-300 group-hover:text-gray-300">{description}</p>
                <Link to={`/jobs/${_id}`}><button className="text-white mt-2  btn btn-outline px-5">Bid Now</button></Link>
            </div>
        </div>
    );
};

export default DevelopmentCategory;