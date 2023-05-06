import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const data = [
  {
    label: "HTML",
    value: "html",
    desc: `It really matters and then like it really doesn't matter.
    What matters is the people who are sparked by it. And the people
    who are like offended by it, it doesn't matter.`,
  },
  {
    label: "React",
    value: "react",
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Vue",
    value: "vue",
    desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
  },
  {
    label: "Angular",
    value: "angular",
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Svelte",
    value: "svelte",
    desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
  },
];

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-2xl font-bold">
              <p>
                Hi. I'm Matthew Tang, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
            <Tabs>
              <TabList>
                <Tab>
                  <p>Amazon</p>
                </Tab>
                <Tab>
                  <p>Country Financial</p>
                </Tab>
                <Tab>
                  <p>National Science Foundation</p>
                </Tab>
              </TabList>

              <TabPanel>
                <div className="panel-content">
                  <h2>Any content 1</h2>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="panel-content">
                  <h2>Any content 2</h2>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="panel-content">
                  <h2>Any content 3</h2>
                </div>
              </TabPanel>
              
            </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;