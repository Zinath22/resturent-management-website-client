import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";


const Review = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() =>{
        fetch('review.json')
        .then(r => r.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <div>
             <div className="py-10 mx-10  ">
            <h1 className="mb-5 text-4xl text-amber-500 font-semibold text-center" data-aos="flip-left"> Review</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    reviews?.map(review =>(
                      <div key={review.id}>
                         <Marquee pauseOnHover={true} speed={200}>
                        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  {/* <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"> */}
    <img className="w-[320px] rounded-full h-[300px] mx-auto  " src={review.img} alt={review.name} />
  {/* </div> */}
  <div className="p-6 text-center">
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-amber-400 antialiased">
      {review.name}
    </h4>
    <p className="block text-amber-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
      {review.rating}
    </p>
  </div>
  <div className="flex justify-center gap-7 p-6 pt-2">
    <a
      href="#facebook"
      className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-facebook" aria-hidden="true"></i>
    </a>
    <a
      href="#twitter"
      className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-twitter" aria-hidden="true"></i>
    </a>
    <a
      href="#instagram"
      className="block bg-gradient-to-tr from-red-600 to-red-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
    >
      <i className="fab fa-instagram" aria-hidden="true"></i>
    </a>
  </div>
</div>
</Marquee>
                      </div>
                    ) )
                        
                    
                } 
             </div> 
        </div>
        
        </div>
    );
};

export default Review;