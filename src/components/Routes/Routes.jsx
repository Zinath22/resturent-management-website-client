import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllFoodItem from "../Pages/AllFoodItem/AllFoodItem";
import FoodDetail from "../Pages/FoodDetail/FoodDetail";
import FoodPurchase from "../Pages/FoodPurchase/FoodPurchase";
import AddFood from "../Pages/AddFood/AddFood";
import PrivateRoute from "./PrivateRoute";
import MyAddedFoodItem from "../Pages/MyAddedFoodItem/MyAddedFoodItem";
import Update from "../Update/Update";
import Blog from "../Pages/Blog/Blog";
import MyOrderPage from "../Pages/MyOrderPage/MyOrderPage";
import TopDetails from "../Pages/Home/TopFood/TopDetails";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/allFood',
          element: <AllFoodItem></AllFoodItem>,
          loader: () => fetch('https://resturent-management-website-server.vercel.app/foodCount')
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/details/:id',
          element: <PrivateRoute><FoodDetail></FoodDetail></PrivateRoute>,
          loader: ({params}) => fetch(`https://resturent-management-website-server.vercel.app/allFood/${params.id}`)
        },
        {
          path: '/topDetails/:id',
          element: <PrivateRoute><TopDetails></TopDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://resturent-management-website-server.vercel.app/purchase/${params.id}`)
        },
        {
          path: '/purchase/:id',
          element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
          loader: ({params}) => fetch(`https://resturent-management-website-server.vercel.app/allFood/${params.id}`)
        },
        {
          path: '/addfood',
          element: <PrivateRoute><AddFood></AddFood></PrivateRoute>,
          // loader: ({params}) => fetch(`https://resturent-management-website-server.vercel.app/users/${params.id}`)
          
        },
        {
          path: '/myAddFoodItem',
          element: <PrivateRoute><MyAddedFoodItem></MyAddedFoodItem></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><Update></Update></PrivateRoute>,
          loader: ({params}) => fetch(`https://resturent-management-website-server.vercel.app/allFood/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path:"/myOrder",
          element: <PrivateRoute><MyOrderPage></MyOrderPage></PrivateRoute>
        },
        
      ]
    },
    
  ]);

export default Routes;