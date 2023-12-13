

// import { useContext, useEffect, useState } from 'react';
// // import Swal from 'sweetalert2';

// import axios from 'axios';
// import { AuthContext } from '../../Providers/AuthProvider';
// import Swal from 'sweetalert2';
// import { Helmet } from 'react-helmet-async';


// const MyOrderPage = () => {
//   const [orderedFood, setOrderedFood] = useState([]);
//   const { user } = useContext(AuthContext);

//   // const { _id } = food;




//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://resturent-management-website-server.vercel.app/purchase');
//         if (response.status !== 200) {
//           throw new Error('Network response was not ok');
//         }
//         const data = response.data;

//         // Filter the data where added_by_email is equal to user.email
//         const filteredOderedFood = data.filter((food) => food.orderedByEmail === user.email);

//         setOrderedFood(filteredOderedFood);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };

//     fetchData();
//   }, [user]);

//   // const handleDelete = id => {
//   //   console.log(id);

//   //   Swal.fire({
//   //     title: "Are you sure?",
//   //     text: "You won't be able to revert this!",
//   //     icon: "warning",
//   //     showCancelButton: true,
//   //     confirmButtonColor: "#3085d6",
//   //     cancelButtonColor: "#d33",
//   //     confirmButtonText: "Yes, delete it!"
//   //   }).then((result) => {
//   //     if (result.isConfirmed) {
//   //       // Swal.fire({
//   //       //   title: "Deleted!",
//   //       //   text: "Your file has been deleted.",
//   //       //   icon: "success"
//   //       // });

//   //       // fetch(`https://resturent-management-website-server.vercel.app/purchase/${_id}`,
//   //       // fetch(`https://resturent-management-website-server.vercel.app/purchase/${id}`, {
//   //         fetch(`https://resturent-management-website-server.vercel.app/purchase/${id}`,{
//   //         method: 'DELETE'
//   //       })

//   //         .then(res => res.json())
//   //         .then(data => {
//   //           console.log(data);
//   //           if (data.deletedCount > 0) {
//   //             Swal.fire({
//   //               title: "Deleted!",
//   //               text: "Your file has been deleted.",
//   //               icon: "success"
//   //             });
//   //           window.location.reload()
//   //             const remaining = orderedFood.filter(food =>food._id !== id);
//   //             setOrderedFood(remaining);
//   //           }
//   //         })
//   //     }
//   //   });
//   // }
//   const handleDelete = (id) => {
//     console.log(id);
  
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`https://resturent-management-website-server.vercel.app/purchase/${id}`, {
//           method: 'DELETE',
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//             window.location.reload()
//             if (data.deletedCount > 0) {
//               Swal.fire({
//                 title: 'Deleted!',
//                 text: 'Your file has been deleted.',
//                 icon: 'success',
//               });
  
//               // Update the state with the filtered data
//               const remaining = orderedFood.filter((food) => food._id !== id);
//               setOrderedFood(remaining);
//             }
//           });
//       }
//     });
//   };
  

//   return (
//     <div className='my-10'>
//       <Helmet>
//         <title>FoodLove | MyOrderPage</title>
//       </Helmet>
//       <h2 className='text-center text-4xl my-10 text-amber-400'>My ordered Food</h2>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-[80%] '>
//         {orderedFood.map((food) => (
//           <div key={food._id} 
          
//           className='border p-6 space-y-2 rounded bg-cyan-100 shadow-xl'>



//             <img className='h-[200px] w-[300px]' src={food.food_img} alt="" data-aos="flip-left" />
//             <p className='text-amber-400 text-xl' data-aos="flip-left">{food.food_name}</p>
//             <p data-aos="flip-left">$ {food.price}</p>
//             <p data-aos="flip-left">Date: {food.date}</p>


//             <div className='flex items-center justify-between'>

//               <button onClick={() => handleDelete(food._id)} className="btn btn-secondary bg-amber-400 text-black">Delete</button>

//               {/* <button onClick={() => handleDelete(food._id)} className='font-semibold flex justify-end cursor-pointer text-red-500'>X</button> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyOrderPage;

import  { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
// import { useLoaderData } from 'react-router-dom';

const MyOrderPage = () => {
  // const [food] = useLoaderData();
  const [orderedFood, setOrderedFood] = useState([]);
  const { user } = useContext(AuthContext);

 const totalPrice = orderedFood.reduce((total, item) => total  + parseInt(item.price), 0)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://resturent-management-website-server.vercel.app/purchase');
        if (response.status !== 200) {
          throw new Error('Network response was not ok');
        }
        const data = response.data;
        console.log(data);

        // Filter the data where email matches the user's email
        const filteredOderedFood = data.filter((food) => food.orderedByEmail === user.email);
        
        setOrderedFood(filteredOderedFood);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [user.email]);
  console.log(orderedFood);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      allowOutsideClick: false,
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return fetch(`https://resturent-management-website-server.vercel.app/purchase/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingFood = orderedFood.filter((food) => food._id !== id);
              setOrderedFood(remainingFood);
              return data;
            } else {
              throw new Error('Failed to delete the bid.');
            }
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: `Error: ${error.message}`,
            });
          });
      },
    })
      .then((result) => {
        if (result.value) {
          Swal.fire('Deleted!', 'Your bid has been deleted.', 'success');
          location.reload()
        }
      });
  };

  return (
    <div className='my-10'>
      <Helmet>
        <title>FoodLove | MyOrderPage</title>
      </Helmet>
      <h2 className='text-center text-4xl my-10 text-amber-400'>My ordered Food</h2>
      <h2 className='text-center text-4xl my-10 text-amber-400'>Total Price:{totalPrice} </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-[80%] '>
        {orderedFood.map((food) => (
         <div key={food._id}>
        
           <div  className='border p-6 space-y-2 rounded bg-cyan-100 shadow-xl'>
            <img className='h-[200px] w-[300px]' src={food.food_img} alt='' data-aos='flip-left' />
            <p className='text-amber-400 text-xl' data-aos='flip-left'>
              {food.food_name}
            </p>
            <p data-aos='flip-left'>$ {food.price}</p>
            <p data-aos='flip-left'>Date: {food.date}</p>
            <div className='flex items-center justify-between'>
              
              <button onClick={() => handleDelete(food._id)} className='btn btn-secondary bg-amber-400 text-black'>
                Delete
              </button>
            </div>
          </div>
         </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrderPage;
