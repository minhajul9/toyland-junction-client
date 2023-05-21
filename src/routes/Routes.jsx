import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home/Home";
import ErrorPage from "../components/pages/ErrorPage";
import Login from "../components/pages/Login";
import SignUp from "../components/pages/SignUp";
import AllToys from "../components/pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../components/pages/ToyDetails/ToyDetails";
import MyToys from "../components/pages/MyToys/MyToys";
import AddAToy from "../components/pages/AddAToy/AddAToy";
import EditToys from "../components/pages/EditToys/EditToys";
import Blogs from "../components/pages/Blogs";

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
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>
            },
            {
                path: 'toy/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path: 'myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            
            {
                path: 'editToys/:id',
                element: <PrivateRoute><EditToys></EditToys></PrivateRoute>, 
                loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path: 'addAToy',
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default router;