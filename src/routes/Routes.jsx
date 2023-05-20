import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home/Home";
import ErrorPage from "../components/pages/ErrorPage";
import Login from "../components/pages/Login";
import SignUp from "../components/pages/SignUp";
import AllToys from "../components/pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../components/pages/ToyDetails/ToyDetails";

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
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default router;