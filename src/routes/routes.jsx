import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserPrivetRoutes from "../privetRoutes/userPrivetRoutes/UserPrivetRoutes";
import Public_Meals from "../pages/Public_Meals";
import Details from "../pages/Details";
import DashBoard from "../pages/DashBoard";
import MyMeals from "../components/Dashboard/MyMeals";
import FavouriteMeals from "../components/Dashboard/MyFavourite";

export const routes = createBrowserRouter([
    {
        path: '/',
        Component:Root,
        children: [
            {
                index:true,
                Component:Home
            },
            {
                index:"/",
                Component:Home
            },
            {
                path:'/meals',
                Component:Public_Meals
            },
            {
                path:'/details/:id',
                Component: Details
            },
            {
                path:'/dashboard',
                Component:DashBoard,
                children: [
                    // Dashboard nested routes can be added here
                    {
                        index:true,
                        element: <p>Hello</p>
                    },
                    {
                        path:'my-meals',
                        Component: MyMeals
                    },
                    {
                        path:'my-favourites',
                        Component:FavouriteMeals
                    }

                ]
            },
            {
                path:'/login',
                Component:Login
            },
            {
                path:'register',
                Component:Register
            }
        ]
    }
])