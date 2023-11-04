
// import Logo from "../../Logo/Logo";

import { NavLink } from "react-router-dom";



const NavBar = () => {
    return (
        <div className="bg-base-100 rounded-lg shadow-lg my-10 mx-10 px-5">
            <nav className="flex md:flex-row  flex-col  justify-between items-center py-7">
               {/* <Logo></Logo> */}
               <h2 className="text-green-600">Resturent Management Website</h2>
                <ul className="flex gap-5">
                    <li>
                        
<NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-600  underline" : ""
  }
>
Home
</NavLink>
                    </li>
                    <li>
                        
<NavLink
  to="/allFood"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-600  underline" : ""
  }
>
All Food Items
</NavLink>
                    </li>
                    <li>
                        
<NavLink
  to="/blog"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-600  underline" : ""
  }
>
Blog
</NavLink>
                    </li>

                    <li>
                        
<NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-green-600  underline" : ""
  }
>
Login
</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;