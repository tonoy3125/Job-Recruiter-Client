import { AiFillCheckCircle } from 'react-icons/ai';

const Subscription = () => {
    return (
        <div>
            <div className=" dark:bg-gray-900">
                <div className="container px-6 py-8 mx-auto">
                    <div className="xl:items-center xl:-mx-8 xl:flex">
                        <div className="flex flex-col items-center xl:items-start xl:mx-8">
                            <h1 className="text-4xl font-extrabold text-black capitalize lg:text-3xl ">Our Pricing Plan</h1>

                            <div className="mt-4">
                                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                            </div>

                            <p className="mt-4 font-medium text-black dark:text-gray-300">
                                You can get All Access by selecting your plan!
                            </p>

                            <a href="#" className="flex items-center mt-4 -mx-1 text-sm text-gray-700 capitalize dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                <span className="mx-1">read more</span>
                                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                        </div>

                        <div className="flex-1 xl:mx-8">
                            <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                                <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                                    <div className="p-6">
                                        <h1 className="text-xl font-bold text-black capitalize lg:text-2xl dark:text-white">Essential</h1>

                                        <p className="mt-4 text-white">
                                            For organising every corner of your life
                                        </p>

                                        <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl ">$3.00 <span className="text-base font-medium">/Month</span></h2>

                                        <p className="mt-1 text-white dark:text-gray-300">
                                            Yearly payment
                                        </p>

                                        <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                            Start Now
                                        </button>
                                    </div>

                                    <hr className="border-gray-200 dark:border-gray-700" />

                                    <div className="p-6">
                                        <h1 className="text-lg font-bold text-black capitalize lg:text-xl dark:text-white">What’s included:</h1>

                                        <div className="mt-8 space-y-4">
                                            <div className="flex items-center">
                                                <AiFillCheckCircle className='text-xl text-blue-700'></AiFillCheckCircle>

                                                <span className="mx-4 text-white">All limited links</span>
                                            </div>

                                            <div className="flex items-center">
                                                <AiFillCheckCircle className='text-xl text-blue-700'></AiFillCheckCircle>

                                                <span className="mx-4 text-white">Own analytics platform</span>
                                            </div>

                                            <div className="flex items-center">
                                                <AiFillCheckCircle className='text-xl text-blue-700'></AiFillCheckCircle>

                                                <span className="mx-4 text-white">Chat support</span>
                                            </div>

                                            <div className="flex items-center">
                                                <AiFillCheckCircle className='text-xl text-blue-700'></AiFillCheckCircle>

                                                <span className="mx-4 text-white">Optimize hashtags</span>
                                            </div>

                                            <div className="flex items-center">
                                                <AiFillCheckCircle className='text-xl text-blue-700'></AiFillCheckCircle>

                                                <span className="mx-4 text-white">24x7 Email Support</span>
                                            </div>

                                            <div className="flex items-center">
                                                <AiFillCheckCircle className='text-xl text-blue-700'></AiFillCheckCircle>

                                                <span className="mx-4 text-white">Sync across device</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                                    <div className="p-6">
                                        <h1 className="text-xl font-extrabold text-black capitalize lg:text-2xl dark:text-white">Premium</h1>

                                        <p className="mt-4 text-white">
                                            For organising every corner of your life
                                        </p>

                                        <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl dark:text-gray-300">$50.00 <span className="text-base font-medium">/life time</span></h2>

                                        <p className="mt-1 text-white">
                                            One time payment
                                        </p>

                                        <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                            Start Now
                                        </button>
                                    </div>

                                    <hr className="border-gray-200 dark:border-gray-700" />

                                    <div className="p-6">
                                        <h1 className="text-lg font-bold text-black capitalize lg:text-xl dark:text-white">What’s included:</h1>

                                        <div className="mt-8 space-y-4">
                                            <div className="flex items-center">
                                                <AiFillCheckCircle className='text-xl text-blue-700'></AiFillCheckCircle>

                                                <span className="mx-4 text-white">All limited links</span>
                                            </div>

                                            <div className="flex items-center">
                                                <AiFillCheckCircle className='text-xl text-blue-700'></AiFillCheckCircle>

                                                <span className="mx-4 text-white">Own analytics platform</span>
                                            </div>

                                            <div className="flex items-center">
                                                <AiFillCheckCircle className='text-xl text-blue-700'></AiFillCheckCircle>

                                                <span className="mx-4 text-white">Chat support</span>
                                            </div>

                                            <div className="flex items-center">
                                                <AiFillCheckCircle className='text-xl text-blue-700'></AiFillCheckCircle>

                                                <span className="mx-4 text-white">Optimize hashtags</span>
                                            </div>

                                            <div className="flex items-center">
                                                <AiFillCheckCircle className='text-xl text-blue-700'></AiFillCheckCircle>

                                                <span className="mx-4 text-white">24x7 Email Support</span>
                                            </div>

                                            <div className="flex items-center">
                                                <AiFillCheckCircle className='text-xl text-blue-700'></AiFillCheckCircle>

                                                <span className="mx-4 text-white">Sync across device</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-[400px] mx-auto mt-20 border-2" />
        </div>
    );
};

export default Subscription;