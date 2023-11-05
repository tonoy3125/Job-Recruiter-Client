import { useState } from "react";


const AddJob = () => {
    const [deadline, setDeadline] = useState('');
    // const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleDeadlineChange = (e) => {
        setDeadline(e.target.value);
        const deadlineDate = new Date(e.target.value);
        const currentDate = new Date();

        // if (currentDate > deadlineDate) {
        //     setButtonDisabled(true);
        // } else {
        //     setButtonDisabled(false);
        // }
    };
    return (
        <div>
            <div className="container mx-auto bg-[#F3F3F3] rounded-lg mt-10">
                <form>
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6 px-1 lg:px-24 pt-24">
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Job title</h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full shadow-md  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="name" placeholder="Enter Job title Here" id="" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Category</h2>
                            <select className="pt-5 pb-5 pl-2 md:p-5 w-full shadow-md text-base font-normal text-[#1B1A1A99] rounded" name="category_name" id="category">
                                <option value="Web Development">Web Development</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Graphics Design">Graphics Design</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6 px-1 lg:px-24 ">
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Email</h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full shadow-md  text-base font-normal text-[#1B1A1A99] rounded" type="email" name="email" placeholder="Enter Email Address Here" id="" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Deadline</h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full shadow-md  text-base font-normal text-[#1B1A1A99] rounded" type="datetime-local" name="deadline" value={deadline} onChange={handleDeadlineChange} placeholder="Deadline" id="" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6gap-6 mb-6 px-1 lg:px-24 ">
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Minimum price</h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full shadow-md  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="minimum_price" placeholder="Minimum Price" id="" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Maximum price</h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full shadow-md  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="maximum_price" placeholder="Maximum Price" id="" />
                        </div>
                    </div>
                    <div className="w-full mb-6 px-1 lg:px-24">
                        <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Description</h2>
                        <input className="pt-5 pb-48 pl-2 pr-2 md:pl-5   w-full shadow-md  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="description" placeholder="Enter Job Description Here" id="" />
                    </div>
                    <div className="px-24 pb-24">
                        <input type="submit" value="Add Job" className="btn btn-block bg-[#196F3D] text-lg text-[#fff] hover:bg-[#154360] " />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;