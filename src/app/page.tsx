import CommonBox from "@/components/CommonBox";
import ConnectMe from "@/components/ConnectMe";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="w-[100%]  min-h-[70vh]  flex items-center justify-center">
      <div className="lg:w-[90%] w-[95%] flex gap-16 flex-col items-center justify-center overflow-hidden ">
        <span id="hero">
          <Hero />
        </span>
        <span id="about">
          <CommonBox title={"about me"} img={true} contentFor={"about"} />
        </span>
        <span id="experience">
          <CommonBox
            title={"experience"}
            img={false}
            contentFor={"experience"}
          />
        </span>
        <span id="skills">
          <CommonBox title={"skills"} img={false} contentFor={"skills"} />
        </span>
        <span id="projects">
          <CommonBox title={"projects"} img={false} contentFor={"projects"} />
        </span>
        <ConnectMe />
      </div>
    </div>
  );
}
