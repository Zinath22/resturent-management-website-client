// // import { useEffect, useState } from "react";
// // import { useLoaderData } from "react-router-dom";


// // const MyAddedFoodItem = () => {

    
// //   const [ myyAddFood, setMyAddFood] = useState([])
// //   console.log(myyAddFood);
  
// //      const food = useLoaderData();
 
// //     //  const {_id } = food
// //    console.log(food);
 
// //      // const { food_name, food_img, food_category, price } = food;
// //       useEffect(()=>{
// //        fetch(`http://localhost:5000/purchase`${})
// //        .then(res => res.json())
// //        .then(data => setMyAddFood(data))
// //       },[])

// //     return (
// //         <div>
// //                <div className="px-10 mt-7 justify-center w-[700px]">
          
// //          <div>
// //             <div className="card card-side bg-base-100 shadow-xl">
// //   <figure><img src={food.food_img} alt="Movie"/></figure>
// //   <div className="card-body">
// //     <h2 className="card-title">{food.food_name}</h2>
// //     {/* <h2 className="card-title">{food.food_category}</h2> */}
// //     <p>{food.price}</p>
// //     {/* <p>{food.food_description}</p> */}
// //     <div className="card-actions justify-end">
// //    {/* <Link to={`/purchase/${_id}`}> */}
// //    <button className="btn btn-primary">Order</button>
// //    {/* </Link> */}
// //     </div>
// //   </div>
// // </div>
// //         </div>
// // </div>
// //         </div>
// //     );
// // };

// // export default MyAddedFoodItem;



// import { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
// import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// // import { Link } from 'react-router-dom';

// const PostedJobs = () => {
//   const [postedJobs, setPostedJobs] = useState([]);
//   const { user } = useContext(AuthContext);
//   // const { _id } = postedJobs

//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:7000/postedjobs/', {withCredentials: true});
//             if (response.status !== 200) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = response.data;

//             // Filter the data where postedJobderEmail is "shehabchowdhury10@gmail.com"
//             const filteredpostedJobs = data.filter((postedJob) => postedJob.email === user.email);
//             setPostedJobs(filteredpostedJobs);
//         } catch (error) {
//             console.error('Error fetching data: ', error);
//         }
//     };

//     fetchData();

// }, [user.email]);// Add user.email as a dependency to re-fetch data when it changes

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//       allowOutsideClick: false, // Prevent clicking outside the dialog
//       showLoaderOnConfirm: true, // Display loading indicator

//       preConfirm: () => {
//         return fetch(http://localhost:7000/postedjobs/${id}, {
//           method: 'DELETE'
//         })
//           .then(res => res.json())
//           .then(data => {
//             if (data.deletedCount > 0) {
//               const remainingPostedJobs = postedJobs.filter(postedJob => postedJob._id !== id);
//               setPostedJobs(remainingPostedJobs);
//               return data;
//             } else {
//               throw new Error('Failed to delete the bid.');
//             }
//           })
//           .catch(error => {
//             Swal.showValidationMessage(Error: ${error.message});
//           });
//       },
//     })
//       .then((result) => {
//         if (result.value) {
//           Swal.fire('Deleted!', 'Your bid has been deleted.', 'success');
//         }
//       });
//   };

//   return (
//     <div className='min-h-screen'>
//       {/* Render the filtered postedJobs */}
//       <h2 className='text-center text-4xl my-10 text-cyan-600'>My Posted Jobs</h2>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto' >
//         {postedJobs.map((postedJob) => (
//           <div key={postedJob._id} className='border p-6 space-y-2 rounded bg-cyan-100  shadow-xl '>
//             <p>Job Title: {postedJob.jobTitle}</p>
//             <p>Job Category: {postedJob.jobCategory}</p>
//             <p>Job Description: {postedJob.description}</p>
//             <p>Your Deadline: {postedJob.deadline}</p>
//             <p>Your Max-Price: {postedJob.maxPrice}</p>
//             <p>Your Min-Price: {postedJob.minPrice}</p>
//             <div className='flex items-center justify-between'>
//               <Link to={`/update/${postedJob._id}`}>
//                 <button className="btn btn-secondary">Update</button>
//               </Link>
//               <button onClick={() => handleDelete(postedJob._id)} className=' font-semibold flex justify-end cursor-pointer  text-red-500'>X</button>

//             </div>


//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PostedJobs;






