import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbarBg">
            <div className="navbar container md:w-[90%] mx-auto shadow-sm">
                <div className="flex-1">
                    <a className="font-bold text-2xl">Coffee House</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal text-xl px-1 space-x-5">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/add-coffee'>Add Coffee</NavLink>
                        <NavLink to='/sign-in'>Sign In</NavLink>
                        <NavLink to='/sign-up'>Sign Up</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;