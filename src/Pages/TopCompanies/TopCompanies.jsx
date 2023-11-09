import Marquee from "react-fast-marquee";


const TopCompanies = () => {
    return (
        <div className="pb-5 mt-10">
            <div className=" gap-3 mb-3 mt-5 px-1 lg:px-0 text-center">
                <h1 className="text-xl font-bold mb-5 text-black ">Top Companies</h1>
                <h1 className="text-4xl font-bold text-white">Get hired in top companies</h1>
            </div>
            <Marquee className="pt-5 pb-5" pauseOnHover={true} speed={50}>
                <img className="mr-12" src="https://i.ibb.co/p2SGyvQ/pic1-removebg-preview.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/BL9htDh/pic2-removebg-preview.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/Ltb3wsV/pic4-removebg-preview.png" alt="" />
                <img className="mr-12 w-44" src="https://i.ibb.co/27RphgF/2127-removebg-preview.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/RCHF8Rd/pic3-removebg-preview.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/BgGwxsH/pic5-removebg-preview.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/p2SGyvQ/pic1-removebg-preview.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/BL9htDh/pic2-removebg-preview.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/Ltb3wsV/pic4-removebg-preview.png" alt="" />
                <img className="mr-12 w-44" src="https://i.ibb.co/27RphgF/2127-removebg-preview.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/RCHF8Rd/pic3-removebg-preview.png" alt="" />
                <img className="mr-12" src="https://i.ibb.co/BgGwxsH/pic5-removebg-preview.png" alt="" />
            </Marquee>
            <hr className="w-[400px] mx-auto mt-20 border-2" />
        </div>

    );
};

export default TopCompanies;