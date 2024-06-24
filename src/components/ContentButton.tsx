export default function ContentButton({ props }: { props: String }) {
  return (
    <>
      <button className="text-[0.9rem] hover:scale-105 hover:transition-all duration-300 bg-black text-white w-[9rem] min-h-[2.5rem]  rounded-full capitalize pl-[0.5rem] pr-[0.5rem]">
        {props}
      </button>
    </>
  );
}
