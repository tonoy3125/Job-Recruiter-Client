/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const DevelopmentCategory = ({ develop }) => {
    const { _id, name, category_name, deadline, minimum_price, maximum_price, description } = develop
    return (
        <div>
            <div className="p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{name}</h1>
                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{deadline}</p>
                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Price: {minimum_price}-{maximum_price} TK</p>
                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{description}</p>
                <button className="text-[#C14953] mt-2 btn btn-outline px-5">Bid Now</button>
            </div>
        </div>
    );
};

export default DevelopmentCategory;