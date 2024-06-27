"use client";
import {FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs} from "react-icons/fa";
import { SiMongodb,SiMysql,SiTailwindcss,SiNextdotjs } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const about={
    title:'About Me',
    description:'I am a passionate software developer with a keen interest in crafting elegant digital solutions. I specialize in various programming languages and technologies.',
    info:[
      {
        fieldName:'Name',
        fieldValue:'Chirag Singhal',
      },
      {
        fieldName:'Phone',
        fieldValue:'+91 9818907290',
      },
      {
        fieldName:'Experience',
        fieldValue:'2+ Years',
      },
      {
        fieldName:'Nationality',
        fieldValue:'Indian',
      },
      {
        fieldName:'Freelance',
        fieldValue:'Available',
      },
      {
        fieldName:'Email',
        fieldValue:'chiragsinghal04@gmail.com',
      },
      {
        fieldName:'Languages',
        fieldValue:'English,Hindi',
      },
    ]
};

const experience={
   icon:'',
   title:'My Experience',
   description:'I have gained valuable experience working with various organizations and projects. Here are some highlights of my professional journey:',
   items:[
    {
      company:'Devcomm',
      position:'President',
      duration:'2024-present',
    },
    {
      company:'GSSOC',
      position:'Contributor',
      duration:'Summer 2024',
    },
    {
      company:'Fresources',
      position:'Team-leader',
      duration:'2023-204',
    },
    {
      company:'Devcomm',
      position:'Front-end Web Developer',
      duration:'2023-2024',
    },
    {
      company:'Studio-10',
      position:'Full Stack Developer',
      duration:'2024-present',
    },
    {
      company:'E-Commerce startup  ',
      position:'Freelance Web Developer',
      duration:'2023-2024',
    },

   ],
};

const education={
  icon:'',
  title:'My Education',
  description:'I have pursued education in computer science and technology, fostering a strong foundation in problem-solving and innovation.',
  items:[
    {
      institution:'NSUT',
      degree:'B-TECH (CSE)',
      duration:'2022-2026',
    },
    {
      institution:'Ahlcon International',
      degree:'Primary and Secondary Schooling',
      duration:'2007-2022',
    },

  ]
};
const skills={
   title:'My Skills',
   description:'I am proficient in a wide range of technologies and frameworks that empower me to deliver robust and scalable solutions. Some of my key skills include:',
   skillsList:[
    {
      icon:<FaHtml5/>,
      name:"HTML",
    },
    {
      icon:<FaCss3/>,
      name:"CSS",
    },
    {
      icon:<FaJs/>,
      name:"JavaScript",
    },
    {
      icon:<FaReact/>,
      name:"ReactJS",
    },
    {
      icon:<SiTailwindcss/>,
      name:"TailwindCSS",
    },
    {
      icon:<FaNodeJs/>,
      name:"NodeJS",
    },
    {
      icon:<SiMongodb/>,
      name:"MongoDB",
    },
    {
      icon:<SiMysql/>,
      name:"MySQL",
    },
    {
      icon:<SiNextdotjs/>,
      name:"NextJS",
    },
    {
      icon:<TbBrandCpp/>,
      name:"C++",
    },
   ]
};

import { Tabs, TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";



const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{
      opacity:1, 
      transition:{delay:'2.4', duration:'0.4',ease:"easeIn"}
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6" >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">

            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item,index)=>{
                      return <li key={index} className="bg-[#232329] 
                      h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] 
                        text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
                gap-4 xl:gap-[30px]">
                  {skills.skillsList.map((skill,index)=>{
                    return <li key={index}>
                      <TooltipProvider delayDuration={100} >
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item,index)=>{
                      return <li key={index} className="bg-[#232329] 
                      h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] 
                        text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 
                  max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index)=>{
                      return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    })}
                  </ul>
              </div>
            </TabsContent>

            </div>
        </Tabs>
      </div>
      
    </motion.div>
  )
}

export default Resume
