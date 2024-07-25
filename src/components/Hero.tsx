"use client";
import ButtonComp from "./Button";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { Link } from "react-scroll";
export default function Hero() {
  return (
    <div className="w-[100%] h-[95vh] lg:pt-[12rem] lg:mt-10 pt-[8rem]  flex flex-col justify-center items-center">
      <div className=" h-[59vh] leading-[3rem]   justify-center  flex flex-col gap-4 items-left text-[3rem] lg:text-[6rem] font-extrabold">
        <span>{`Hi! I'm Kamal,`}</span>
        <span className="text-[1.8rem] lg:text-[3rem] lg:mt-6">{`a Full-Stack Developer`}</span>
        <div className=" h-[3rem]  flex items-center justify-center mt-8">
          <a href="mailto:kamalchakma1@outlook.com">
            <ButtonComp props={"Hire Me"} />
          </a>
        </div>
      </div>
      <div className="h-[30vh]  text-gray-300   items-center pt-[6.5rem]  lg:pt-[4rem] flex flex-col gap-4  justify-center">
        <span>see more about me</span>
        <span className="animate-animation-bounce cursor-pointer hover:text-black">
          <Link to="about" spy={true} smooth={true}>
            <ArrowDownwardOutlinedIcon />
          </Link>
        </span>
      </div>
    </div>
  );
}
