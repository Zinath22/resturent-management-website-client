import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {


    const [error, setError] = useState('');
    // const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // State for checkbox
    const { createUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    // const handleRegister = e => {
    //     e.preventDefault();

  

    
        const handleRegister = e => {
            e.preventDefault();
        
            const email = e.target.email.value;
            const password = e.target.password.value;
            const confirmPassword = e.target.confirmPassword.value;
        
            // Validate password
            const passwordValidationResult = validatePassword(password);
            if (passwordValidationResult !== true) {
                Swal.fire(
                    'Oops!',
                    passwordValidationResult,
                    'error'
                );
                return;
            }
        
            if (password !== confirmPassword) {
                Swal.fire(
                    'Oops!',
                    'Password and Confirm Password do not match.',
                    'error'
                );
            }
            // else if (!isCheckboxChecked) {
            //     Swal.fire(
            //         'Oops!',
            //         'Please accept the Terms of Use and Privacy Policy.',
            //         'error'
            //     );
            // } 
           else 
                {
                    createUser(email, password)
                    .then(r => {
                        console.log(r.user);
                        Swal.fire(
                            'Success!',
                            'User registration successful.',
                            'success'
                        );
        
                        // Reset the form fields
                        e.target.email.value = '';
                        e.target.password.value = '';
                        e.target.confirmPassword.value = '';
                        // setIsCheckboxChecked(false);
        
                        logOut()
                            .then(() => {
                                // Log out success
                            })
                            .catch(error => {
                                console.error(error);
                            });
                        navigate(location?.state ? location.state : '/login')
                    })
                    .catch(error => {
                        console.error(error);
                        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                            Swal.fire(
                                'Oops!',
                                'User already exists.',
                                'error'
                            );
                        } else(setError(error.message))
                    });
            }
        }
        
        // const handleCheckboxChange = (e) => {
        //     setIsCheckboxChecked(e.target.checked);
        // }
    
        const validatePassword = (password) => {
            if (password.length < 6) {
                return 'Password must be at least 6 characters.';
            }
    
            if (!/[A-Z]/.test(password)) {
                return 'Password must contain at least one uppercase letter.';
            }
    
            if (!/[a-z]/.test(password)) {
                return 'Password must contain at least one lowercase letter.';
            }
    
            if (!/[!@#$%^&*()_+\-= [\]{};':"\\|,.<>?]/.test(password)) {
                return 'Password must contain at least one special character.';
            }
    
            if (!/\d/.test(password)) {
                return 'Password must contain at least one number.';
            }
    
            return true;
        }

    // const handleRegister = e =>{
    //     e.preventDefault();
    //     console.log(e.currentTarget)
    //     const form = new FormData(e.currentTarget)
    //     console.log(form.get('password')) 
    // }
    return (
        <div>
               <div>
         
         <p className=" text-center text-purple-500">{error}</p>
         <div className="w-full lg:w-1/2 my-10 mx-auto py-11 px-12 text-white font-bold bg-gradient-to-r from-purple-500 to-pink-500 " >
                         <h2 className="text-2xl text-center mb-4">Register</h2>
                         <p className="mb-4 text-lg text-center">
                             Create your account.
                         </p>
                         <form 
                         onSubmit={handleRegister}
                          className="text-black">
                            
                             <div className="mt-5">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                 <input
                                     type="text"
                                     name="name"
                                     placeholder="Name"
                                     required
                                     className="input text-white rounded  w-full" />
                             </div>
                             <div className="mt-5">
                             <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                 <input
                                     type="email"
                                     name="email"
                                     placeholder="Email"
                                     required
                                     className="input text-white  rounded  w-full" />
                             </div>
                             <div className="mt-5">
                             <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                 <input
                                     type="password"
                                     name="password"
                                     placeholder="Password"
                                     required
                                     className="input text-white  rounded  w-full" />
                             </div>
                             <div className="mt-5">
                                 <input
                                     type="password"
                                     name="confirmPassword"
                                     placeholder="Confirm Password"
                                     required
                                     className="input text-white  rounded  w-full" />
                             </div>
                             {/* <div className="mt-5">
                                 <input
                                 onSubmit={handleCheckboxChange}
                                     type="checkbox"
                                     className="border border-gray-400 mr-3"
                                     />
                                 <span>
                                     I accept the <a href="#" className="text-red-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-red-500 font-semibold">Privacy Policy</a>
                                 </span>
                             </div> */}
                             <div className="mt-5">
                                 <button className="w-full bg-gradient-to-r  from-pink-500 to-purple-500 py-3 text-center rounded text-white">Register Now</button>
                                 <p className="text-center mt-3">Already Have an Account? <Link to="/login">
                                     <span className="btn-link font-medium text-white">Login</span>
                                 </Link>
                                 </p>
                             </div>

                         </form>
                     </div>
     </div>
        </div>
    );
};

export default Register;


// // Import necessary dependencies and components
// import  { useState, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { AuthContext } from "../Providers/AuthProvider";
// import axios from "axios";

// // Define the Register component
// const Register = () => {
//     // Initialize state for error messages
//     const [error, setError] = useState("");

//     // Access authentication functions and navigation from context
//     const { createUser, logOut } = useContext(AuthContext);
//     const navigate = useNavigate();

//     // Handle form submission
//     const handleRegister = (e) => {
//         e.preventDefault();

//         // Extract form input values
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         const confirmPassword = e.target.confirmPassword.value;
//         const name = e.target.name.value;
//         const url = e.target.url.value;
   
    
//         // Create a user object with form input values
//         const newUser = {
//             email,
//             password,
//             confirmPassword,
//             name,
//             url,
//         };

//         // Validate password
//         const passwordValidationResult = validatePassword(password);
//         if (passwordValidationResult !== true) {
//             Swal.fire("Oops!", passwordValidationResult, "error");
//             return;
//         }

//         if (password !== confirmPassword) {
//             Swal.fire("Oops!", "Password and Confirm Password do not match.", "error");
//         } else {
//             // Attempt to create a new user account

//             createUser(email, password)
//                 .then(() => {
//                     // If account creation is successful, send user data to your backend
//                     axios
//                         .post("http://localhost:5000/users", newUser, {
//                             headers: {
//                                 "Content-Type": "application/json",
//                             },
//                         })
//                         .then((response) => {
//                             console.log(response.data);

//                             // Display a success message
//                             Swal.fire("Success!", "User registration successful.", "success");

//                             // Clear form fields
//                             e.target.email.value = "";
//                             e.target.password.value = "";
//                             e.target.confirmPassword.value = "";

//                             // Log out the user (you might want to change this logic)
//                             logOut()
//                                 .then(() => {
//                                     // Log out success
//                                 })
//                                 .catch((logoutError) => {
//                                     console.error(logoutError);
//                                 });

//                             // Redirect the user to the desired page
//                             navigate(location?.state ? location.state : "/login");
//                         })
//                         .catch((postError) => {
//                             console.error("Error:", postError);
//                             // Handle the error here
//                         });
//                 })
//                 .catch((createUserError) => {
//                     console.error(createUserError);

//                     // Handle specific error cases
//                     if (createUserError.message === "Firebase: Error (auth/email-already-in-use).") {
//                         Swal.fire("Oops!", "User already exists.", "error");
//                     } else {
//                         setError(createUserError.message);
//                     }
//                 });
//         }
//     };

//     // Password validation function
//     const validatePassword = (password) => {
//         if (password.length < 6) {
//             return "Password must be at least 6 characters.";
//         }

//         // Add more password validation checks here
//         // ...

//         return true; // Password is valid
//     };

//     // Render the registration form
//     return (
//         <div>
//             <div>
//                 {/* Display error message if any */}
//                 <p className="text-center text-purple-500">{error}</p>

//                 {/* Registration form */}
//                 <div className="w-full lg:w-1/2 my-10 mx-auto py-11 px-12 text-white font-bold bg-gradient-to-r from-purple-500 to-amber-500">
//                     <h2 className="text-2xl text-center mb-4">Register</h2>
//                     <p className="mb-4 text-lg text-center">Create your account.</p>

//                     <form onSubmit={handleRegister} className="text-black">
//                         {/* Name input */}
//                         <div className="mt-5">
//                             <label className="label">
//                                 <span className="label-text text-black">Name</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Name"
//                                 required
//                                 className="input text-black rounded w-full"
//                             />
//                         </div>

//                         {/* Image URL input */}
//                         <div className="mt-5">
//                             <label className="label">
//                                 <span className="label-text text-black">Image URL</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 name="url"
//                                 placeholder="Image URL"
//                                 required
//                                 className="input text-black rounded w-full"
//                             />
//                         </div>

//                         {/* Email input */}
//                         <div className="mt-5">
//                             <label className="label">
//                                 <span className="label-text text-black">Email</span>
//                             </label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="Email"
//                                 required
//                                 className="input text-black rounded w-full"
//                             />
//                         </div>

//                         {/* Password input */}
//                         <div className="mt-5">
//                             <label className="label">
//                                 <span className="label-text text-black">Password</span>
//                             </label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 placeholder="Password"
//                                 required
//                                 className="input text-black rounded w-full"
//                             />
//                         </div>

//                         {/* Confirm Password input */}
//                         <div className="mt-5">
//                             <input
//                                 type="password"
//                                 name="confirmPassword"
//                                 placeholder="Confirm Password"
//                                 required
//                                 className="input text-black rounded w-full"
//                             />
//                         </div>

//                         {/* Registration button */}
//                         <div className="mt-5">
//                             <button className="w-full bg-gradient-to-r from-amber-500 to-purple-500 py-3 text-center rounded text-white">
//                                 Register Now
//                             </button>
//                             <p className="text-center mt-3">
//                                 Already Have an Account?{" "}
//                                 <Link to="/login">
//                                     <span className="btn-link font-medium text-white">Login</span>
//                                 </Link>
//                             </p>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;

