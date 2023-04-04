import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {
    // setting state
    const [nav, setNav] = useState(false)
    // array of links
    const links = [
        {id: 1,
        link: 'home'},
        {id: 2,
        link: 'about'},
        {id: 3,
        link: 'experience'},
        {id: 4,
        link: 'contact'}
        ]

return (
<div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
    <div>
        <h1 className='text-3xl font-raleway ml-3'>caleb</h1>
    </div>
    {/* "hidden md:flex" hides the nav list unless the screen is larger than 768px */}
    <ul className="hidden md:flex">
        {/* this displays the array of links */}
        {links.map(({ id, link }) => (
            <li
            key={id}
            className="font-medium px-4 cursor-pointer text-gray-400 hover:scale-100">
            {link}
            </li>
        ))}
    </ul>

    {/* changes state of nav menu hamburger onCLick. 'md:hidden' hides this menu unless the display is smaller than 768px */}
    <div onclick={() => setNav(!nav)}
    className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
    {/* checks nav size. if nav matches it will display the hamburger nav menu*/}
    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>
    {/* if nav is true display the code on screen */}
    {nav && (
    <ul className="flex flex-col justify center items-center absolute top-0 w-full h-screen bg-gradient-to-b
    from-black to-gray-700 text-gray-400">
        {links.map(({ id, link }) => (
            <li
            key={id}
            className="px-4 cursor-pointer capitalize py-6 text-4xl">
            {link}
            </li>
        ))}
    </ul>
    )}
</div>
  );
};

export default NavBar;