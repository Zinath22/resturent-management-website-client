import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Review from "./Review/Review";
import TopFood from "./TopFood/TopFood";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TopFood></TopFood>
           <Review></Review>
           <Contact></Contact>
        </div>
    );
};

export default Home;