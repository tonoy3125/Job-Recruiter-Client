/* eslint-disable react/no-unescaped-entities */
import { MdVerified } from 'react-icons/md';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const HappyCustomer = () => {

    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-4xl font-bold mb-10 mt-5 '>Our Happy Customer</h1>
            <Swiper

                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    // When window width is >= 640px
                    425: {
                        slidesPerView: 1,
                    },
                    // When window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                    // When window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                    },
                }}

            >
                {/* Slider 1 */}
                <SwiperSlide>
                    <div className=" cursor-pointer shadow-2xl  shadow-slate-300 border rounded-xl ">
                        <div className="flex items-center justify-center mt-10 mb-6">
                            <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/fp7LbDK/avatar1.jpg' alt="" />
                            {/* <h1 className=" text-xl font-semibold text-[#a3a3a6] capitalize mr-1 ">John Snow</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified> */}
                        </div>
                        <p className=" text-base text-white font-bold capitalize px-6 mb-6 text-center">"I can't thank this platform enough for helping me find my dream job! The interface is user-friendly, and the job listings were spot-on. Within two weeks, I had multiple interviews lined up. I'm now happily employed at a fantastic company. Highly recommended!" </p>
                        <div className="rating rating-sm flex justify-center mb-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="flex items-center justify-center mb-1">
                            <h1 className=" text-xl font-bold text-white capitalize mr-1 ">Sarah Smith</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified>
                        </div>
                        <p className='text-xl font-semibold text-white text-center mb-5'>Marketing Manager</p>
                    </div>
                </SwiperSlide>
                {/* Slider 2 */}
                <SwiperSlide>
                    <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                        <div className="flex items-center justify-center mt-10 mb-6">
                            <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/Fsqc3sc/avatar2.jpg' alt="" />
                            {/* <h1 className=" text-xl font-semibold text-[#a3a3a6] capitalize mr-1 ">John Snow</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified> */}
                        </div>
                        <p className=" text-base text-white font-bold capitalize px-6 mb-6 text-center">"This website truly understands the job market. The resources and tips provided were invaluable.I made through this platform were instrumental in securing my current role. I'm grateful for this platform and highly recommend it to anyone job hunting."</p>
                        <div className="rating rating-sm flex justify-center mb-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="flex items-center justify-center mb-1">
                            <h1 className=" text-xl font-bold text-white capitalize mr-1 ">Michael Johnson</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified>
                        </div>
                        <p className='text-xl font-semibold text-white text-center mb-5'>Graphic Designer</p>
                    </div>
                </SwiperSlide>
                {/* Slider 3 */}
                <SwiperSlide>
                    <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                        <div className="flex items-center justify-center mt-10 mb-6">
                            <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/GpXrBNF/avatar3.jpg' alt="" />
                            {/* <h1 className=" text-xl font-semibold text-[#a3a3a6] capitalize mr-1 ">John Snow</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified> */}
                        </div>
                        <p className=" text-base text-white font-bold capitalize px-6 mb-6 text-center">"I was struggling to find a job that matched my skills and interests. This website turned things around for me. The job alerts were on point, and the application process was seamless. I'm now enjoying a fulfilling career at a company I love. Thank you!" </p>
                        <div className="rating rating-sm flex justify-center mb-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="flex items-center justify-center mb-1">
                            <h1 className=" text-xl font-bold text-white capitalize mr-1 ">James Williams</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified>
                        </div>
                        <p className='text-xl font-semibold text-white text-center mb-5'>UX Designer</p>
                    </div>
                </SwiperSlide>
                {/* Slider 4 */}
                <SwiperSlide>
                    <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                        <div className="flex items-center justify-center mt-10 mb-6">
                            <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/sVY2kRH/portrait-beautiful-young-woman-standing-grey-wall.jpg' alt="" />
                            {/* <h1 className=" text-xl font-semibold text-[#a3a3a6] capitalize mr-1 ">John Snow</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified> */}
                        </div>
                        <p className=" text-base text-white font-bold capitalize px-6 mb-6 text-center">"I stumbled upon this platform while searching for job opportunities and it turned out to be a game-changer. The job recommendations were tailored to my skills. Within a month, I landed a fantastic position. Thank you for making my job search a breeze!" </p>
                        <div className="rating rating-sm flex justify-center mb-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="flex items-center justify-center mb-1">
                            <h1 className=" text-xl font-bold text-white capitalize mr-1 ">Emily Rodriguez</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified>
                        </div>
                        <p className='text-xl font-semibold text-white text-center mb-5'>Marketing Manager</p>
                    </div>
                </SwiperSlide>
                {/* slider 5 */}
                <SwiperSlide>
                    <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                        <div className="flex items-center justify-center mt-10 mb-6">
                            <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/m8qffzb/young-bearded-man-with-striped-shirt.jpg' alt="" />
                            {/* <h1 className=" text-xl font-semibold text-[#a3a3a6] capitalize mr-1 ">John Snow</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified> */}
                        </div>
                        <p className=" text-base text-white font-bold capitalize px-6 mb-6 text-center">"I can't say enough good things about this platform. The job listings were curated to match my preferences, saving me time and frustration. The resources helpful, and I'm now thriving in my new role. I wholeheartedly recommend this website to job seekers!" </p>
                        <div className="rating rating-sm flex justify-center mb-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="flex items-center justify-center mb-1">
                            <h1 className=" text-xl font-bold text-white capitalize mr-1 ">Brian Johnson</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified>
                        </div>
                        <p className='text-xl font-semibold text-white text-center mb-5'>Content Marketer</p>
                    </div>
                </SwiperSlide>
                {/* Slider 5 */}
                <SwiperSlide>
                    <div className=" cursor-pointer shadow-2xl shadow-slate-300 border rounded-xl  ">
                        <div className="flex items-center justify-center mt-10 mb-6">
                            <img className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 mr-5" src='https://i.ibb.co/PhjBQvz/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased.jpg' alt="" />
                            {/* <h1 className=" text-xl font-semibold text-[#a3a3a6] capitalize mr-1 ">John Snow</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified> */}
                        </div>
                        <p className=" text-base text-white font-bold capitalize px-6 mb-6 text-center">"I can't thank this website enough for helping me kickstart my career. The job alerts were tailored to my field, and the application process was seamless. The interview tips and career advice were a bonus. I'm now working at a dynamic company, and happier!" </p>
                        <div className="rating rating-sm flex justify-center mb-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="flex items-center justify-center mb-1">
                            <h1 className=" text-xl font-bold text-white capitalize mr-1 ">Samantha Adams</h1>
                            <MdVerified className="text-xl text-blue-700"></MdVerified>
                        </div>
                        <p className='text-xl font-semibold text-white text-center mb-5'>Software Developer</p>
                    </div>
                </SwiperSlide>

            </Swiper>
            <hr className="w-[400px] mx-auto mt-20 border-2" />
        </div>
    );
};

export default HappyCustomer;