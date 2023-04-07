import React from 'react';
import Boat from '../assets/boat.jpg';

const Homepage = () => {
return (
  // md:flex-flow makes the image align as a column when the screen size is smaller
<div name="home" className="text-white w-full bg-black pt-16">
    <div className="max-w-screen-lg mx-auto flex flex-col items center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-6xl sm:text-7xl font-bold px-4">
              I'm a front-end developer
            </h2>
            <p className="text-gray-300 text-3xl py-4 max-w-md">
            An Initiative-taking and team-oriented Navy veteran with years of experience in dynamic environments with
            a passion for learning and technology and the drive to complete any task given.
            </p>
          </div>
              <div>
                <img src={Boat} alt="Caleb"
                className="rounded-full mx-auto w-2/3 md:w-full"/>
              </div>
    </div>
</div>
  )
}

export default Homepage;