import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex gap-4 text-xl md:text-3xl text-bold text-white bg-yellow-950 py-4 px-2'>
                <li className='list-none'>
                    <Link to="/">Home</Link>
                </li>
                <li className='list-none'>
                    <Link to="/about">About</Link>
                </li>
                <li className='list-none'>
                    <Link to="/services">Services</Link>
                </li>
                <li className='list-none'>
                    <Link to="/contact">Contact</Link>
                </li>
                <li className='list-none'>
                    <input className='text-black text-xl px-2' type="text" placeholder='Search' />
                </li>
                
            </nav>
        </div>
    );
};

export default Header;