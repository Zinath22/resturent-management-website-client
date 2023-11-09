import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";


const TopDetails = () => {

    const [ details, setDetails] = useState([])
 console.log(details);
 
    const food = useLoaderData();

    const {_id } = food
  console.log(food);

    useEffect(()=>{
        fetch('http://localhost:5000/allFood')
        .then(res => res.json())
        .then(data => setDetails(data))
       },[])

    return (
        <div className="p-20 justify-center w-3/4 mx-auto ">
            <Helmet><title>FoodLove || Details </title></Helmet>
        {/* {
         details.map(detail => <FoodDetailsCard 
           key={detail._id}
           detail={detail}
         
         ></FoodDetailsCard>)
        } */}
      <div>
         <div className="card card-side bg-base-100 shadow-xl">
<figure><img className="" src={food.food_img} alt="Movie"/></figure>
<div className="card-body">
 <h2 className="card-title">{food.food_name}</h2>
 <h2 className="card-title">{food.food_category}</h2>
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

export default TopDetails;