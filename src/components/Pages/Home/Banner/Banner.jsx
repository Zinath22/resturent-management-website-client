// import img1 from '../../../assets/images/banner/1.jpg'
import img1 from '../../../../assets/b3.jpg'
import img2 from '../../../../assets/b4.jpg'
import img3 from '../../../../assets/burger.jpg'
import img4 from '../../../../assets/f.jpg'


const Banner = () => {


    return (
        <div>
          

            <div className="carousel mx-10 h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-lg" />

    <div className="absolute flex items-center h-full  rounded-lg   top-0 bottom-0   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
     <div className='text-white space-y-7 pl-12 w-1/2'>
        <h2 className='text-6xl font-bold'>Life is uncertain. Eat dessert first</h2>

        <p>There are many variations of food.please visit our resturent</p>

       
     </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={img2} className="w-full rounded-lg" />

<div className="absolute flex items-center h-full  rounded-lg   top-0 bottom-0   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
 <div className='text-white space-y-7 pl-12 w-1/2'>
    <h2 className='text-6xl font-bold'>Life is uncertain. Eat dessert first</h2>

    <p>There are many variations of food.please visit our resturent</p>

   
 </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={img3} className="w-full rounded-lg" />

<div className="absolute flex items-center h-full  rounded-lg   top-0 bottom-0   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
 <div className='text-white space-y-7 pl-12 w-1/2'>
    <h2 className='text-6xl font-bold'>Life is uncertain. Eat dessert first</h2>

    <p>There are many variations of food.please visit our resturent</p>

   
 </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={img4} className="w-full rounded-lg" />

<div className="absolute flex items-center h-full  rounded-lg   top-0 bottom-0   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
 <div className='text-white space-y-7 pl-12 w-1/2'>
    <h2 className='text-6xl font-bold'>Life is uncertain. Eat dessert first</h2>

    <p>There are many variations of food.please visit our resturent</p>

   
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