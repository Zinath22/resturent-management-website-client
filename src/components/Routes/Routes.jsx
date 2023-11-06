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
          element: <PrivateRoute><FoodDetail></FoodDetail></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/allFood/${params.id}`)
        },
        {
          path: '/purchase/:id',
          element: <FoodPurchase></FoodPurchase>,
          loader: ({params}) => fetch(`http://localhost:5000/allFood/${params.id}`)
        },
        {
          path: '/addfood',
          element: <AddFood></AddFood>
        },
        {
          path: '/myAddFoodItem',
          element: <MyAddedFoodItem></MyAddedFoodItem>
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