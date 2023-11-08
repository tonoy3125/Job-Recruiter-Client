import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DevelopmentCategory from "./DevelopmentCategory";
import MarketingCategory from "./marketingCategory";
import GraphicsCategory from "./graphicsCategory";




const Categories = () => {
    // const [jobs, setJobs] = useState([]);

    const [development, setDevelopment] = useState([]);
    const [marketing, setMarketing] = useState([])
    const [graphics, setGraphics] = useState([]);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("https://job-recruiter-server-new.vercel.app/job/Graphics%20Design");
    //             const data = await response.json();
    //             console.log(data)
    //             setGraphics(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    useEffect(() => {
        fetch("https://job-recruiter-server-new.vercel.app/job/Web%20Development")
            .then(res => res.json())
            .then(data => setDevelopment(data))

        fetch("https://job-recruiter-server-new.vercel.app/job/Digital%20Marketing")
            .then(res => res.json())
            .then(data => setMarketing(data))

        fetch("https://job-recruiter-server-new.vercel.app/job/Graphics%20Design")
            .then(res => res.json())
            .then(data => setGraphics(data));
    }, [])


    return (
        <div className="mt-10 mb-10">
            <h1 className="text-2xl md:text-4xl font-bold text-[#653239] text-center mb-2">Popular Jobs Category</h1>
            <p className="text-sm md:text-base font-medium text-white text-center mb-10">Our Company focuses on providing support and services to individuals, families, and <br />  communities in need, often through nonprofit organizations.</p>
            <Tabs>
                <TabList className="text-center mb-5 text-black">
                    <Tab>Web Development</Tab>
                    <Tab>Digital Marketing</Tab>
                    <Tab>Graphics Design</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-3">
                        {
                            development.map(develop => <DevelopmentCategory key={develop._id} develop={develop}></DevelopmentCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-3">
                        {
                            marketing.map(market => <MarketingCategory key={market._id} market={market}></MarketingCategory>)
                        }
                    </div>
                </TabPanel>

                <TabPanel >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-3">
                        {
                            graphics.map(graphic => <GraphicsCategory key={graphic._id} graphic={graphic}></GraphicsCategory>)
                        }
                    </div>
                </TabPanel>

            </Tabs>
            <hr  className="w-[400px] mx-auto mt-20 border-2"/> 
        </div>
    );
};

export default Categories;