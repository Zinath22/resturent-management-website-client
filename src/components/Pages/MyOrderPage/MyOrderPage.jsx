

const MyOrderPage = () => {
    return (
        <div>
             <div className='min-h-screen'>
      <h2 className='text-center text-4xl my-10 text-cyan-600'>My Added Food</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto'>
        {addedFood.map((food) => (
          <div key={food._id} className='border p-6 space-y-2 rounded bg-cyan-100 shadow-xl'>


           
            <img src={food.food_img} alt="" />
            <p>Food Name: {food.food_name}</p>
            <p>Food Name: {food.added_time}</p>
            <p>Food Name: {food.added_time}</p>
            
            
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
        </div>
    );
};

export default MyOrderPage;