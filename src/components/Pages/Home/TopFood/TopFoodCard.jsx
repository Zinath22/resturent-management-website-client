import { Link } from "react-router-dom";


const TopFoodCard = ({food}) => {
    const {_id, food_name, food_img, food_category, price, quantity} = food;


    return (

       <div>
         <div className="card bg-sky-200  h-[450px]   shadow-xl">
            <figure className=" ">
                <img src={food_img} alt="Shoes" className=" " />
            </figure>
            <div className="card-body">
                <h2 className="text-amber-400 card-title">{food_name}</h2>
                <h2 className="text-amber-400 card-title">{food_category}</h2>
                <p className="text-xl text-amber-400">Price: ${price}</p>
                <p className="text-xl text-amber-400">Quantity: {quantity}</p>
                {/* <p className="text-xl text-orange-500">email: {email}</p> */}
                
                <div className="card-actions">
                   
                        <Link to={`/topDetails/${_id}`}><button className="btn  btn-accent bg-amber-400 text-black">Show Details</button></Link>
                    
                </div>
            </div>
            
        </div>
        
       </div>
       

    );
};

export default TopFoodCard;