const Contact = () => {
   
    return (
        <div className="px-10 my-10  ">
            
           
           
  
  
   <div className="flex flex-col md:flex-row justify-evenly mx-auto  text-center items-center">

   <div className="  ">
    <h1 className="text-purple-500 text-3xl mb-5 " >Contact Us</h1>
      <h1 className="text-2xl text-purple-500 mb-2" data-aos="flip-left">phone </h1>
      <p className="" data-aos="flip-left">+0999911</p>
      <h1 className="text-2xl text-purple-500" data-aos="flip-left">Email</h1>
      <p className="" data-aos="flip-left">glamour@grace.com</p>
   </div>
    
  <div>
    
  <div className="flex text-purple-500 justify-start items-center space-y-4 flex-col">
  <h2>Message Us</h2>
  <input className="border p-1 border-purple-500" placeholder="Name" type="name" name="" id="" />
<input className="border p-1 border-purple-500" placeholder="Email" type="email" name="" id="" />
<textarea
placeholder="Your Message"
   className="border p-2 border-purple-500"
   cols="30"
   rows="3"
 ></textarea>
<button className="btn bg-purple-500 text-white">Submit</button>


</div>
  </div>
      
      {/* <button className="btn btn-primary"></button> */}
    </div>
    
  </div>
  

        
    );
};

export default Contact;