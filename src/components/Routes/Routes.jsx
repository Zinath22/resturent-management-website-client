import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllFoodItem from "../Pages/AllFoodItem/AllFoodItem";
import FoodDetail from "../Pages/FoodDetail/FoodDetail";


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
          loader: () => fetch('http://localhost:5000/foodCount')
        },
        {
          path: '/details/:id',
          element: <FoodDetail></FoodDetail>,
          loader: ({params}) => fetch(`http://localhost:5000/allFood/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);

export default Routes;