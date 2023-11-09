import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const FoodPurchase = () => {
    const { user } = useContext(AuthContext);
    const purchase = useLoaderData();
    const { food_name, food_img, food_category, price, quantity: availableQuantity } = purchase;
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allFood')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const handlePurchase = (e) => {
        e.preventDefault();

        const orderedByEmail = user.email;
        const orderedByName = e.target.name.value;
        const foodName = food_name;
        const date = e.target.date.value;
        const quantityToPurchase = parseInt(e.target.quantity.value, 10);

        // Check if the item is available
        if (availableQuantity == 0) {
            Swal.fire({
                title: "Item Not Available",
                text: "This item is not available for purchase.",
                icon: "error",
            });
            return;
        }

        // Check if the user is trying to purchase more than the available quantity
        if (quantityToPurchase > availableQuantity) {
            Swal.fire({
                title: "Quantity Limit Exceeded",
                text: "You can't buy more than the available quantity.",
                icon: "error",
            });
            return;
        }

        const purchaseData = {
            food_name: foodName,
            food_category,
            orderedByEmail,
            orderedByName,
            date,
            food_img,
            price,
            quantity: quantityToPurchase,
        };

        console.log(purchaseData);

        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(purchaseData)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Your purchase  successful",
                        icon: "success"
                    });
                }
            });
    };

    return (
        <div className="w-2/3 mx-auto">
            <h2 className='text-center text-3xl'>Food: {food_name}</h2>
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
                        <input type="text"  name="name" className="input input-bordered" />
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
                        <input type="text" defaultValue={`$${price}`} readOnly className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name="quantity" className="input input-bordered" />
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
