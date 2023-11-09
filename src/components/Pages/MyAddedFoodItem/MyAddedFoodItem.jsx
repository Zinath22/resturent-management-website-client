

import { useContext, useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet-async';

const MyAddedFoodItem = () => {
  const [addedFood, setAddedFood] = useState([]);
  const { user } = useContext(AuthContext);
  
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://resturent-management-website-server.vercel.app/allFood');
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        const data = response.data;

        // Filter the data where added_by_email is equal to user.email
        const filteredAddedFood = data.filter((food) => food.added_by_email === user.email);

        setAddedFood(filteredAddedFood);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [user]);

  return (
    <div className='min-h-screen'>
      <Helmet>
                <title>FoodLove | MyAddedFoodItem</title>
            </Helmet>
      <h2 className='text-center text-4xl my-10 text-amber-400'>My Added Food</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto'>
        {addedFood.map((food) => (
          <div key={food._id} className='border p-6 space-y-2 rounded bg-cyan-100 shadow-xl'>


           
            <img className='w-[500px] h-[300px]' src={food.food_img} alt=""data-aos="flip-left" />
            <p  className='text-xl text-amber-400' data-aos="flip-left">{food.food_name}</p>
            <p data-aos="flip-left">Food Category: {food.food_category}</p>
            <p data-aos="flip-left">Food Description: {food.food_description}</p>
            <p data-aos="flip-left">$ {food.price}</p>
            <div className='flex items-center justify-between'>
              <Link to={`/update/${food._id}`}>
                <button className="btn btn-secondary text-black bg-amber-400">Update</button>
              </Link>
              {/* <button onClick={() => handleDelete(food._id)} className='font-semibold flex justify-end cursor-pointer text-red-500'>X</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedFoodItem;

