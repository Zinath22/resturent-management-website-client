import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import { Link } from "react-router-dom";


const TopFood = () => {

    const [foods, setFoods] = useState([]);

    useEffect( () => {
    fetch('http://localhost:5000/purchase')
    .then(res => res.json())
    .then(data => setFoods(data))
    },[])


    return (
        <div className="mt-5 mx-10">
          <div className="text-center ">
          <h2 className="text-3xl text-amber-500 mb-3">Our Top Food</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            foods.map(food => <TopFoodCard 
                key={food._id}
                food={food}
            ></TopFoodCard>)
          }
          </div>
          <div className="text-center mt-7 mb-5">
        <Link to={`/allFood`}>    
        <button className="btn text-black bg-amber-400 text-center">See More</button>
        </Link>
            </div>
        </div>
    );
};

export default TopFood;