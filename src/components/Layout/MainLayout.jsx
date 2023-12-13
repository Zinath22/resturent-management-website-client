import { Outlet } from "react-router-dom";
import NavBar from "../Header/Navbar/Navbar";
import Footer from "../Pages/Home/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto overflow-x-hidden ">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;