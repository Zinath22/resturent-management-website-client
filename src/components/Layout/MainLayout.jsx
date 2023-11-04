import { Outlet } from "react-router-dom";
import NavBar from "../Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;