/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from './../../Providers/Authprovider';
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";


const JobDetail = ({ job }) => {
    const { user } = useContext(AuthContext)
    const { _id, name, category_name, deadline, email, minimum_price, maximum_price, description } = job


    const handleBidJob = (event) => {
        event.preventDefault()
        const form = event.target
        const useremail = form.useremail.value
        const buyeremail = form.buyeremail.value
        const deadline = form.deadline.value
        const price = form.price.value
        const newBidJob = { useremail, buyeremail, deadline, price, name, status: 'pending' }
        console.log(name)
        console.log(newBidJob)

        fetch("https://job-recruiter-server-new.vercel.app/bid", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newBidJob),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("Your Bid job has been added to my bid form.");
            });




    }



    return (
        <div className="mt-10 container mx-auto">
            <Helmet><title>Job Recruiter | Job details</title></Helmet>
            <div className=" px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{deadline}</span>
                    {/* <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">Design</a> */}
                    <div className="badge badge-secondary">NEW</div>
                </div>

                <div className="mt-2">
                    <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" role="link">{name}</a>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <p className="text-blue-600 dark:text-blue-400 hover:underline font-medium" role="link">Price : {minimum_price}-{maximum_price}</p>

                    <div className="flex items-center">

                    </div>
                </div>
                <div>
                    <form onSubmit={handleBidJob} className="mt-10">
                        <div className="flex flex-col md:flex-row items-center gap-6 mb-6 px-1 ">
                            <div className="w-full md:w-1/2">
                                <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">User Email <span className="text-red-700">*</span></h2>
                                <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff]  border border-black text-base font-normal text-[#1B1A1A99] rounded" type="email" name="useremail" defaultValue={user?.email} readOnly placeholder="Enter Email Address Here" id="" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Buyer Email <span className="text-red-700">*</span></h2>
                                <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff] border border-black text-base font-normal text-[#1B1A1A99] rounded" type="email" name="buyeremail" defaultValue={email} readOnly placeholder="Enter Email Address Here" id="" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-6 mb-6gap-6 mb-6 px-1  ">
                            <div className="w-full md:w-1/2">
                                <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Deadline <span className="text-red-700">*</span></h2>
                                <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff] border border-black text-base font-normal text-[#1B1A1A99] rounded" type="date" name="deadline" value={deadline} placeholder="Deadline" id="" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Price <span className="text-red-700">*</span></h2>
                                <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff] border border-black text-base font-normal text-[#1B1A1A99] rounded" type="text" name="price" placeholder="Price" id="" />
                            </div>
                        </div>

                        <div className="px-24 pb-10">
                            <input type="submit" value="Bid on the project" disabled={user?.email === email} className="btn btn-block bg-[#196F3D] text-lg text-[#fff] hover:bg-[#154360] " />
                        </div>
                    </form>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default JobDetail;