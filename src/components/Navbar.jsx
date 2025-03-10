import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user } = useContext(AuthContext)
    const logout = () => {
        signOut(auth)
            .then(() => {
                Swal.fire({
                    title: 'Successfully!',
                    text: 'Sign - out successful',
                    icon: 'success',
                    confirmButtonText: 'Thanks'
                });
            })
    }
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
                        {
                            user && user?.email ? <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user && user?.email ? <img className='w-10 rounded-full' src={user.photoURL} alt="Profile" /> : <img
                                                alt="Profile"
                                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        }
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu dropdown-content navbarBg rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li onClick={logout}><a>Logout</a></li>
                                </ul>
                            </div> : <NavLink to='/sign-in'>Sign In</NavLink>
                        }

                    </ul>


                    {/* <img src={user?.photoURL} alt="Profile" /> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;