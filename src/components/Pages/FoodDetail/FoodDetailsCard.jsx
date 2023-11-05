

const FoodDetailsCard = ({detail}) => {

        const { food_name, food_img, food_category, price, description, food_origin } = detail;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={food_img} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{food_name}</h2>
    <h2 className="card-title">{food_category}</h2>
    <p>{price}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Order</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodDetailsCard;