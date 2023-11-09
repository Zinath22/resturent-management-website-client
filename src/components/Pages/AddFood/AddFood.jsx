import  { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AddFood = () => {
    const { user } = useContext(AuthContext);
    const [quantity, setQuantity] = useState(1);
   
    
    const handleAddFood = (event) => {
        event.preventDefault();

        const form = event.target;

        const food_name = form.food_name.value;
        const food_category = form.food_category.value;
        const food_description = form.food_description.value;
        const price = form.price.value;
        const added_by_name = form.added_by_name.value;
        const added_by_email = user?.email;
        const food_img = form.food_img.value;
        const food_origin = form.food_origin.value;

        const newFood = {
            food_name,
            food_category,
            quantity,
            food_description,
            price,
            added_by_name,
            added_by_email,
            food_img,
            food_origin,
        };

        // console.log(newFood);

        fetch("https://resturent-management-website-server.vercel.app/allFood", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFood),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);

                if (data.insertedId) {
                    Swal.fire({
                        title: " Success",
                        text: "Product added successfully",
                        icon: "success",
                        confirmButtonText: "OKk",
                    });
                }
            });
    };

    return (
        <div>
            <Helmet>
                <title>FoodLove | Add Food</title>
            </Helmet>
            <div className="px-10">
                <div className="md:w-full rounded-lg my-7 bg-gradient-to-r from-sky-400 to-gray-400 p-24">
                    <h2 className="text-3xl text-white justify-center text-center font-extrabold">
                        Add a New Food
                    </h2>
                    <form onSubmit={handleAddFood}>
                        <div className="flex md:flex-row flex-col gap-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl text-white">
                                        Food Name
                                    </span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="food_name"
                                        placeholder="Enter Food name"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-white text-xl">
                                        Food category
                                    </span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="food_category"
                                        placeholder="Category Name"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col gap-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl text-white">
                                        Quantity
                                    </span>
                                </label>
                                <div className="input-group flex items-center">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setQuantity(quantity - 1)
                                        }
                                        className="btn btn-secondary"
                                        disabled={quantity <= 0}
                                    >
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        name="quantity"
                                        value={quantity}
                                        readOnly
                                        className="input input-bordered w-full text-center"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setQuantity(quantity + 1)
                                        }
                                        className="btn btn-secondary"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl text-white">
                                        Description
                                    </span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="food_description"
                                        placeholder="Description"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col gap-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl text-white">
                                        Price
                                    </span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="price"
                                        placeholder="Price"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl text-white">
                                        User Name
                                    </span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="added_by_name"
                                        placeholder="User Name"
                                        defaultValue={user?.added_by_name}
                                        className="input input-bordered text-xl w-full"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col gap-5">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl text-white">
                                        User Email
                                    </span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="added_by_email"
                                        placeholder="User Email"
                                        defaultValue={user?.email}
                                        readOnly
                                        className="input input-bordered text-xl w-full"
                                    />
                                </label>
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl">
                                        Food Origin
                                    </span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="food_origin"
                                        placeholder="Food origin"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl text-white">
                                    Photo URL
                                </span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="food_img"
                                    placeholder="Photo"
                                    className="input input-bordered text-xl w-full"
                                />
                            </label>
                        </div>
                        <input
                            type="submit"
                            value="Add products"
                            className="mt-2 btn btn-block text-white bg-gradient-to-r from-gray-400 to-sky-400"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddFood;
