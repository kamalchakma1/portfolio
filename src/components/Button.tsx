export default function ButtonComp({ props }: { props: String }) {
  return (
    <button className="text-[0.9rem] hover:scale-105 hover:transition-all duration-300 bg-black text-white w-[fit-content] min-h-[2.5rem]  rounded-full capitalize pl-[1.2rem] pr-[1.2rem]">
      {props}
    </button>
  );
}
