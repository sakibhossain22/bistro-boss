import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)
    const handleLogOut = () => {
        logOutUser()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    const navLink = <>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink><li>Contact</li></NavLink>
        <NavLink><li>Dashboard</li></NavLink>
        <NavLink to='/our-menu'><li>Our Menu</li></NavLink>
        <NavLink to='/our-shop/salad'><li>Our Shop</li></NavLink>
        <NavLink to='/register'><li>Register</li></NavLink>
        {
            user ? <button onClick={handleLogOut}>Log Out</button> : <NavLink to='/login'><li>Login</li></NavLink>
        }
    </>
    return (
        <div className="navbar bg-base-100 fixed bg-opacity-40 max-w-7xl mx-auto z-10 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl uppercase">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-5">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;