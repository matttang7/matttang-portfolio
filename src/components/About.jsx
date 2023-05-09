import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "July 2023 - March 2023",
    cardTitle: "Amazon",
    cardSubtitle:
      "Software Developer Engineer",
    cardDetailedText: [ 
      "Full stack development on warehouse management system used by Amazon Fresh worldwide using Java/Javascript/Ruby/MySQL to add and fix features to improve associate efficiency. ",
      "Designed and implemented required security migration of service called thousands of times every five minutes to AWS using CDK, Java Lambda, VPCs, and Route 53. ",
      "Identified areas of improvement in the warehouse process to save time by collaborating with business and other teams to deliver desired business metrics onto dashboards. "
    ]
  },
  {
    title: "January 2021 - January 2022",
    cardTitle: "Software Engineer Intern at COUNTRY Financial",
    cardDetailedText: [ 
      "Developed AI communications system to identify customers automatically to save time for associates using Azure, Java, APIs, and PostgreSQL to transcribe, store, and verify info.",
      "Developed backend REST API for a farm inventory tool, which helps farmers easily track their inventory for insurance purposes using Java, Spring, PostgreSQL, and connected it with the Angular frontend.",
      "Automated Robot Framework tests on AWS Device Farm mobile devices for time-saving. Used Python and modified YAML configurations to run existing tests on mobile."
    ]
  },
  {
    title: "June 2019 - August 2019",
    cardTitle: "National Science Foundation Research Experience for Undergraduates",
    cardDetailedText: [ 
      "Tested variations of BERT, an NLP model, to traditional models, by classifying and annotating questions, then analyzing their precision, recall, and F1 score.",
      "Paper published to IEEE BIBM 2020 https://www.computer.org/csdl/proceedings-article/bibm/2020/09313379/1qmfXHIvJDO "
    ]
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
            <p className='text-center text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
              About
            </p>
          <div className="text-center text-2xl">
              <p>
                Hi, welcome to my website, which contains both my work experiences as well as personal projects. 
              </p>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div style={{ width: "900px", height: "400px", zIndex: 0, position: "relative"}} >
              <Chrono items={items} mode="VERTICAL" 
                theme={{
                  primary: 'gray',
                  secondary: '#0a192f',
                  cardBgColor: 'white',
                  titleColor: 'white',
                  titleColorActive: 'white',
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;