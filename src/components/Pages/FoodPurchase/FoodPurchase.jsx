import  { useContext } from "react"; // Import React
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const FoodPurchase = () => {
    const { user } = useContext(AuthContext);
    const purchase = useLoaderData();
    const { title, _id, food_name, food_category, price,quantity } = purchase; // Changed 'quantity' to 'price' to match your form fields.

    const handlePurchase = e => {
        e.preventDefault();

        const orderdbyEmail = user.email;
        const orderdbyName = user.displayName; // Use 'user.displayName' directly
        const foodName = food_name; // Use 'food_name' directly
        const date = e.target.date.value;
        const quantity = e.target.quantity;

        const purchaseData = {
            food_name: foodName, // Use 'foodName' instead of 'food_name'
            food_category,
            orderdbyEmail,
            orderdbyName,
            date,
            price,
            quantity,
        };
        console.log(purchaseData);

        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
          'content-type': 'application/json'

            },
            body: JSON.stringify(purchaseData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Your purchase successfull",
                    icon: "success"
                  });
            }
        })
    };

    return (
        <div className="w-2/3 mx-auto">
            <h2 className='text-center text-3xl'>Food: {food_name} </h2>
            <form onSubmit={handlePurchase}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <input type="text" defaultValue={food_name} readOnly name="foodName" className="input input-bordered" />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Buyer Name</span>
                        </label>
                        <input type="text" defaultValue={user.displayName} readOnly name="name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Buyer Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user.email} readOnly placeholder="email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} readOnly className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" defaultValue={quantity} readOnly className="input input-bordered" />
                    </div>
                </div>

                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Purchase" />
                </div>
            </form>
            <div className="card-body"></div>
        </div>
    );
};

export default FoodPurchase;
