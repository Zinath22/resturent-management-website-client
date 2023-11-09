

import { useContext, useEffect, useState } from 'react';
// import Swal from 'sweetalert2';

import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const MyOrderPage = () => {
  const [orderedFood, setOrderedFood] = useState([]);
  const { user } = useContext(AuthContext);

  // const { _id } = food;
  
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/purchase');
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        const data = response.data;

        // Filter the data where added_by_email is equal to user.email
        const filteredOderedFood = data.filter((food) => food.orderedByEmail === user.email);

        setOrderedFood(filteredOderedFood);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [user.email]);

 const handleDelete = _id =>{
  console.log(_id);

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      // Swal.fire({
      //   title: "Deleted!",
      //   text: "Your file has been deleted.",
      //   icon: "success"
      // });

      fetch(`http://localhost:5000/purchase/${_id}`, {
        method: 'DELETE'
      })

      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0 ) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
              icon: "success"
             });
        }
      })
    }
  });
 }

  return (
    <div className='min-h-screen'>
      <h2 className='text-center text-4xl my-10 text-cyan-600'>My ordered Food</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto'>
        {orderedFood.map((food) => (
          <div key={food._id} className='border p-6 space-y-2 rounded bg-cyan-100 shadow-xl'>


           
            <img src={food.food_img} alt="" />
            <p>Food Name: {food.food_name}</p>
            <p>Food Category: {food.food_category}</p>
            <p>Food Description: {food.food_description}</p>
            <p>Price: {food.price}</p>
            <div className='flex items-center justify-between'>
             
                <button onClick={() => handleDelete(food._id)} className="btn btn-secondary bg-amber-400 text-black">Delete</button>
              
              {/* <button onClick={() => handleDelete(food._id)} className='font-semibold flex justify-end cursor-pointer text-red-500'>X</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrderPage;

