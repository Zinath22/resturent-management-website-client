// import img1 from '../../../assets/images/banner/1.jpg'
import { Link } from 'react-router-dom';
import img1 from '../../../../assets/b3.jpg'
import img2 from '../../../../assets/b4.jpg'
import img3 from '../../../../assets/burger.jpg'
import img4 from '../../../../assets/f.jpg'


const Banner = () => {

  const button = <div className='w-[300px] mx-auto'>
    <Link to={'/allFood'}><button className='btn btn-secondary'>Menu</button></Link>
  </div>

  return (
    <div>


      <div className="carousel md:mx-10 md:h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-lg" />
          

          <div className="absolute  text-center items-center  flex justify-center h-full  rounded-lg w-full  top-0 bottom-0   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white '>
              {/* <h2 className='text-6xl font-bold'>Life is uncertain. Eat delious food fast</h2> */}

              <p className='text-center items-center text-4xl' data-aos="flip-left">There are many variations of food.please visit our resturent <br /> and Eat delious food fast.</p>
              {button}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>

            </div>
          </div>
         
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-lg" />

          <div className="absolute  text-center items-center  flex justify-center h-full  rounded-lg w-full  top-0 bottom-0   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white '>


              <p className='text-4xl text-center' data-aos="flip-left">There are many variations of food.please visit our resturent <br /> and Eat delious food fast.</p>
              {button}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>

            </div>
          </div>
     
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-lg" />

          <div className="absolute  text-center items-center  flex justify-center h-full  rounded-lg w-full  top-0 bottom-0   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white '>


              <p className='text-4xl text-center' data-aos="flip-left">There are many variations of food.please visit our resturent <br /> and Eat delious food fast.</p>
              {button}

            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-lg" />

          <div className="absolute  text-center items-center  flex justify-center h-full  rounded-lg w-full  top-0 bottom-0   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white '>


              <p className='text-4xl text-center' data-aos="flip-left">There are many variations of food.please visit our resturent <br /> and Eat delious food fast.</p>
              {button}

            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;