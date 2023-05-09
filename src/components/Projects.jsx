import React from 'react';
import smaps from '../assets/smaps.jpg';
import nsf from '../assets/nsf.png';
import db from '../assets/database.png';
import mm from '../assets/mm26.jpg';
import ext from '../assets/extension.PNG';
import moodsic from '../assets/moodsic.PNG';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Projects
          </p>
          <p className='py-6 text-2xl'>Hover over to check out a few of my projects</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${nsf})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-md font-bold text-white tracking-wider text-center'>
                Published Research Project in NLP
              </span>
              <p className='text-center'>Tested variations of a new NLP model, to traditional models, by classifying and annotating questions, then analyzing their precision, recall, and F1 score</p>
              <div className='pt-0 text-center'>
                <a href='https://www.computer.org/csdl/proceedings-article/bibm/2020/09313379/1qmfXHIvJDO'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Link
                  </button>
                </a>
                <ul className="project-tech-list">
                  <li>Python</li>
                  <li>NLP</li>
                  <li>Tensorflow</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${mm})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                MechMania 26
              </span>
              <p className='text-center'>Mech Mania is a student-run AI hackathon run as a part of UIUC's annual tech conference where participants submit scripts to our game. I was part of the Infrastructure team</p>
              <div className='pt-0 text-center'>
                <a href='https://github.com/jackducham/mm26-design/wiki'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Link
                  </button>
                </a>
              </div>

              <ul className="project-tech-list">
                  <li>Javascript</li>
                  <li>AWS</li>
                  <li>Docker</li>
                </ul>

            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${smaps})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider text-center'>
                Prize Winning Android Application
              </span>
              <p className='text-center'>Gets directions without needing wifi using SMS messages</p>
              <div className='pt-0 text-center'>
                <a href='https://devpost.com/software/smaps'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/mast0rbill/SMapS'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <ul className="project-tech-list">
                  <li>Java</li>
                  <li>Javascript</li>
                  <li>APIs</li>
                </ul>

                <ul className="project-tech-list">
                  <li>Android Studio</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div
            style={{ backgroundImage: `url(${db})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Green Card H1b Job Database
              </span>
              <p className='text-center'>Web application to help visa holders find and negotiate jobs</p>
              <div className='pt-0 text-center'>
                <a href='https://github.com/matttang7/greencardh1bdb'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <ul className="project-tech-list">
                  <li>Javascript</li>
                  <li>Python</li>
                  <li>React</li>
                </ul>
                <ul className="project-tech-list">
                  <li>MySQL</li>
                  <li>Flask</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${ext})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Coursera Search Extension
              </span>
              <p className='text-center'>A chrome extension that improves on Coursera's basic exact word search using text retrieval algorithms</p>
              <div className='pt-0 text-center'>
                <a href='https://youtu.be/9LsBYPtbf1s'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/matttang7/CourseProject'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>

              <ul className="project-tech-list">
                  <li>Javascript</li>
                  <li>Python</li>
                  <li>Flask</li>
                </ul>

            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${moodsic})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider text-center'>
                Prize Winning Android Application
              </span>
              <p className='text-center'>Take picture of yourself and the app plays music based on your mood</p>
              <div className='pt-0 text-center'>
                <a href='https://devpost.com/software/moodsic-fmsh5i'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/matttang7/moodsic'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>

              <ul className="project-tech-list">
                  <li>Java</li>
                  <li>Azure</li>
                  <li>Android Studio</li>
                </ul>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Projects;