import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>

        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
        <li className='font-semibold'><Link to='/services'>Add Service</Link></li>



        {
            user?.email ?

                <>
                    <li className='font-semibold'><Link to='/myreviews'>My Review</Link></li>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }

        <li>
            <button
                onClick={() => logOut()}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Log Out"
                title="Log Out"
            >
                LogOut
            </button>
        </li>

    </>

    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div className="flex-1">

                <Link to='/'><img className="w-24 h-24 rounded-2xl" src='http://cdn.shopify.com/s/files/1/1876/7853/products/MY904B_1024x1024.jpg?v=1662787132' alt=''></img></Link>
                <h1 className='text-5xl text-orange-400 font-bold'>SportsView</h1>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;