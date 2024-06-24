import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiRecoil } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
export default function Skills(){
    return(
        <div className="w-[100%] lg:w-[100%]  min-h-[30vh]  flex flex-wrap items-center pl-6 lg:pl-16 lg:pr-16 gap-3">
          <div className="w-[4rem] flex items-center hover:text-blue-600 justify-center text-lg cursor-pointer shadow-md hover:scale-105 transition-all duration-100 border-[0.5px] border-gray-100 h-[4rem] rounded-full ">
            <FaReact style={{fontSize:"40px"}}/>
          </div>
          <div className="w-[4rem] cursor-pointer flex items-center justify-center shadow-md hover:scale-105 transition-all duration-100 border-[0.5px] border-gray-100 h-[4rem] rounded-full ">
            <RiNextjsFill style={{fontSize:"50px"}}/>
          </div>
          <div className="w-[4rem] flex items-center justify-center hover:text-[#38BDF8] cursor-pointer shadow-md hover:scale-105 transition-all duration-100 border-[0.5px] border-gray-100 h-[4rem] rounded-full ">
            <RiTailwindCssFill style={{fontSize:"40px"}}/>
          </div>
          <div className="w-[4rem] flex items-center justify-center hover:text-yellow-500 cursor-pointer shadow-md hover:scale-105 transition-all duration-100 border-[0.5px] border-gray-100 h-[4rem] rounded-full ">
            <IoLogoJavascript style={{fontSize:"40px"}}/>
          </div>
          <div className="w-[4rem] flex items-center justify-center hover:text-blue-600 cursor-pointer shadow-md hover:scale-105 transition-all duration-100 border-[0.5px] border-gray-100 h-[4rem] rounded-full ">
            <BiLogoTypescript style={{fontSize:"40px"}}/>
          </div>
          <div className="w-[4rem] flex items-center justify-center hover:text-green-500 cursor-pointer shadow-md hover:scale-105 transition-all duration-100 border-[0.5px] border-gray-100 h-[4rem] rounded-full ">
               <FaNodeJs style={{fontSize:"40px"}}/>
          </div>
          <div className="w-[4rem] flex items-center justify-center hover:text-[#32648D] cursor-pointer shadow-md hover:scale-105 transition-all duration-100 border-[0.5px] border-gray-100 h-[4rem] rounded-full ">
               <BiLogoPostgresql style={{fontSize:"40px"}}/>
          </div>
          <div className="w-[4rem] flex items-center justify-center cursor-pointer shadow-md hover:scale-105 transition-all duration-100 border-[0.5px] border-gray-100 h-[4rem] rounded-full ">
              <SiPrisma style={{fontSize:"40px"}}/>
          </div>
          <div className="w-[4rem] flex items-center hover:text-green-600 justify-center cursor-pointer shadow-md hover:scale-105 transition-all duration-100 border-[0.5px] border-gray-100 h-[4rem] rounded-full ">
             <SiMongodb style={{fontSize:"40px"}}/>
          </div>
          <div className="w-[4rem] flex items-center hover:text-[#3578E5] justify-center cursor-pointer shadow-md hover:scale-105 transition-all duration-100 border-[0.5px] border-gray-100 h-[4rem] rounded-full ">
             <SiRecoil style={{fontSize:"40px"}}/>
          </div>
          <div className="w-[4rem] flex items-center  justify-center cursor-pointer shadow-md hover:scale-105 transition-all duration-100 border-[0.5px] border-gray-100 h-[4rem] rounded-full ">
            <FaGithub style={{fontSize:"40px"}}/>
          </div>
          <div className="w-[4rem] flex items-center hover:text-blue-500 justify-center cursor-pointer shadow-md hover:scale-105 transition-all duration-100 border-[0.5px] border-gray-100 h-[4rem] rounded-full ">
            <FaDocker style={{fontSize:"40px"}}/>
          </div>
           <div className="w-[4rem] flex items-center hover:text-orange-500 justify-center cursor-pointer shadow-md hover:scale-105 transition-all duration-100 border-[0.5px] border-gray-100 h-[4rem] rounded-full ">
            <FaHtml5 style={{fontSize:"40px"}}/>
          </div>
          <div className="w-[4rem] flex items-center hover:text-blue-500 justify-center cursor-pointer shadow-md hover:scale-105 transition-all duration-100 border-[0.5px] border-gray-100 h-[4rem] rounded-full ">
            <FaCss3Alt style={{fontSize:"40px"}}/>
          </div>
        </div>
    )
}