import { FaCalendar, FaHome, FaPaypal, FaShoppingCart, FaStar } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-12 gap-5 h-screen">
                <div className="col-span-3 bg-[#D1A054]">
                    <div className="mx-10">
                        <div className="w-full text-center font-bold my-5">
                            <h1 className="text-3xl">BISTRO BOSS</h1>
                            <p className="text-xl">Restaurant</p>
                        </div>
                        <div className="space-y-4">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white" : ""
                            } to='/dashboard/user-home'>
                                <div className='flex items-center gap-3'>
                                    <FaHome className="text-2xl"></FaHome>
                                    <span className="text-xl">User Home</span>
                                </div>
                            </NavLink>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white" : ""
                            } to='/dashboard/reservation' >
                                <div className='flex items-center gap-3'>
                                    <FaCalendar className="text-2xl"></FaCalendar>
                                    <span className="text-xl">Reservation</span>
                                </div>
                            </NavLink>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white" : ""
                            } to='/dashboard/payment-history'>
                                <div className='flex items-center gap-3'>
                                    <FaPaypal className="text-2xl"></FaPaypal>
                                    <span className="text-xl">Payment History</span>
                                </div>
                            </NavLink>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white" : ""
                            } to='/dashboard/add-review' >
                                <div className='flex items-center gap-3'>
                                    <FaStar className="text-2xl"></FaStar>
                                    <span className="text-xl">Add Review</span>
                                </div>
                            </NavLink>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white" : ""
                            } to='/dashboard/my-cart' >
                                <div className='flex items-center gap-3'>
                                    <FaShoppingCart className="text-2xl"></FaShoppingCart>
                                    <span className="text-xl">My Cart</span>
                                </div>
                            </NavLink>
                            <div className="divider"></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-9 bg-[#f6f6f6]">
                    <div className="my-5">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;