

import { useContext, useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';


const MyOrderPage = () => {
  const [orderedFood, setOrderedFood] = useState([]);
  const { user } = useContext(AuthContext);
  
  
  

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
              <Link to={`/update/${food._id}`}>
                <button className="btn btn-secondary">Update</button>
              </Link>
              {/* <button onClick={() => handleDelete(food._id)} className='font-semibold flex justify-end cursor-pointer text-red-500'>X</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrderPage;

