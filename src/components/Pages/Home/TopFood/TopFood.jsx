// import { useEffect, useState } from "react";
// import TopFoodCard from "./TopFoodCard";
// import { Link } from "react-router-dom";

// const TopFood = () => {
//   const [foods, setFoods] = useState([]);

//   useEffect(() => {
//     fetch("https://resturent-management-website-server.vercel.app/purchase")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Original Data:", data);

//         // Step 1: Count the number of orders for each food item
//         const foodCount = {};
//         data.forEach((foodItem) => {
//           const { food_name, quantity } = foodItem;
//           if (foodCount[food_name]) {
//             foodCount[food_name] += parseInt(quantity);
//           } else {
//             foodCount[food_name] = parseInt(quantity);
//           }
//         });
//         console.log("Food Count:", foodCount);

//         // Step 2: Sort food items by order count to find top-selling items
//         const sortedFoods = Object.keys(foodCount)
//           .sort((a, b) => foodCount[b] - foodCount[a])
//           .slice(0, 6); // Get the top 6 items
//         console.log("Sorted Foods:", sortedFoods);

//         // Step 3: Set the top-selling food items in state
//         const topFoods = data.filter((foodItem) => sortedFoods.includes(foodItem.food_name));
//         console.log("Top Foods:", topFoods);

//         setFoods(topFoods);
//       });
//   }, []);

//   return (
//     <div className="mt-5 mx-10">
//       <div className="text-center">
//         <h2 className="text-3xl mb-4">Our Top Food</h2>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {foods.map((food) => (
//           <TopFoodCard key={food._id} food={food}></TopFoodCard>
//         ))}
//       </div>
//       <div className="text-center mt-7 mb-5">
//         <Link to={`/allFood`}>
//           <button className="btn bg-amber-400  text-center">See More</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default TopFood;
import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import { Link } from "react-router-dom";

const TopFood = () => {
  // State to store the top-selling foods
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("https://resturent-management-website-server.vercel.app/purchase")
      .then((res) => res.json())
      .then((data) => {
        console.log("Original Data:", data);

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
        console.log("Food Count:", foodCount);

        // Step 2: Filter food items based on quantity (e.g., only include items with quantity greater than 5)
        const minQuantity = 5;
        const filteredFoods = data.filter((foodItem) => foodCount[foodItem.food_name] > minQuantity);
        console.log("Filtered Foods:", filteredFoods);

        // Step 3: Sort food items by order count to find top-selling items
        const sortedFoods = Object.keys(foodCount)
          .sort((a, b) => foodCount[b] - foodCount[a])
          .slice(0, 6); // Get the top 6 items
        console.log("Sorted Foods:", sortedFoods);

        // Step 4: Set the top-selling food items in state
        const topFoods = filteredFoods.filter((foodItem) => sortedFoods.includes(foodItem.food_name));
        console.log("Top Foods:", topFoods);

        // Set the state with the top-selling foods
        setFoods(topFoods);
      });
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div className="mt-5 mx-10">
      <div className="text-center">
        <h2 className="text-3xl mb-4">Our Top Food</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {foods.map((food) => (
          <TopFoodCard key={food._id} food={food}></TopFoodCard>
        ))}
      </div>
      <div className="text-center mt-7 mb-5">
        <Link to={`/allFood`}>
          <button className="btn bg-amber-400  text-center">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default TopFood;
