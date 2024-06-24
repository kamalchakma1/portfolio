import { experienceData } from "../../data";
export default function Experience() {
  return (
    <>
      {experienceData.map((data) => (
        <>
          <div className="w-[100%]  min-h-[30vh] p-3 flex flex-col gap-8">
            <div className="w-[100%] h-[3rem]  flex items-center">
              <div className="w-[50%] flex flex-col  ">
                <h1 className="text-sm font-bold lg:text-lg">{data.role}</h1>
                <h1 className="lg:text-[0.75rem] text-[0.65rem] text-gray-400">
                  {data.company}
                </h1>
              </div>
              <div className="w-[50%]   flex flex-col items-end  justify-end">
                <h3 className="lg:text-[0.7rem] text-[0.7rem] font-medium">
                  {data.period}
                </h3>
                <h1 className="lg:text-[0.75rem] text-[0.65rem] text-gray-400">
                  {data.loaction}
                </h1>
              </div>
            </div>
            <p>{data.desc}</p>
          </div>
        </>
      ))}
    </>
  );
}
