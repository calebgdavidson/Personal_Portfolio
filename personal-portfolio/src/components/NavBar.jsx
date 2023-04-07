import React, {useState} from 'react';
import { Link } from "react-scroll";
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
        link: 'technologies'},
        ]

return (
<div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
    <div>
        <h1 className='text-6xl font-raleway ml-3 hidden lg:block'>Caleb</h1>
    </div>
    {/* "hidden md:flex" hides the nav list unless the screen is larger than 768px */}
    <ul className="hidden md:flex">
        {/* this displays the array of links */}
        {links.map(({ id, link }) => (
            <li key={id} className="font-medium text-4xl px-4 cursor-pointer text-gray-300 hover:scale-100">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
            </li>
        ))}
    </ul>

<div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;