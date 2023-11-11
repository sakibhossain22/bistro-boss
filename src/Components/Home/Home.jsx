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
           <ChefServIce heading='Bistro Boss' subHeading='Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'></ChefServIce>
           <Menu></Menu>
           <Contact></Contact>
           <FeaturedMenu></FeaturedMenu>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;