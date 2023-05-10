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
      cardTitle: "COUNTRY Financial",
      cardSubtitle:
        "Software Engineer Intern",
      cardDetailedText: [ 
        "Developed AI communications system to identify customers automatically to save time for associates using Azure, Java, APIs, and PostgreSQL to transcribe, store, and verify info.",
        "Developed backend REST API for a farm inventory tool, which helps farmers easily track their inventory for insurance purposes using Java, Spring, PostgreSQL, and connected it with the Angular frontend.",
        "Automated Robot Framework tests on AWS Device Farm mobile devices for time-saving. Used Python and modified YAML configurations to run existing tests on mobile."
      ]
    },
    {
      title: "June 2019 - August 2019",
      cardTitle: "National Science Foundation",
      cardSubtitle:
        "Research Experience for Undergraduates",
      cardDetailedText: [ 
        "Tested variations of BERT, an NLP model, to traditional models, by classifying and annotating questions, then analyzing their precision, recall, and F1 score.",
        "Paper published to IEEE BIBM 2020"
      ]
    },
  ];

const Experience = () => { 
    return (
      <div
        name="experience"
        id="experience"
        className="w-full h-screen bg-[#0a192f] text-gray-300"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">\
            <p className='text-center text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
            Experience
            </p>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div style={{ width: "900px", height: "400px", zIndex: 0, position: "relative"}} >
                <Chrono items={items} mode="VERTICAL" 
                  theme={{
                    primary: '#06b6d4',
                    secondary: '#155e75',
                    cardBgColor: 'white',
                    titleColor: 'white',
                    titleColorActive: 'white',
                  }} 
                />
              </div>
            </div>
        </div>
      </div>
    );
  };
  export default Experience;