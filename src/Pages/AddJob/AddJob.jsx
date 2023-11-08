import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from './../../Providers/Authprovider';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const AddJob = () => {
    const { user } = useContext(AuthContext)

    const navigate = useNavigate()
    // const [buttonDisabled, setButtonDisabled] = useState(false);



    const handleAddJob = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const category_name = form.category_name.value
        // const email = form.email.value
        const deadline = form.deadline.value
        const minimum_price = form.minimum_price.value
        const maximum_price = form.maximum_price.value
        const description = form.description.value
        const email = user?.email
        const newJob = { name, category_name, email, deadline, minimum_price, maximum_price, description }
        console.log(newJob)


        fetch('https://job-recruiter-server-new.vercel.app/job', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    navigate('/postedjobs')
                    toast.success('Product added succesfully')
                }
                form.reset()
            })
    }

    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center justify-evenly flex-shrink-0  mt-10">
                <Helmet><title>Job Recruiter | Add Job</title></Helmet>
                <div className="text-center lg:text-start pt-5 lg:pt-0">
                    <h2 className="text-xl text-[#FFFFFF] font-medium mb-5">EMPLOYERS</h2>
                    <h1 className="text-[#FFFFFF] text-4xl mb-5">Looking to post a job?</h1>
                    <p className="text-[#FFFFFF] text-xl mb-5">We have end-to-end solutions that can keep up <br /> with you and your standards.</p>
                    <button className="text-[#FFFFFF] btn btn-outline px-5">Post Your Job</button>
                </div>
                <div>
                    <img className="h-[400px]" src="https://i.ibb.co/S6JXmdD/addjobbanner-removebg-preview.png" alt="" />
                </div>
            </div>
            <div className="container mx-auto border-l-2 shadow-2xl shadow-[#95a5a6]] rounded-lg mt-10 pt-24">
                <h1 className="text-4xl text-center font-bold text-[#374151] mb-6 px-1 lg:px-24">Add A Job</h1>
                <p className="text-center text-base font-medium text-[#1B1A1AB3] px-1 lg:px-24 mb-14">Job Recruiter is a dynamic job marketplace dedicated to connecting talented professionals with exciting opportunities. We strive to make the job posting process seamless and effective for both employers and job seekers.</p>
                <form onSubmit={handleAddJob}>
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6 px-1 lg:px-24 ">
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Job title <span className="text-red-700">*</span></h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff]   text-base font-normal text-[#1B1A1A99] rounded" type="text" name="name" placeholder="Enter Job title Here" id="" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Category <span className="text-red-700">*</span></h2>
                            <select className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff] text-base font-normal text-[#1B1A1A99] rounded" name="category_name" id="category">
                                <option value="Web Development">Web Development</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Graphics Design">Graphics Design</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6 px-1 lg:px-24 ">
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Email <span className="text-red-700">*</span></h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff]  text-base font-normal text-[#1B1A1A99] rounded" type="email" defaultValue={user?.email} name="email" placeholder="Enter Email Address Here" id="" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Deadline <span className="text-red-700">*</span></h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff]  text-base font-normal text-[#1B1A1A99] rounded" type="date" name="deadline" placeholder="Deadline" id="" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6gap-6 mb-6 px-1 lg:px-24 ">
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Minimum price <span className="text-red-700">*</span></h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff]  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="minimum_price" placeholder="Minimum Price" id="" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Maximum price <span className="text-red-700">*</span></h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full bg-[#fff]  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="maximum_price" placeholder="Maximum Price" id="" />
                        </div>
                    </div>
                    <div className="w-full mb-6 px-1 lg:px-24">
                        <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Description <span className="text-red-700">*</span></h2>
                        <input className="pt-5 pb-48 pl-2 pr-2 md:pl-5   w-full bg-[#fff]  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="description" placeholder="Enter Job Description Here" id="" />
                    </div>
                    <div className="px-24 pb-24">
                        <input type="submit" value="Add Job" className="btn btn-block bg-[#196F3D] text-lg text-[#fff] hover:bg-[#154360] " />
                    </div>
                </form>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default AddJob;