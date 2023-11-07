/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from './../../Providers/Authprovider';
import toast, { Toaster } from "react-hot-toast";
import { Player } from "@lottiefiles/react-lottie-player";
import { Helmet } from "react-helmet";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)

    const { createUser, logOut, handleUpdateProfile, setLoading } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password, photo)



        // Password Regex  

        if (!/^(?=.*[A-Z]).+$/
            .test(password)) {
            toast.error("Password must be One capital characters");
            return
        }
        if (!/^(?=.*[\W_]).+$/.test(password)) {
            toast.error("Password must be One special characters");
            return
        }
        if (!/^.{6,}$/.test(password)) {
            toast.error("Password must be at least 6 characters");
            return
        }


        // Create User 

        createUser(email, password)
            .then(result => {
                handleUpdateProfile(name, photo)
                    .then(() => {

                        logOut()

                        navigate("/login")
                    })
                toast.success('User Create Successfully')


            })
            .catch(error => {
                toast.error('Email Already In use try another one')
                setLoading(false)
            })
    }


    return (
        <div>
            <Helmet><title>Job Recruiter | Register</title></Helmet>
            <div className="container mx-auto flex flex-col gap-10 lg:gap-0 items-center lg:flex-row justify-evenly mb-32">
                <div className="md:w-[700px] mt-40 ">
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/932949b7-be0a-4424-81c1-deb1f9bfd7f7/TVfyxTvO6A.json"

                    >
                    </Player>
                </div>
                <div className="border md:w-[500px] lg:w-[600px] h-[880px] mt-16 pt-5 md:p-5 lg:p-[75px] shadow-lg rounded-lg ">
                    <h1 className="text-[40px] font-semibold text-black text-center  mb-12">Sign Up</h1>
                    <form onSubmit={handleRegister} className="px-1 md:px-0">
                        <div className="mb-7">
                            <h2 className="text-lg font-semibold text-black mb-5">Your Name</h2>
                            <input className="pt-4 pb-4 pl-6 w-[415px] md:w-[461px] border-[#E8E8E8] border-[1px] text-[#A2A2A2] rounded-lg" type="text" name="name" id="" placeholder="Enter your name" />
                        </div>
                        <div className="mb-7">
                            <h2 className="text-lg font-semibold text-black mb-5">Photo URL</h2>
                            <input className="pt-4 pb-4 pl-6 w-[415px] md:w-[461px] border-[#E8E8E8] border-[1px] text-[#A2A2A2] rounded-lg" type="text" name="photo" id="" placeholder="Enter your Photo URL" />
                        </div>
                        <div className="mb-7">
                            <h2 className="text-lg font-semibold text-black mb-5">Email address</h2>
                            <input className="pt-4 pb-4 pl-6 w-[415px] md:w-[461px] border-[#E8E8E8] border-[1px] text-[#A2A2A2] rounded-lg" type="email" name="email" id="" placeholder="Enter your email address" />
                        </div>
                        <div className="mb-7">
                            <h2 className="text-lg font-semibold text-black mb-5">Password</h2>
                            <div className="relative">
                                <input className="pt-4 pb-4 pl-6 w-[415px] md:w-[461px] border-[#E8E8E8] border-[1px] text-[#A2A2A2] rounded-lg" type={showPassword ? "text" : "password"} name="password" id="" placeholder="Enter your password" />
                                <span className="absolute right-4 md:right-1 top-5 rtl:left-0 rtl:right-auto " onClick={() => { setShowPassword(!showPassword) }} >
                                    {
                                        showPassword ? <AiOutlineEyeInvisible className='text-xl'></AiOutlineEyeInvisible> : <AiOutlineEye className='text-xl'></AiOutlineEye>
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="mb-7">
                            <input type="submit" className="py-4 bg-[#FF3811] text-white w-[415px] md:w-[461px] rounded-lg text-xl font-semibold" value="Sign Up" />
                        </div>
                    </form>

                    <h3 className="text-lg font-semibold text-black text-center">Already have an account?  <Link to='/login'><span className="text-[#FF3811]">Sign In</span></Link> </h3>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Register;