import Banner from "./Banner/Banner";
import ChefServIce from "./ChefService/ChefServIce";
import Contact from "./Contact/Contact";
import FeaturedMenu from "./FeaturedMenu/FeaturedMenu";
import Menu from "./Menu/Menu";
import Slider from "./Slider/Slider";
import Testimonial from "./TestImonial/Testimonial.Jsx";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Slider></Slider>
           <ChefServIce></ChefServIce>
           <Menu></Menu>
           <Contact></Contact>
           <FeaturedMenu></FeaturedMenu>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;