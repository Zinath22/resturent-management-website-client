import { Link, useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// import FoodDetailsCard from "./FoodDetailsCard";


const FoodDetail = () => {

  const [ details, setDetails] = useState([])
 console.log(details);
 
    const food = useLoaderData();

    const {_id } = food
  console.log(food);

    // const { food_name, food_img, food_category, price } = food;
     useEffect(()=>{
      fetch('https://resturent-management-website-server.vercel.app/allFood')
      .then(res => res.json())
      .then(data => setDetails(data))
     },[])
   
        


    return (
        <div className="px-10 mt-7  w-1/2 mx-auto">
           {/* {
            details.map(detail => <FoodDetailsCard 
              key={detail._id}
              detail={detail}
            
            ></FoodDetailsCard>)
           } */}
         <div>
            <div className="card card-side bg-base-100 shadow-xl">
            <Helmet>
                <title>FoodLove | Details</title>
            </Helmet>
  <figure><img className="h-[full] " src={food.food_img} alt="Movie"  data-aos="flip-left"/></figure>
  <div className="card-body">
    <h2 className="card-title" data-aos="flip-left">{food.food_name}</h2>
    <h2 className="card-title" data-aos="flip-left">{food.food_category}</h2>
    <p>{food.price}</p>
    <p>{food.food_origin}</p>
    <p>{food.added_by_name}</p>
    <p>{food.food_description}</p>
    <div className="card-actions justify-end">
   <Link to={`/purchase/${_id}`}>
   <button className="btn btn-primary bg-amber-400 text-black">Order</button>
   </Link>
    </div>
  </div>
</div>
        </div>
</div>
       
    );
};

export default FoodDetail;