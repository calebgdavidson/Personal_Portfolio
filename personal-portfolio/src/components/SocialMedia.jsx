import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
return (
<div className="lg:flex flex-col hidden top-[33%] left-0 fixed">
    <ul>
        <li className="justify-between items-center flex h-15 w-38 p-4">
        <a href="https://www.linkedin.com/in/calebgdavidson/"
        className="justify-between items-center w-full text-white flex">
        <><FaLinkedin size={35}/></> </a>
        </li>
        <li className="justify-between items-center flex h-15 w-38 p-4">
        <a href="https://github.com/calebgdavidson"
        className="justify-between items-center w-full text-white flex">
        <><FaGithub size={35}/></> </a>
        </li>
    </ul>
</div>
  )
}

export default SocialMedia;