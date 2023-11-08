
const NewsAndBlogs = () => {
    return (
        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-4xl text-[#1967d2] font-bold">News and Blogs</h2>
                    <p className="font-serif text-sm dark:text-gray-400">Write and deliver news stories with the reader’s perspective in mind</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col dark:bg-gray-900 border ">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52  dark:bg-gray-500" src="https://i.ibb.co/R0Chwcp/rsz-candidates-waiting-job-interview.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h1 className="text-xl tracki uppercase hover:underline dark:text-violet-400 text-white">Tailor Your Resume and Cover Letter</h1>
                            <h3 className="flex-1 py-2 text-base text-white font-semibold leadi">Customize your resume and cover letter for each job application. Highlight relevant skills and experiences that align with the specific job description</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white dark:text-gray-400">
                                <span>June 1, 2023</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col dark:bg-gray-900 border">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co/fGcqvR6/rsz-friendly-partners-handshaking-group-meeting-thanking-successful-teamwork.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h1 className="text-xl tracki uppercase hover:underline dark:text-violet-400 text-white">Showcase Your Skills and Achievements</h1>
                            <h3 className="flex-1 py-2 text-base text-white font-semibold leadi">Highlight specific accomplishments and experiences that demonstrate your abilities and how you've made a positive impact in your previous roles.</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white dark:text-gray-400">
                                <span>June 1, 2023</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col dark:bg-gray-900 border">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co/XD5HkGK/happy-male-candidate-greeting-member-human-resource-team-job-interview-office-1.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h1 className="text-xl tracki uppercase hover:underline dark:text-violet-400 text-white">Demonstrate Your Passion and Enthusiasm</h1>
                            <h3 className="flex-1 py-2 text-base text-white font-semibold leadi">Express genuine interest in the company and the role during interviews. Be enthusiastic about the opportunity to work there.</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white dark:text-gray-400">
                                <span>June 1, 2023</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col dark:bg-gray-900 border">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://i.ibb.co/MkV8083/now-hiring-new-business-launch-plan-concept-1.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <h1 className="text-xl tracki uppercase hover:underline dark:text-violet-400 text-white">Follow Up After Interviews</h1>
                            <h3 className="flex-1 py-2 text-base text-white font-semibold leadi">Send a thank-you note or email expressing your gratitude for the interview and reiterate your interest in the position.</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-white dark:text-gray-400">
                                <span>June 1, 2023</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default NewsAndBlogs;