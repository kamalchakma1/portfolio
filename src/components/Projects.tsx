import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Image from "next/image";
import { projectData } from "../../data";
import Link from "next/link";
export default function Projects() {
  return (
    <>
      {projectData.map((item) => (
        <>
          <div className="w-[80%] lg:w-[100%]  min-h-[30vh]  flex flex-wrap items-center lg:ml-[6rem] lg:mr-[6rem] lg:pr-10 lg:pl-10 gap-2">
            <div className="lg:w-[100%] w-[100%] border-solid border-[0.3px] border-gray-200 p-4 lg:p-6 hover:border-slate-50  hover:bg-slate-50 hover:scale-105 transition-all duration-300 rounded-sm  cursor-pointer  min-h-[30vh] gap-4 flex flex-col lg:flex-row  items-center">
              {/* Project Image */}
              <div className="bg-white rounded-sm  h-[8.5rem] lg:h-[25vh] lg:w-[70%] w-[95%]">
                <Image
                  src={item.img}
                  alt="Project_name"
                  style={{
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "5px",
                  }}
                />
              </div>
              {/*Project Details  */}
              <div className="h-[10.5rem] lg:h-[25vh] lg:w-[80%]   w-[95%]">
                {/*Project Title  */}
                <Link href={item.link} target="_blank">
                 <div className="w-[100%] text-md font-semibold h-[2rem] lg:gap-2 hover:text-blue-600  flex items-center ">
                     {item.title}                  
                      <span className="cursor-pointer">
                       <ArrowOutwardIcon style={{ fontSize: "14px" }} />
                     </span>                 
                 </div>
                  </Link>
                {/* Project */}
                <div className="min-h-[6.5rem] text-sm  flex items-center">
                  {item.desc}
                </div>
                <div className="min-h-[2rem]  flex flex-wrap items-center gap-1">
                  {item.techUsed.map((tech) => (
                    <>
                      <div className="w-[fit-content] rounded-full pb-[0.2rem] pt-[0.2rem] text-[0.5rem] flex items-center justify-center bg-[#828282] text-white pl-2 pr-2">
                        {tech}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
