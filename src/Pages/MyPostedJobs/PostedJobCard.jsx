/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';


const PostedJobCard = ({ job }) => {
    const { _id, name, category_name, deadline, minimum_price, maximum_price, description } = job
    return (
        <div>
            <div className="max-w-2xl px-8 py-4 border bg-[#F5F4F1] rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">{deadline}</span>
                    <div className="badge badge-secondary">NEW</div>
                </div>

                <div className='flex flex-col lg:flex-row items-center'>
                    <div className="mt-2">
                        <h1 className="text-xl lg:text-start text-center font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"  role="link">{name}</h1>
                        <h2 className='lg:text-start text-center'>{category_name}</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-300 lg:w-1/2 lg:text-start text-center">{description}</p>
                        <div className=" mt-4 lg:text-start text-center mb-5 lg:mb-0">
                            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline " role="link">Price : {minimum_price}-{maximum_price} TK</a>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-outline bg-[#3C393B] text-white mb-3 mr-3 lg:mr-0'>
                            <BiEditAlt className='text-2xl'></BiEditAlt>
                        </button>
                        <button className='btn btn-outline hover:bg-[#E71D36] bg-[#EA4744] text-white'>
                            <AiOutlineDelete className='text-2xl'></AiOutlineDelete>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostedJobCard;