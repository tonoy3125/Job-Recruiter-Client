import { AiOutlineYoutube } from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { Player } from '@lottiefiles/react-lottie-player';

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-[#95a5a6] to-[#2980b9] mb-10">
            <div className="flex items-center justify-center flex-col-reverse lg:flex-row text-center p-5">
                <div className=" w-full lg:w-1/2">
                    <h1 className="mb-5 text-6xl text-fuchsia-900 font-bold">Find Your Dream <br /> Job Here</h1>
                    <p className="mb-5 text-white">Navigate your career path with ease.Discover a world of career <br /> opportunities tailored just for you. Join us and take the next <br /> step towards a brighter future. Our platform connects you to a <br /> network of opportunities waiting to be explored.</p>
                    <div className="flex items-center gap-5 justify-center">
                        <button className="btn btn-success text-white transition duration-300 ease-in-out transform hover:scale-110">More Info</button>
                        <button className="btn btn-success text-white transition duration-300 ease-in-out transform hover:scale-110">Learn More</button>
                    </div>
                    <div className='flex items-center justify-center mt-4 gap-2'>
                        <AiOutlineYoutube className='text-2xl text-red-500'></AiOutlineYoutube>
                        <p className='font-medium text-white'>Live YouTube Video</p>
                    </div>
                    <div className='flex items-center justify-center mt-4 gap-2'>
                        <BiLogoFacebookCircle className='text-2xl text-blue-800'></BiLogoFacebookCircle>
                        <AiFillInstagram className='text-2xl text-orange-800'></AiFillInstagram>
                        <AiFillTwitterCircle className='text-2xl text-blue-800'></AiFillTwitterCircle>
                        <AiFillLinkedin className='text-2xl text-blue-800'></AiFillLinkedin>
                    </div>
                    <p className='text-sm font-medium mt-4 text-white'>www.Jobrecruiter.com</p>
                </div>
                <div className="text-center w-full lg:w-1/2">
                <Player
                        autoplay
                        loop
                        src="https://lottie.host/82556d56-69ab-4a8b-828e-b44ccfa909ef/pY59voezx7.json"

                    >
                    </Player>
                </div>
            </div>
            <hr className="w-[400px] mx-auto mt-20 border-2" />
        </div>
    );
};

export default Banner;