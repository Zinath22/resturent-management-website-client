import { Link } from "react-router-dom";


const TopDetails = ({detail}) => {

    const {_id, food_name, food_img, food_category, price, food_description, food_origin } = detail;
//   console.log(food_description);

    return (
        <div>
             <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={food_img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{food_name}</h2>
    <h2 className="card-title">{food_category}</h2>
    <p className="bg-red-400 text-white">{food_description}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <Link to={`/purchase/${_id}`}><button className="btn btn-primary">Order</button></Link>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default TopDetails;