import { Link } from "react-router-dom";


const AllFoodItemCard = ({item}) => {
    const {_id, food_name, food_img, food_category, price, quantity} = item

    return (
        <div>
             <div>
         <div className="card bg-sky-200  h-[450px]   shadow-xl">
            <figure className=" ">
                <img src={food_img} alt="Shoes" className=" " />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{food_name}</h2>
                <h2 className="card-title">{food_category}</h2>
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <p className="text-xl text-orange-500">{quantity}</p>
                {/* <p className="text-xl text-orange-500">email: {email}</p> */}
                
                <div className="card-actions">
                   
                        <Link to={`/details/${_id}`}><button className="btn btn-primary">Show Details</button></Link>
                    
                </div>
            </div>
            
        </div>
        
       </div>
        </div>
    );
};

export default AllFoodItemCard;