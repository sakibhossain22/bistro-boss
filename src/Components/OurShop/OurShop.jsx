import Navbar from "../Shared/Navbar/Navbar";
import SharedCover from "../Shared/SharedCover/SharedCover";
import img from '../../assets/shop/banner2.jpg'
import useMenu from "../Shared/useMenu/useMenu";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
const OurShop = () => {
    const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [menu] = useMenu()
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const {pathname} = useLocation()
    console.log(pathname);
    const navigate = useNavigate()
    const dessert = menu.filter(menu => menu.category === 'dessert')
    const pizza = menu.filter(menu => menu.category === 'pizza')
    const salad = menu.filter(menu => menu.category === 'salad')
    const soup = menu.filter(menu => menu.category === 'soup')
    const drinks = menu.filter(menu => menu.category === 'drinks')
    const { user } = useContext(AuthContext)
    const handleOrder = (food) => {
        if (user) {
            const category = food.category
            const image = food.image
            const name = food.name
            const price = food.price
            const recipe = food.recipe
            const emaiL = user?.email
            const info = { category, image, name, price, recipe, emaiL }
            console.log(info)
        }
        else {
            navigate('/login', {state : pathname})
        }

    }
    return (
        <div>
            <Navbar></Navbar>
            <SharedCover img={img} header='OUR SHOP' subHeader='Would you like to try a dish?'></SharedCover>
            <div>
                <div className="flex items-center justify-center">
                    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <div className="flex items-center justify-center my-4">
                            <TabList>
                                <Tab>SALAD</Tab>
                                <Tab>PIZZA</Tab>
                                <Tab>SOUPS</Tab>
                                <Tab>DESSERTS</Tab>
                                <Tab>DRINKS</Tab>
                            </TabList>
                        </div>
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-10">
                                {
                                    salad.map(item => (
                                        <div key={item._id}>
                                            <div className="bg-base-200 shadow-xl">
                                                <figure>
                                                    <img src={item.image} alt="Shoes" className="rounded w-full" />
                                                </figure>
                                                <div className="card-body items-center text-center">
                                                    <h2 className="card-title">{item.name}</h2>
                                                    <p>{item.recipe}</p>
                                                    <div className="card-actions">
                                                        <button onClick={() => handleOrder(item)} className="btn px-6 bg-gray-200 border-4 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition border-b-yellow-600 hover:border-b-yellow-600 hover:border-4">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-10">
                                {
                                    pizza.map(item => (
                                        <div key={item._id}>
                                            <div className="bg-base-200 shadow-xl">
                                                <figure>
                                                    <img src={item.image} alt="Shoes" className="rounded w-full" />
                                                </figure>
                                                <div className="card-body items-center text-center">
                                                    <h2 className="card-title">{item.name}</h2>
                                                    <p>{item.recipe}</p>
                                                    <div className="card-actions">
                                                        <button onClick={() => handleOrder(item)} className="btn px-6 bg-gray-200 border-4 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition border-b-yellow-600 hover:border-b-yellow-600 hover:border-4">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-10">
                                {
                                    soup.map(item => (
                                        <div key={item._id}>
                                            <div className="bg-base-200 shadow-xl">
                                                <figure>
                                                    <img src={item.image} alt="Shoes" className="rounded w-full" />
                                                </figure>
                                                <div className="card-body items-center text-center">
                                                    <h2 className="card-title">{item.name}</h2>
                                                    <p>{item.recipe}</p>
                                                    <div className="card-actions">
                                                        <button onClick={() => handleOrder(item)} className="btn px-6 bg-gray-200 border-4 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition border-b-yellow-600 hover:border-b-yellow-600 hover:border-4">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-10">
                                {
                                    dessert.map(item => (
                                        <div key={item._id}>
                                            <div className="bg-base-200 shadow-xl">
                                                <figure>
                                                    <img src={item.image} alt="Shoes" className="rounded w-full" />
                                                </figure>
                                                <div className="card-body items-center text-center">
                                                    <h2 className="card-title">{item.name}</h2>
                                                    <p>{item.recipe}</p>
                                                    <div className="card-actions">
                                                        <button onClick={() => handleOrder(item)} className="btn px-6 bg-gray-200 border-4 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition border-b-yellow-600 hover:border-b-yellow-600 hover:border-4">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-3 gap-10">
                                {
                                    drinks.map(item => (
                                        <div key={item._id}>
                                            <div className="bg-base-200 shadow-xl">
                                                <figure>
                                                    <img src={item.image} alt="Shoes" className="rounded w-full" />
                                                </figure>
                                                <div className="card-body items-center text-center">
                                                    <h2 className="card-title">{item.name}</h2>
                                                    <p>{item.recipe}</p>
                                                    <div className="card-actions">
                                                        <button onClick={() => handleOrder(item)} className="btn px-6 bg-gray-200 border-4 rounded-lg hover:bg-gray-800 hover:text-yellow-400 transition border-b-yellow-600 hover:border-b-yellow-600 hover:border-4">Buy Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default OurShop;