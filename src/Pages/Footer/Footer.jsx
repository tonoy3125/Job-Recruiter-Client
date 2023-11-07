/* eslint-disable react/no-unescaped-entities */
import logo from "../../assets/logo.png";
import { FaFacebookF } from 'react-icons/fa';
import { CiTwitter } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiLinkedin } from 'react-icons/fi';
const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-[#95a5a6] to-[#2980b9]'>
            <div className='mt-10 container mx-auto'>
                <div className='flex flex-col gap-5 lg:flex-row pt-10 '>
                    <div className='text-center md:text-left md:ml-14 lg:ml-0'>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-3 ">
                            <img className="w-10 h-10" src={logo} alt="" />
                            <h1 className=" text-center md:text-left text-base lg:text-2xl font-extrabold text-white">Job Recruiter</h1>
                        </div>
                        <p className='text-white text-sm lg:text-base font-medium mb-5'>Discover Your Next Chapter</p>
                        <p className='text-[#a3a3a6] text-sm font-medium mb-5 px-2 md:px-0'>Don't miss the Opportunity Knocks Job Market <br /> Showcase - your gateway to a fulfilling career!</p>
                        <p className="text-[#a3a3a6] text-sm font-medium mb-5 px-2 md:px-0">9/F, Motijheel Commercial Area, Dhaka-1000</p>
                        <div className="flex items-center justify-center md:justify-start text-white gap-5 mb-5  md:px-0">
                            <FaFacebookF className="text-xl"></FaFacebookF>
                            <CiTwitter className="text-xl"></CiTwitter>
                            <AiOutlineInstagram className="text-xl"></AiOutlineInstagram>
                            <FiLinkedin className="text-xl"></FiLinkedin>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-16 px-14 text-start">
                        <div>
                            <h1 className='text-white font-bold footer-title text-base mb-5'>USEFUL LINKS</h1>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer  mb-2'>About Us</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>FAQs Page</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Checkout</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Login</p>
                        </div>
                        <div>
                            <h1 className='text-white font-bold footer-title text-base mb-5'>DEVELOPERS</h1>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Booking</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Stays</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Adventures</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Author Detail</p>
                        </div>
                        <div>
                            <h1 className='text-white font-bold footer-title text-base mb-5'>Career Advice</h1>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Resume Tips</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Interview Strategies</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Networking Tips</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Career Development</p>
                        </div>
                        <div>
                            <h1 className='text-white font-bold footer-title text-base mb-5'>Job Listings</h1>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Browse Jobs</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Search Jobs</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Featured Jobs</p>
                            <p className='text-sm text-white font-medium hover:text-[#fcb41e] cursor-pointer mb-2'>Job Categories</p>
                        </div>
                    </div>
                    <form className="ml-14 lg:ml-0 mb-5">
                        <header className="footer-title text-white">Job Portal</header>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-white ">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="Enter Your Email Here" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-accent absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>


            </div>
            <hr className='pb-5' />
            <div className='text-center pb-5'>
                <small className='text-[#a3a3a6] text-base font-semibold '> Job Recruiter © 2023. All rights reserved.</small>
            </div>
        </div>
    );
};

export default Footer;