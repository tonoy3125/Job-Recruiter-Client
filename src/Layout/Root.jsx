import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";


const Root = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === 'loading' ? <span className="loading loading-spinner loading-lg"></span> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;