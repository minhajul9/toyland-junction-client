import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home/Home";
import ErrorPage from "../components/pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default router;