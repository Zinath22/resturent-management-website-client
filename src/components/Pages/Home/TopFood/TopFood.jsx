import  { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import { Link } from "react-router-dom";

const TopFood = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/purchase")
      .then((res) => res.json())
      .then((data) => {
        // Step 1: Count the number of orders for each food item
        const foodCount = {};
        data.forEach((foodItem) => {
          const { food_name, quantity } = foodItem;
          if (foodCount[food_name]) {
            foodCount[food_name] += parseInt(quantity);
          } else {
            foodCount[food_name] = parseInt(quantity);
          }
        });

        // Step 1: Sort food items by order count to find top-selling items
        const sortedFoods = Object.keys(foodCount)
          .sort((a, b) => foodCount[b] - foodCount[a])
          .slice(0, 6) // Get the top 6 items

        // Step 2: Set the top-selling food items in state
        setFoods(data.filter((foodItem) => sortedFoods.includes(foodItem.food_name)));
      });
  }, []);

  return (
    <div className="mt-5 mx-10">
      <div className="text-center">
        <h2 className="text-3xl">Our Top Food</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {foods.map((food) => (
          <TopFoodCard key={food._id} food={food}></TopFoodCard>
        ))}
      </div>
      <div className="text-center mt-7 mb-5">
        <Link to={`/allFood`}>
          <button className="btn bg-lime-400 text-center">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default TopFood;
