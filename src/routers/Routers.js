import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home"
import Game from "../pages/games/Games"

const Router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "Game",
        Component: Game
    }
]);

export default Router