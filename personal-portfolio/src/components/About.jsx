import React from 'react';

const About = () => {
return (
<div name="about" className="w-full h-full text-white h-screen bg-black">
    <div className="max-w-screen-lg mx-auto flex flex-col p-3.5 justify-center w-full h-full">
        <div className="pb-9">
            <h5 className="inline text-6xl border-b-4 border-gray-500 text-5xl font-bold">About Me</h5>
        </div>
        <p className="text-3xl my-5">
        I've been working as a web developer for 3 years. I've worked on projects for Michael Kors, Accenture and
        the Tennessee Department of Education. In 2022 I attended the University of Texas at Austin Full-Stack Web Development
        bootcamp to sharpen and widen my skills as a developer. I currently work at Accenture as an App Developer / Business Analyst
        and love to work on various coding projects in my freetime.
        </p>
    </div>
</div>
  )
}

export default About;