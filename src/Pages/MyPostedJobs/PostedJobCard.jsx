import Swal from "sweetalert2";
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';



const PostedJobCard = ({ job, jobs, setJobs }) => {
    const { _id, name, category_name, deadline, minimum_price, maximum_price, description } = job


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
                fetch(`http://localhost:5000/jobs/${_id}`, {
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


    // const handleUpdate = () => {

    // }


    return (
        <div className="min-h-screen">
            <div className="max-w-2xl px-8 py-4 border bg-[#F5F4F1] rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">{deadline}</span>
                    <div className="badge badge-secondary">NEW</div>
                </div>

                <div className='flex flex-col lg:flex-row items-center'>
                    <div className="mt-2">
                        <h1 className="text-xl lg:text-start text-center font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" role="link">{name}</h1>
                        <h2 className='lg:text-start text-center'>{category_name}</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-300 lg:w-1/2 lg:text-start text-center">{description}</p>
                        <div className=" mt-4 lg:text-start text-center mb-5 lg:mb-0">
                            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline " role="link">Price : {minimum_price}-{maximum_price} TK</a>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => document.getElementById('my_modal_4').showModal()} className='btn btn-outline bg-[#3C393B] text-white mb-3 mr-3 lg:mr-0'>
                            <BiEditAlt className='text-2xl'></BiEditAlt>
                        </button>
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl">

                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                </div>
                                <form>
                                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6 px-1 ">
                                        <div className="w-full md:w-1/2">
                                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Job title <span className="text-red-700">*</span></h2>
                                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff] border border-black  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="name" placeholder="Enter Job title Here" id="" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Category <span className="text-red-700">*</span></h2>
                                            <select className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff] border border-black text-base font-normal text-[#1B1A1A99] rounded" name="category_name" id="category">
                                                <option value="Web Development">Web Development</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="Graphics Design">Graphics Design</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6 px-1 ">
                                        <div className="w-full md:w-1/2">
                                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Email <span className="text-red-700">*</span></h2>
                                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff] border border-black text-base font-normal text-[#1B1A1A99] rounded" type="email"  name="email" placeholder="Enter Email Address Here" id="" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Deadline <span className="text-red-700">*</span></h2>
                                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff] border border-black text-base font-normal text-[#1B1A1A99] rounded" type="datetime-local" name="deadline" value={deadline} placeholder="Deadline" id="" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6gap-6 mb-6 px-1 ">
                                        <div className="w-full md:w-1/2">
                                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Minimum price <span className="text-red-700">*</span></h2>
                                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff] border border-black text-base font-normal text-[#1B1A1A99] rounded" type="text" name="minimum_price" placeholder="Minimum Price" id="" />
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Maximum price <span className="text-red-700">*</span></h2>
                                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff] border border-black text-base font-normal text-[#1B1A1A99] rounded" type="text" name="maximum_price" placeholder="Maximum Price" id="" />
                                        </div>
                                    </div>
                                    <div className="w-full mb-6 px-1">
                                        <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Description <span className="text-red-700">*</span></h2>
                                        <input className="pt-5 pb-48 pl-2 pr-2 md:pl-5   w-full bg-[#fff] border border-black text-base font-normal text-[#1B1A1A99] rounded" type="text" name="description" placeholder="Enter Job Description Here" id="" />
                                    </div>
                                    <div className="px-24 pb-24">
                                        <input type="submit" value="Update Job" className="btn btn-block bg-[#196F3D] text-lg text-[#fff] hover:bg-[#154360] " />
                                    </div>
                                </form>
                            </div>
                        </dialog>
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