import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home/Home";
import ErrorPage from "../components/pages/ErrorPage";
import Login from "../components/pages/Login";
import SignUp from "../components/pages/SignUp";
import AllToys from "../components/pages/AllToys/AllToys";

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
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default router;