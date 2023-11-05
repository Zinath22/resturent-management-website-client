import { useEffect, useState } from "react";
import AllFoodItemCard from "./allFoodItemCard";
import { useLoaderData } from "react-router-dom";



const AllFoodItem = () => {
    const [allItem, setAllItem] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(9);
    const count = useLoaderData();
    
//   console.log(count.count, itemPerPage);
    const numberOfPages = Math.ceil(count.count / itemPerPage);
//    console.log(numberOfPages)
    // const pages = []
    // for(let i = 0; i < numberOfPages; i++){
    //     pages.push(i)
    // }

    // console.log(pages)

    const pages = [...Array(numberOfPages).keys()]

    useEffect( () => {
        fetch('http://localhost:5000/allFood')
        .then(res => res.json())
        .then(data => setAllItem(data))
    },[])
   

    const handleItemPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemPerPage(val)
    }
    return (
        <div>
            <div className="px-10 mt-7 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {
            allItem.map(item => <AllFoodItemCard key={item._id}
             item={item}
            ></AllFoodItemCard>)
         }
            </div>
            <div className="text-center  mb-10 px-10">
                <p>c.p: {currentPage}</p>
                {
                    pages.map(page => <button className="btn mr-4" 
                     onClick={() => setCurrentPage(page)}
                    key={page}>{page}</button>)
                }
                <select value={itemPerPage} onChange={handleItemPerPage} name="" id="">
                    <option value="9">9</option>
                    <option value="15">15</option>
                    <option value="8">8</option>
                </select>
            </div>
        
        </div>
    );
};

export default AllFoodItem;