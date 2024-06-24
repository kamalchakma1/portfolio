import ContentButton from "./ContentButton";

export default function ButtonWithLine({ props }: { props: String }) {
  return (
    <div className="w-[100%] lg:w-[90%]  relative min-h-[4vh] flex items-center flex-col justify-center">
      <span className="z-10">
        <ContentButton props={props} />
      </span>
      <hr className="bg-gray-100 w-[100%] lg:hidden absolute  border-t-[0.3px] border-gray-200" />
    </div>
  );
}
