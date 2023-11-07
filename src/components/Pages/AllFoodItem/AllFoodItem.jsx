import { useEffect, useState } from "react";
import AllFoodItemCard from "./allFoodItemCard";
import { useLoaderData } from "react-router-dom";



const AllFoodItem = ({input, inputValue,food_name}) => {
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
        fetch(`http://localhost:5000/allFood?page=${currentPage}&size=${itemPerPage}`)
        .then(res => res.json())
        .then(data => setAllItem(data))
    }, [currentPage, itemPerPage]);
   

    const handleItemPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemPerPage(val);
        setCurrentPage(0);
    }

    const handlePrev = () =>{
        if(currentPage > 0){
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNext = () =>{
        if(currentPage < pages.length){
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div>

<div className="justify-center text-center relative z-20">
          <input
            className="ml-3 text-center mt-10 rounded-l-lg py-2"
            type="text"
            placeholder="Search Here...."
            value={input}
            onChange={inputValue}
          />
          <button
            className="bg-[#FF444A] text-white rounded-r-lg border-l-0 py-2 px-4"
            onClick={food_name}
          >
            Search
          </button>
        </div>
            <div className="px-10 mt-7 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {
            allItem.map(item => <AllFoodItemCard key={item._id}
             item={item}
            ></AllFoodItemCard>)
         }
            </div>
            <div className="text-center  mb-10 px-10">
                {/* <p>c.p: {currentPage}</p> */}
                <button onClick={handlePrev}
                className="btn mr-5"
                >Prev</button>
                {
                    pages.map(page => <button className="btn mr-4" 
                     onClick={() => setCurrentPage(page)}
                    key={page}>{page}</button>)
                }
                <button onClick={handleNext} className="btn ">Next</button>
                <select className="btn ml-5 " value={itemPerPage} onChange={handleItemPerPage} name="" id="">
                    <option value="9">9</option>
                    <option value="15">15</option>
                    <option value="8">8</option>
                </select>
            </div>
        
        </div>
    );
};

export default AllFoodItem;