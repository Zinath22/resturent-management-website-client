import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AllFoodItemCard = ({item}) => {
    const {_id, food_name, food_img, food_category, price, quantity} = item

    return (
        <div>
             <div>
         <div className="card bg-sky-200  h-[450px]   shadow-xl">
            <figure className=" ">
                <img src={food_img} alt="Shoes" className="w-full " data-aos="flip-left" />
            </figure>
            <div className="card-body">
                <h2 className="text-amber-400 card-title" data-aos="flip-left">{food_name}</h2>
                <h2 className="text-amber-400 card-title" data-aos="flip-left">category: {food_category}</h2>
                <p className="text-xl text-amber-500" data-aos="flip-left">Price: ${price}</p>
                <p className="text-xl text-amber-500" data-aos="flip-left">Quantity:{quantity}</p>
                {/* <p className="text-xl text-orange-500">email: {email}</p> */}
                
                <div className="card-actions">
                   
                        <Link to={`/details/${_id}`}><button className="btn btn-primary bg-amber-400 text-black">Show Details</button></Link>
                    
                </div>
            </div>
            
        </div>
        
       </div>
        </div>
    );
};
AllFoodItemCard.propTypes = {
    item:PropTypes.object
}
  
export default AllFoodItemCard;