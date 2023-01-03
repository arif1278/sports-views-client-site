
import AddService from "../../pages/AddService/AddService";
import Blog from "../../pages/Blog/Blog";
import SingleDetails from "../../pages/Details/SingleDetails";
import EditReview from "../../pages/EditReview/EditReview";
import Login from "../../pages/Login/Login";
import MyReviews from "../../pages/MyReviews/MyReviews";
import Register from "../../pages/Register/Register";
import ServiceDetails from "../../pages/Services/ServiceDetails";
import PrivatRoute from "../PrivateRoute/PrivatRoute";


const { default: Main } = require("../../layer/Main");
const { default: Home } = require("../../pages/Home/Home");

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'service',
                element: <ServiceDetails></ServiceDetails>,
                loader: () => fetch('http://localhost:5000/serviceall')

            },
            {
                path: 'singlepage/:id',
                element: <SingleDetails></SingleDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/myreviews",
                element: (
                    <PrivatRoute>
                        <MyReviews></MyReviews>
                    </PrivatRoute>
                ),
            },
            {
                path: "/myreviews/edit/:id",
                element: (
                    <PrivatRoute>
                        <EditReview></EditReview>
                    </PrivatRoute>
                ),
                loader: async ({ params }) =>
                    fetch(
                        `http://localhost:5000/myreview/${params.id}`
                    ),
            },
            {
                path: "/services",
                element: (
                    <PrivatRoute>
                        <AddService></AddService>
                    </PrivatRoute>
                ),
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch('http://localhost:5000/questions'),
            }
        ]
    }

])

export default router;