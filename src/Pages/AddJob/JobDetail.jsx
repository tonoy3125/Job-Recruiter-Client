/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";


const JobDetail = ({ job }) => {
    const { _id, name, category_name, deadline, minimum_price, maximum_price, description } = job

    

    return (
        <div className="mt-10 container mx-auto">
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
                    <form className="mt-10">
                        <div className="flex flex-col md:flex-row items-center gap-6 mb-6 px-1 ">
                            <div className="w-full md:w-1/2">
                                <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">User Email <span className="text-red-700">*</span></h2>
                                <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff]  border border-black text-base font-normal text-[#1B1A1A99] rounded" type="email" name="email" placeholder="Enter Email Address Here" id="" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Buyer Email <span className="text-red-700">*</span></h2>
                                <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff] border border-black text-base font-normal text-[#1B1A1A99] rounded" type="email" name="email" placeholder="Enter Email Address Here" id="" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center gap-6 mb-6gap-6 mb-6 px-1  ">
                            <div className="w-full md:w-1/2">
                                <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Deadline <span className="text-red-700">*</span></h2>
                                <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff] border border-black text-base font-normal text-[#1B1A1A99] rounded" type="date" name="deadline" value={deadline}  placeholder="Deadline" id="" />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Price <span className="text-red-700">*</span></h2>
                                <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff] border border-black text-base font-normal text-[#1B1A1A99] rounded" type="text" name="maximum_price" placeholder="Maximum Price" id="" />
                            </div>
                        </div>

                        <div className="px-24 pb-10">
                            <input type="submit" value="Add Job" className="btn btn-block bg-[#196F3D] text-lg text-[#fff] hover:bg-[#154360] " />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobDetail;