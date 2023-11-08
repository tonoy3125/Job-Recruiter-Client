

const WorkingProcess = () => {
    return (
        <div className="mt-10 mb-10 container mx-auto">
            <h3 className="text-xl font-bold text-center text-[#1967d2] mb-3">Working Process</h3>
            <h1 className="text-4xl font-bold text-center mb-28">How It Works</h1>

            <div className="flex flex-col lg:flex-row gap-28 justify-center ml-20 md:ml-64 lg:ml-0">
                <div className="relative">
                    <div className=" border w-[300px] pt-3  h-[90px] rounded-lg bg-[#3898e2] mt-3">
                        <h1 className="text-2xl font-bold text-white text-start ml-24">Register <br /> Your Account</h1>
                    </div>
                    <div className="border w-20 h-20 rounded-lg bg-[#fff] pl-4 pt-[5px] absolute -left-5 top-6">
                        <img src="https://i.ibb.co/WDTR5Fd/icon1.png" alt="" />
                    </div>
                    <p className="text-5xl font-extrabold text-[#efefef] absolute -top-14 -left-14">01</p>
                </div>
                <div className="relative">
                    <div className=" border w-[300px] pt-3  h-[90px] rounded-lg bg-[#bc84ca] mt-3">
                        <h1 className="text-2xl font-bold text-white text-start ml-24">Apply <br />For Dream Job</h1>
                    </div>
                    <div className="border w-20 h-20 rounded-lg bg-[#fff] pl-4 pt-[5px] absolute -left-5 top-6">
                        <img src="https://i.ibb.co/94s1J7h/icon2.png" alt="" />
                    </div>
                    <p className="text-5xl font-extrabold text-[#efefef] absolute -top-14 -left-14">02</p>
                </div>
                <div className="relative">
                    <div className=" border w-[300px] pt-3  h-[90px] rounded-lg bg-[#56d8b1] mt-3 ">
                        <h1 className="text-2xl font-bold text-white text-start ml-24">Upload <br />Your Resume</h1>
                    </div>
                    <div className="border w-20 h-20 rounded-lg bg-[#fff] pl-4 pt-[5px] absolute -left-5 top-6">
                        <img src="https://i.ibb.co/xYbFM1X/icon3.png" alt="" />
                    </div>
                    <p className="text-5xl font-extrabold text-[#efefef] absolute -top-14 -left-14">03</p>
                </div>
            </div>
            <hr  className="w-[400px] mx-auto mt-20 border-2"/> 
        </div>
    );
};

export default WorkingProcess;