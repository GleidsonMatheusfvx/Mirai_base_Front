import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home"

const Router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
    }
]);

export default Router