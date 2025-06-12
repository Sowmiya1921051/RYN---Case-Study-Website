import React, { useState } from 'react';

const Navbar = () => {
    const [active, setActive] = useState('Home');

    const menuItems = ['Home', 'About', 'Services', 'Contact'];

    return (
        <nav className="bg-black text-white py-4">
            <div className="container mx-auto px-8 flex justify-between items-center">
                {/* Left - Logo */}
                <div className="text-xl font-bold mr-8">MyLogo</div>

                {/* Center - Menu */}
                <ul className="flex-1 flex justify-center space-x-6 text-lg">
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            onClick={() => setActive(item)}
                            className={`cursor-pointer px-4 py-2 rounded-4xl transition 
                ${active === item
                                    ? 'bg-white text-black'
                                    : 'hover:bg-white hover:text-black'}`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Right - Button */}
                <div className="ml-8">
                    <button className="border border-white text-white px-4 py-2 rounded-4xl font-semibold hover:bg-white hover:text-black transition">
                        Hire Me
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
