import ButtonWithLine from "./ButtonWithLine";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Image from "next/image";
import kamalpic from "../../public/kamal.jpg";
export default function CommonBox({
  title,
  contentFor,
  img,
}: {
  title: String;
  contentFor: String;
  img: Boolean;
}) {
  return (
    <div className="w-[100%]  lg:w-[90%] flex items-center justify-center min-h-[40vh] lg:border-t-[0.1px] lg:border-gray-100">
      <div className="w-[95%] min-h-[40vh] lg:w-[100%] flex flex-col lg:flex-row gap-12 items-center justify-center relative ">
        {/* Image and Buttons Area */}
        <div className="w-[90%] lg:w-[70%]   lg:pt-6 min-h-[1rem]   lg:min-h-[40vh] flex flex-col items-center justify-center gap-12 ">
          {/* Button and horizontal line */}
          <ButtonWithLine props={title} />
          {/* My Handsome face will be here */}
          {contentFor === "about" ? (
            <div className="rounded-sm h-[30vh] lg:w-[53%] w-[80%] ">
              {img ? (
                <div className=" grayscale hover:grayscale-0  rounded-md h-[30vh] cursor-pointer  transition-all duration-300 w-[100%]">
                  <Image
                    src={kamalpic}
                    alt="kamal"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              ) : null}
            </div>
          ) : (
            <div className="rounded-sm hidden lg:block h-[30vh] w-[60%]"></div>
          )}
        </div>
        {/* Content Area */}
        <div className="w-[100%] p-1  min-h-[30vh] lg:pt-6 lg:p-0  gap-2 lg:pl-10 lg:border-l-[0.5px] lg:border-gray-100    flex flex-col items-center justify-center ">
          {contentFor === "about" ? <AboutMe /> : null}
          {contentFor === "experience" ? <Experience /> : null}
          {contentFor === "skills" ? <Skills /> : null}
          {contentFor === "projects" ? <Projects /> : null}
        </div>
      </div>
    </div>
  );
}
