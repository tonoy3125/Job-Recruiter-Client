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
                element: <AddJob></AddJob>,
            },
            {
                path: "/updatejob/:id",
                element: <UpdatedJob></UpdatedJob>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobupdate/${params.id}`)
                // loader: () => fetch('http://localhost:5000/updatejob')
            },
            {
                path: "/jobs/:id",
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "/postedjobs",
                element: <MyPostedJobs></MyPostedJobs>,
            },
            {
                path: "/mybids",
                element: <MyBids></MyBids>,
            },
            {
                path: "/bidrequests",
                element: <BidRequests></BidRequests>,
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