import Banner from "./Banner/Banner";
import ChefServIce from "./ChefService/ChefServIce";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Slider></Slider>
           <ChefServIce></ChefServIce>
        </div>
    );
};

export default Home;