import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorElement from "../Layout/ErrorElement";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import MyBids from "../Pages/MyBids/MyBids";
import BidRequests from "../Pages/BidRequests/BidRequests";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import JobDetails from './../Pages/AddJob/JobDetails';
import UpdatedJob from "../Pages/MyPostedJobs/UpdatedJob";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/addjob",
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
            },
            {
                path: "/updatejob/:id",
                element: <UpdatedJob></UpdatedJob>,
                loader: ({ params }) => fetch(`https://job-recruiter-server-new.vercel.app/jobupdate/${params.id}`)
            },
            {
                path: "/jobs/:id",
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-recruiter-server-new.vercel.app/jobs/${params.id}`)
            },
            {
                path: "/postedjobs",
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>,
            },
            {
                path: "/mybids",
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
            },
            {
                path: "/bidrequests",
                element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
]);

export default router