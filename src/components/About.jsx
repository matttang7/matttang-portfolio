import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="px-16 py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
            <p className='text-center text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
              About
            </p>
          <div className="text-left text-2xl">
            <p className="py-4 max-w-md" class="p1">
              Welcome to my website! I'm a software engineer who loves building new and useful applications.
              I graduated with a Bachelor's in Statistics and Computer Science and a Master's in Computer Science from the University of Illinois at Urbana Champaign. 
              During that time, I was fortunate to have a research experience in Natural Language Processing and an internship at COUNTRY Financial. 
              Recently, I've gained a lot of experience working at Amazon. 
              Check out some of my experiences and projects on this website.
            </p>
            <br></br>
            <p className="py-4 max-w-md" class="p1">
              Here are some of the languages and technologies I'm familiar with:
            </p>
            <ul className="about-tech-list">
              <li class = "list">Java</li>
              <li class = "list">Python</li>
              <li class = "list">Javascript</li>
              <li class = "list">AWS</li>
              <li class = "list">SQL</li>
              <li class = "list">React</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;