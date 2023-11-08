import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";


const Root = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === 'loading' ? <div className="h-full flex-grow w-full flex justify-center items-center">
                    <span className="loading loading-dots loading-lg"></span>
                </div> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;