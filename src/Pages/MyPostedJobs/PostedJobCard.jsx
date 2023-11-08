/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

import { Link } from "react-router-dom";




const PostedJobCard = ({ job, jobs, setJobs }) => {
    const { _id, name, category_name, deadline, minimum_price, maximum_price, description } = job
    console.log(_id)
    // const date = parseInt(deadline)
    // console.log(typeof date)





    // Handle Delete function
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://job-recruiter-server-new.vercel.app/jobs/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = jobs.filter(cot => cot._id !== _id)
                            setJobs(remaining)
                        }
                    })
            }
        })
    }






    return (
        <div>
            <div className="max-w-2xl px-8 py-4 border  rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-white dark:text-gray-400">{deadline}</span>
                    <div className="badge badge-secondary">NEW</div>
                </div>

                <div className='flex flex-col lg:flex-row items-center'>
                    <div className="mt-2">
                        <h1 className="text-xl lg:text-start text-center font-bold text-white dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" role="link">{name}</h1>
                        <h2 className='lg:text-start text-white text-center'>{category_name}</h2>
                        <p className="mt-2 text-white dark:text-gray-300 lg:w-1/2 lg:text-start text-center">{description}</p>
                        <div className=" mt-4 lg:text-start text-center mb-5 lg:mb-0">
                            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline " role="link">Price : {minimum_price}-{maximum_price} TK</a>
                        </div>
                    </div>
                    <div>
                        <Link to={`/updatejob/${_id}`}>
                            <button className='btn btn-outline bg-[#3C393B] text-white mb-3 mr-3 lg:mr-0'>
                                <BiEditAlt className='text-2xl'></BiEditAlt>
                            </button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className='btn btn-outline hover:bg-[#E71D36] bg-[#EA4744] text-white'>
                            <AiOutlineDelete className='text-2xl'></AiOutlineDelete>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PostedJobCard;