"use client";
import { motion } from "framer-motion";
import React,{ useState } from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsGithub,BsArrowUpRight} from "react-icons/bs";
import { Tooltip,TooltipContent,TooltipTrigger,TooltipProvider } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects=[
  {
    num:"01",
    category:'Full Stack',
    title:'easily-Job Portal',
    description:'Job Portal allowing users to browse job listings, submit job applications, and manage job postings.',
    stack:[{name:'NodeJs'},{name:'Express'},{name:'EJS-Views'}],
    image:'/assets/projects/easily.png',
    live:'https://job-portal-liart.vercel.app',
    github:'https://github.com/CS251000/job_portal',
  },

  {
    num:"02",
    category:'Full Stack',
    title:'WareHouse Manager',
    description:'Warehouse Manager allowing users to maintain their products and inventory easily.',
    stack:[{name:'NodeJs'},{name:'Express'},{name:'EJS-Views'}],
    image:'/assets/projects/image.png',
    live:'https://mvc-project-product.vercel.app/login',
    github:'https://github.com/CS251000/mvc_project_product',
  },
  {
    num:"03",
    category:'Front End',
    title:'Guess Game',
    description:'A simple game to guess a number chosen by computer',
    stack:[{name:'HTML'},{name:'CSS'},{name:'JavaScript'}],
    image:'/assets/projects/guess.png',
    live:'https://cs251000.github.io/guess-the-number/',
    github:'https://github.com/CS251000/guess-the-number',
  },
  
  {
    num:"04",
    category:'Full Stack',
    title:'Studio-10',
    description:'Inventory management solution for local business',
    stack:[{name:'ReactJS'},{name:'TailwindCSS'}],
    image:'/assets/projects/stdio.png',
    live:'https://stdio10.onrender.com',
    github:'https://github.com/CS251000/STUDIO-10',
  },
  {
    num:"05",
    category:'Frontend',
    title:'MyOnlineMeals',
    description:'Frontend for ordering food online from local restaurants',
    stack:[{name:'HTML'},{name:'CSS'},{name:'JavaScript'}],
    image:'/assets/projects/onlinemeals.png',
    live:'https://cs251000.github.io/MyOnlineMeals/',
    github:'https://github.com/CS251000/MyOnlineMeals',
  },
  {
    num:"06",
    category:'Frontend',
    title:'Pig-Game',
    description:'Just a fun 2 player game made with js html and css focusing on dom manipulation and css design manipulation',
    stack:[{name:'HTML'},{name:'CSS'},{name:'JavaScript'}],
    image:'/assets/projects/pig.png',
    live:'https://cs251000.github.io/Pig-Game/',
    github:'https://github.com/CS251000/Pig-Game',
  },
  {
    num:"07",
    category:'Frontend',
    title:'My-Calendar',
    description:' Project that allows users to create events and tasks on specific dates.',
    stack:[{name:'HTML'},{name:'CSS'},{name:'JavaScript'}],
    image:'/assets/projects/cal.png',
    live:'https://cs251000.github.io/MyCalendar/',
    github:'https://github.com/CS251000/MyCalendar',
  },
  

];


const Work = () => {

  const [project,setProject]= useState(projects[0]);

  const handleSlideChange=(swiper)=>{
    const curr= swiper.activeIndex;
    setProject(projects[curr]);

  }


  return (
    <motion.section initial={{opacity:0}} animate={{
      opacity:1,
      transition:{delay:2.4,duration:0.4,ease:'easeIn'},
    }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item,index)=>{
                  return <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index!==project.stack.length-1 &&','}
                    </li>
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>

            </div>

          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1}
             className="xl:h-[520px] mb-12"
             onSlideChange={handleSlideChange}
             >
              {projects.map((project,index)=>{
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[300px] lg:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full 
                  bg-black/10 z-10"></div>
                  <div className="relative w-full h-full">
                    <Image src={project.image} fill className="object-fill" alt=" "></Image>
                  </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0
              bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 justify-between w-full xl:justify-none xl:w-max " btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px]
              flex justify-center items-center transition-all rounded-full opacity-40 xl:opacity-100"/>
            </Swiper>
          </div>
        </div>
      </div>
      
    </motion.section>
  )
}

export default Work
