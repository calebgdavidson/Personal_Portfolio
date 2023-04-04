import React from 'react';
import Boat from '../assets/boat.jpg';

const Homepage = () => {
return (
  // md:flex-flow makes the image align as a column when the screen size is smaller
  // bg-gradient'top to bottom'
<div name="home" className="text-white h-screen w-full bg-gradient-to-b from-black to-gray-800">
    <div className="max-w-screen-lg mx-auto flex flex-col items center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold">
              I'm a front-end developer
            </h2>
            <p className="text-gray-400 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus modi deleniti,
            corporis odit natus rerum consequatur consequuntur exercitationem accusamus culpa
            suscipit ex ut cumque eius, saepe earum, quo doloribus.
            </p>
          </div>
              <div>
                <img src={Boat} alt="caleb"
                className="rounded-2xl mx-auto w-2/3 md:w-full"/>
              </div>
    </div>
</div>
  )
}

export default Homepage;