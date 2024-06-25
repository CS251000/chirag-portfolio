import Link from "next/link"
import {FaGithub,FaLinkedin,FaTwitter} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";

const social= [
    {icon:<FaGithub/>, path:"https://github.com/CS251000"},
    {icon:<FaLinkedin/>, path:"https://www.linkedin.com/in/chirag-singhal-81aa251aa/"},
    {icon:<SiLeetcode/>, path:"https://leetcode.com/u/CS2510/"},
    {icon:<FaTwitter/>, path:"https://twitter.com/@ChiragS2510"},

]

const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {social.map((item,index)=>{
            return (
                <Link key={index} href={item.path} target="_blank" className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
      
    </div>
  )
}

export default Socials
