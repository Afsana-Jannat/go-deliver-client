import { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    console.log(user)

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('sign out successfully')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/coverage">Coverage</NavLink></li>
        <li><NavLink>About Us</NavLink></li>
        <li><NavLink>Services</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
    </>
    return (
        <div className="navbar text-white bg-[#103963] shadow-sm">
            <div className="navbar-start">
                <div className="dropdown text-black">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <div className='flex'>
                    <img className='w-[60px] h-[60px]' src="https://cdn-icons-png.flaticon.com/512/10053/10053703.png" alt="" />
                    <a className="text-3xl font-extrabold mt-3">GoDeliver</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? (
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                    ) : (
                        <Link to="/login" className="btn">Login</Link>
                    )
                }

            </div>
        </div>
    );
};

export default Navbar;