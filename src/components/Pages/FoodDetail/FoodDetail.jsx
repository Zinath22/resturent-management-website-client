import { Link, useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
// import FoodDetailsCard from "./FoodDetailsCard";


const FoodDetail = () => {

  const [ details, setDetails] = useState([])
 console.log(details);
 
    const food = useLoaderData();

    const {_id } = food
  console.log(food);

    // const { food_name, food_img, food_category, price } = food;
     useEffect(()=>{
      fetch('http://localhost:5000/allFood')
      .then(res => res.json())
      .then(data => setDetails(data))
     },[])
   
        


    return (
        <div className="px-10 mt-7 justify-center w-[700px]">
           {/* {
            details.map(detail => <FoodDetailsCard 
              key={detail._id}
              detail={detail}
            
            ></FoodDetailsCard>)
           } */}
         <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={food.food_img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{food.food_name}</h2>
    <h2 className="card-title">{food.food_category}</h2>
    <p>{food.price}</p>
    <p>{food.food_description}</p>
    <div className="card-actions justify-end">
   <Link to={`/purchase/${_id}`}>
   <button className="btn btn-primary">Order</button>
   </Link>
    </div>
  </div>
</div>
        </div>
</div>
       
    );
};

export default FoodDetail;