// import { useContext, useEffect, useState } from 'react';
// // import { AuthContext } from '../Provider/AuthProvider';
// import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../../Providers/AuthProvider';
// // import { Link } from 'react-router-dom';

// const MyAddedFoodItem = () => {
//   const [addedFood, setAddedFood] = useState([]);
//   const { user } = useContext(AuthContext);
//   // const { _id } = postedJobs

//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/allFood');
//             if (response.status !== 200) {
//                 throw new Error('Network response was not ok');
//             }
//             const data = response.data;

//             // Filter the data where postedJobderEmail is 
//             const filteredAddeFood = data.filter((addFood) => addFood.email === user.email);

//             setAddedFood(filteredAddeFood);
//         } catch (error) {
//             console.error('Error fetching data: ', error);
//         }
//     };
//     fetchData();

// }, [user.email]);// Add user.email as a dependency to re-fetch data when it changes

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//       allowOutsideClick: false, // Prevent clicking outside the dialog
//       showLoaderOnConfirm: true, // Display loading indicator

//       preConfirm: () => {
//         return fetch(`http://localhost:7000/postedjobs/${id}`, {
//           method: 'DELETE'
//         })
//           .then(res => res.json())
//           .then(data => {
//             if (data.deletedCount > 0) {
//               const remainingPostedJobs = addedFood.filter(postedJob => postedJob._id !== id);
//               setAddedFood(remainingPostedJobs);
//               return data;
//             } else {
//               throw new Error('Failed to delete the bid.');
//             }
//           })
//           .catch(error => {
//             Swal.showValidationMessage(`Error: ${error.message}`);
//           });
//       },
//     })
//       .then((result) => {
//         if (result.value) {
//           Swal.fire('Deleted!', 'Your bid has been deleted.', 'success');
//         }
//       });
//   };

//   return (
//     <div className='min-h-screen'>
//       {/* Render the filtered postedJobs */}
//       <h2 className='text-center text-4xl my-10 text-cyan-600'>My Posted Jobs</h2>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto' >
//         {addedFood.map((addFood) => (
//           <div key={addFood._id} className='border p-6 space-y-2 rounded bg-cyan-100  shadow-xl '>
//             <p>Job Title: {addFood.jobTitle}</p>
//             <p>Job Category: {addFood.jobCategory}</p>
//             <p>Job Description: {addFood.description}</p>
//             <p>Your Deadline: {addFood.deadline}</p>
//             <p>Your Max-Price: {addFood.maxPrice}</p>
//             <p>Your Min-Price: {addFood.minPrice}</p>
//             <div className='flex items-center justify-between'>
//               <Link to={`/update/${addFood._id}`}>
//                 <button className="btn btn-secondary">Update</button>
//               </Link>
//               <button onClick={() => handleDelete(addFood._id)} className=' font-semibold flex justify-end cursor-pointer  text-red-500'>X</button>

//             </div>


//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyAddedFoodItem;

import { useContext, useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';

const MyAddedFoodItem = () => {
  const [addedFood, setAddedFood] = useState([]);
  const { user } = useContext(AuthContext);
  
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/allFood');
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
  }, [user.email]);

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//       allowOutsideClick: false,
//       showLoaderOnConfirm: true,

//       preConfirm: () => {
//         return fetch(`http://localhost:5000/allFood/${id}`, {
//           method: 'DELETE'
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount > 0) {
//               const remainingPostedJobs = addedFood.filter((food) => food._id !== id);
//               setAddedFood(remainingPostedJobs);
//               return data;
//             } else {
//               throw new Error('Failed to delete the bid.');
//             }
//           })
//           .catch((error) => {
//             Swal.showValidationMessage(`Error: ${error.message}`);
//           });
//       },
//     })
//       .then((result) => {
//         if (result.value) {
//           Swal.fire('Deleted!', 'Your bid has been deleted.', 'success');
//         }
//       });
//   };

  return (
    <div className='min-h-screen'>
      <h2 className='text-center text-4xl my-10 text-cyan-600'>My Added Food</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto'>
        {addedFood.map((food) => (
          <div key={food._id} className='border p-6 space-y-2 rounded bg-cyan-100 shadow-xl'>


           
            <img src={food.food_img} alt="" />
            <p>Food Name: {food.food_name}</p>
            <p>Food Category: {food.food_category}</p>
            <p>Food Description: {food.food_description}</p>
            <p>Price: {food.price}</p>
            <div className='flex items-center justify-between'>
              <Link to={'/update'}>
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

export default MyAddedFoodItem;

