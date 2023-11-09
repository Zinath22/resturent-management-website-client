import { useEffect, useState } from "react";
import AllFoodItemCard from "./allFoodItemCard";
import { useLoaderData } from "react-router-dom";
import './allfood.css';
import { Helmet } from "react-helmet-async";

const AllFoodItem = () => {
    const [allItem, setAllItem] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(9);
    const [searchQuery, setSearchQuery] = useState(""); // Step 1: Add search query state
    const count = useLoaderData();

    const numberOfPages = Math.ceil(count.count / itemPerPage);
    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch(`http://localhost:5000/allFood?page=${currentPage}&size=${itemPerPage}`)
            .then((res) => res.json())
            .then((data) => setAllItem(data));
    }, [currentPage, itemPerPage]);

    const handleItemPerPage = (e) => {
        const val = parseInt(e.target.value);
        setItemPerPage(val);
        setCurrentPage(0);
    }

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    // Step 2: Create a function to handle search input changes
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Step 3: Filter the allItem array based on the search query
    const filteredItems = allItem.filter((item) => {
        return item.food_name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <div>
            <div className="justify-center text-center relative z-20">
            <Helmet>
                <title> FoodLove | All Food</title>
            </Helmet>
                {/* Step 2: Add an input field for search */}
              <div className="md:p-20 w-1/2 ">
              <input
                className="input input-secondary w-full p-2"
                    type="text"
                    placeholder="Search by food name"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className="px-10 mt-7 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Step 4: Display the filtered results */}
                {filteredItems.map((item) => (
                    <AllFoodItemCard key={item._id} item={item}></AllFoodItemCard>
                ))}
            </div>
            <div className="text-center  mb-10 px-10">
                <button onClick={handlePrev} className="btn mr-5">
                    Prev
                </button>
                {pages.map((page) => (
                    <button
                        className={currentPage === page ? 'selected' : 'notSelected'}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >
                        {page}
                    </button>
                ))}
                <button onClick={handleNext} className="btn">
                    Next
                </button>
                <select
                    className="btn ml-5"
                    value={itemPerPage}
                    onChange={handleItemPerPage}
                >
                    <option value="9">9</option>
                    <option value="15">15</option>
                    <option value="8">8</option>
                </select>
            </div>
        </div>
    );
};

export default AllFoodItem;
