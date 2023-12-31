

// import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Update = () => {
    const { user } = useContext(AuthContext)
    const food = useLoaderData()
    console.log(food);

    const handleUpdateFood = async (event) => {
        event.preventDefault();
      
        const form = event.target;
        const food_name = form.food_name.value;
        const food_category = form.food_category.value;
        const quantity = form.quantity.value;
        const food_description = form.food_description.value;
        const price = form.price.value;
        const added_by_name = form.added_by_name.value;
        const added_by_email = user?.email; // Make sure user is defined
        const food_img = form.food_img.value;
        const food_origin = form.food_origin.value;
      
        const updateFood = {
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
      
        console.log(updateFood);
      
        axios
        .put(`https://resturent-management-website-server.vercel.app/allFood/${food._id}`, updateFood, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.data.modifiedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Food has been updated",
            });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle the error here
        });
      };
    
    return (
        <div>
        <div>
           <div className="md:px-10 px-2">
           <Helmet>
                <title>FoodLove | Update Food</title>
            </Helmet>
         <div className="md:w-full rounded-lg my-7 bg-gradient-to-r from-sky-400 to-gray-400 md:p-24 px-4">
                       <h2 className="text-3xl text-white justify-center text-center font-extrabold">
                           Update  a Food
                        </h2>
                      <form onSubmit={handleUpdateFood}>
                          {/* form name and quantity row  */}
                        <div className="flex md:flex-row flex-col gap-5">
                              <div className="form-control md:w-1/2">
                                     <label className="label">
                                        <span className="label-text text-xl text-white">Food Name</span>
                                    </label >                                   <label className="input-group">                                         <input
                                            type="text"
                                            name="food_name"
                                            placeholder="Enter Food name"
                                            defaultValue={food.food_name}
                                            className="input input-bordered w-full"
                                          
                                        />
                                    </label>
                                </div>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-white text-xl">Food category</span>
                                    </label>
                                    <label className="input-group">
                                        <input
                                            type="text"
                                            name="food_category"
                                            placeholder="Category Name"
                                            defaultValue={food.food_category}
                                            className="input input-bordered w-full"
                                        />
                                    </label>
                                </div>
                            </div>
    
                            {/* form supplier row  */}
                            <div className="flex md:flex-row flex-col gap-5">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-xl text-white">Quantity</span>
                                    </label>
                                    <label className="input-group">
                                        <input
                                            type="text"
                                            name="quantity"
                                            placeholder="Quantity"
                                            defaultValue={food.quantity}
                                            className="input input-bordered w-full"
                                        />
                                    </label>
                                </div>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-xl text-white">Description</span>
                                    </label>
                                    <label className="input-group">
                                        <input
                                            type="text"
                                            name="food_description"
                                            placeholder="Description"
                                            defaultValue={food.food_description}
                                            className="input input-bordered w-full"
                                        />
                                    </label>
                                </div>
                            </div>
    
                            {/* form category and details row */}
                            <div className="flex md:flex-row flex-col gap-5">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-xl text-white">Price</span>
                                    </label>
                                    <label className="input-group">
                                        <input
                                            type="text"
                                            name="price"
                                            placeholder="Price"
                                            defaultValue={food.price}
                                            className="input input-bordered w-full"
                                        />
                                    </label>
                                </div>
                                <div className="form-control w-full md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-xl text-white">User Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input
                                            type="text"
                                            name="added_by_name"
                                            placeholder="User Name"
                                            defaultValue={food.added_by_name}
                                            className="input input-bordered text-xl w-full"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col gap-5">
                                <div className="form-control md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-xl text-white">User Email</span>
                                    </label>
                                    <label className="input-group">
                                        <input
                                            type="text"
                                            name="added_by_email"
                                            placeholder="User Email" 
                                            defaultValue={food.added_by_email} 
                                            className="input input-bordered text-xl w-full"
                                        />
                                    </label>
    
                                </div>
    
                                <div className="form-control w-full md:w-1/2 ">
                                    <label className="label">
                                        <span className="label-text text-white text-xl">Food Origin
                                        </span>
                                    </label>
                                    <label className="input-group">
    
                                        <input type="text" name="food_origin" 
                                        placeholder="Food origin" defaultValue={food.food_origin}
                                         className="input input-bordered w-full" />
                                    </label>
                                </div>
    
                                {/* <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl text-white">Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="food_img"
                                        placeholder="Photo"
                                        className="input input-bordered text-xl w-full"
                                    />
                                </label>
                                
                            </div> */}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-xl text-white">Photo URL</span>
                                </label>
                                <label className="input-group">
                                    <input
                                        type="text"
                                        name="food_img"
                                        placeholder="Photo"
                                        defaultValue={food.food_img}
                                        className="input input-bordered text-xl w-full"
                                    />
                                </label>
    
                            </div>
                            <input
                                type="submit"
                                value="Update products"
                                className="mt-2 btn btn-block text-white bg-gradient-to-r from-gray-400 to-sky-400"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;