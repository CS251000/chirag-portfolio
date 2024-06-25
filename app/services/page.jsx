"use client";
import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Create robust and scalable web applications tailored to your business needs. Utilize modern technologies and best practices to ensure high performance and user satisfaction.',
    href: "",
  },
  {
    num: '02',
    title: 'Database Management',
    description: 'Optimize your data infrastructure with efficient database management solutions. Ensure data integrity, security, and accessibility for seamless business operations.',
    href: "",
  },
  {
    num: '03',
    title: 'SEO',
    description: 'Enhance your online presence and visibility with strategic SEO techniques. Improve search engine rankings and drive organic traffic to your website for increased conversions.',
    href: "",
  },
  {
    num: '04',
    title: 'UI/UX Design',
    description: 'Craft intuitive and aesthetically pleasing user interfaces with a focus on enhancing user experience. Implement user-centric design principles to create engaging digital products.',
    href: "",
  },
];




const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]" 
          initial={{opacity:1}} animate={{
            opacity:1,
            transition:{delay:2.4,duration:0.4,ease:"easeIn"},
          }}>
            {services.map((service,index)=>{
              return (
                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                  <p className="text-white/60">{service.description}</p>
                  <div className="border-b border-white/20 w-full"></div>

                </div>
              )
            })}
          </motion.div>
        </div>
      
    </section>
  )
}

export default Services
