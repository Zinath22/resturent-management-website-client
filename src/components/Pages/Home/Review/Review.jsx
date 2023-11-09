import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";


const Review = () => {

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('review.json')
      .then(r => r.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <div>
      <div className="md:py-10 mx-10  ">
        <h1 className="mb-5 text-4xl text-amber-500 font-semibold text-center" data-aos="flip-left"> Review</h1>
        <div className=" flex ">
          {
            reviews?.map(review => (
              <div key={review.id}>
                <Marquee  speed={100}>
                  <div >
                    
                    <img className="w-52 mx-auto h-52 rounded-full" src={review.img} alt="" />
                  <div className="text-center text-2xl text-amber-500">
                  <h1>{review.name}</h1>
                  <h1>{review.rating}</h1>
                  </div>
                   
                  </div>
                </Marquee>
              </div>
            ))


          }
        </div>
      </div>

    </div>
  );
};

export default Review;