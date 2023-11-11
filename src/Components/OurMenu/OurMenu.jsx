import MenuItem from "../Home/Menu/MenuItem";
import Navbar from "../Shared/Navbar/Navbar";
import SectionTitle from "../Shared/SectionTiitle/SectionTitle";
import SharedCover from "../Shared/SharedCover/SharedCover";
import ChefSharedMenu from "../Shared/chefSharedMenu/chefSharedMenu";
import useMenu from "../Shared/useMenu/useMenu";
import img from '../../assets/menu/banner3.jpg'
import dessertBG from '../../assets/menu/dessert-bg.jpeg'
import pizzaBG from '../../assets/menu/pizza-bg.jpg'
import saladBG from '../../assets/menu/salad-bg.jpg'
import soupBG from '../../assets/menu/soup-bg.jpg'
import { Link } from "react-router-dom";
const OurMenu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(menu => menu.category === 'offered')
    const dessert = menu.filter(menu => menu.category === 'dessert')
    const pizza = menu.filter(menu => menu.category === 'pizza')
    const salad = menu.filter(menu => menu.category === 'salad')
    const soup = menu.filter(menu => menu.category === 'soup')
    const drinks = menu.filter(menu => menu.category === 'drinks')
    console.log(dessert);

    return (
        <div>
            <Navbar></Navbar>
            <SharedCover img={img} header='OUR MENU' subHeader='Would you like to try a dish?'></SharedCover>
            <SectionTitle heading='---Dont miss' subHeading='TODAYS OFFER'></SectionTitle>
            {/* Offered */}
            <div className="mx-6 my-10">
                <div>
                    <div className="grid grid-cols-2 gap-10">
                        {
                            offered?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </div>
                </div>
                {/* Dessert */}
                <div>
                    <ChefSharedMenu img={dessertBG} heading='DESSERTS' subHeading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></ChefSharedMenu>
                    <div className="grid grid-cols-2 gap-10">
                        {
                            dessert?.map(item => (
                                <div key={item._id}>
                                    <MenuItem item={item}></MenuItem>
                                </div>
                            ))
                            
                        }
                        <Link className="btn px-6 bg-gray-200 border-4 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition border-b-yellow-600 w-48 hover:border-b-yellow-600 hover:border-4" to={`/our-shop/desserts`}><button>Order Now</button></Link>
                    </div>
                </div>
                {/* Pizza */}
                <div>
                    <ChefSharedMenu img={pizzaBG} heading='PIZZA' subHeading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></ChefSharedMenu>
                    <div className="grid grid-cols-2 gap-10">
                        {
                            pizza?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                         <Link className="btn px-6 bg-gray-200 border-4 rounded-lg hover:bg-gray-800 hover:text-yellow-400 w-48 transition border-b-yellow-600 hover:border-b-yellow-600 hover:border-4" to={`/our-shop/pizza`}><button>Order Now</button></Link>
                    </div>
                </div>
                {/* Salad */}
                <div>
                    <ChefSharedMenu img={saladBG} heading='SALAD' subHeading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></ChefSharedMenu>
                    <div className="grid grid-cols-2 gap-10">
                        {
                            salad?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                        <Link className="btn w-48 px-6 bg-gray-200 border-4 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition border-b-yellow-600 hover:border-b-yellow-600 hover:border-4" to={`/our-shop/salad`}><button>Order Now</button></Link>
                    </div>
                </div>
                {/* Salad */}
                <div>
                    <ChefSharedMenu img={soupBG} heading='SOUP' subHeading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></ChefSharedMenu>
                    <div className="grid grid-cols-2 gap-10">
                        {
                            soup?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                        <Link className="btn px-6 w-48 bg-gray-200 border-4 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition border-b-yellow-600 hover:border-b-yellow-600 hover:border-4" to={`/our-shop/soup`}><button>Order Now</button></Link>
                    </div>
                </div>
                {/* drink */}
                <div>
                    <ChefSharedMenu img={soupBG} heading='Drinks' subHeading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></ChefSharedMenu>
                    <div className="grid grid-cols-2 gap-10">
                        {
                            drinks?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                        <Link className="btn px-6 w-48 bg-gray-200 border-4 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition border-b-yellow-600 hover:border-b-yellow-600 hover:border-4" to={`/our-shop/drinks`}><button>Order Now</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OurMenu;