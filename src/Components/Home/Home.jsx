import Banner from "./Banner/Banner";
import ChefServIce from "./ChefService/ChefServIce";
import Menu from "./Menu/Menu";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Slider></Slider>
           <ChefServIce></ChefServIce>
           <Menu></Menu>
        </div>
    );
};

export default Home;