import { Link, useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// import FoodDetailsCard from "./FoodDetailsCard";


const FoodDetail = () => {

  const [details, setDetails] = useState([])
  console.log(details);

  const food = useLoaderData();

  const { _id } = food
  console.log(food);

  // const { food_name, food_img, food_category, price } = food;
  useEffect(() => {
    fetch('https://resturent-management-website-server.vercel.app/allFood')
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [])




  return (
    <div className="md:px-10 px-5 my-7  lg:w-[80%] mx-auto">
      {/* {
            details.map(detail => <FoodDetailsCard 
              key={detail._id}
              detail={detail}
            
            ></FoodDetailsCard>)
           } */}
      <div>
        <div className="flex justify-center  items-center flex-col md:flex-row bg-base-100 shadow-xl">
          <Helmet>
            <title>FoodLove | Details</title>
          </Helmet>
          <img className="h-[200px] w-[300px] " src={food.food_img} alt="Movie" />
          <div className="card-body">
            <h2 className="" data-aos="flip-left"><span className="font-semibold mr-2">Food Name:</span>{food.food_name}</h2>
            <h2 className="" data-aos="flip-left"><span className="font-semibold mr-2">Category:</span>{food.food_category}</h2>
            <p><span className="font-semibold mr-2">Price:</span>${food.price}</p>
            <p><span className="font-semibold mr-2">Food Origin:</span>{food.food_origin}</p>
            <p><span className="font-semibold mr-2">Added By:</span>{food.added_by_name}</p>
            <p><span className="font-semibold mr-2">Description:</span>{food.food_description}</p>
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