import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
export default function ConnectMe() {
  return (
    <div className="w-[90%] z-20 h-[7rem] flex flex-col gap-4">
      <div className="h-[3rem]  flex items-center justify-center">
        <p className="text-2xl lg:text-3xl lg:font-bold font-semibold">{`Let's Connect`}</p>
      </div>
      <div className="h-[1rem]  flex items-center justify-center gap-4 lg:gap-6">
        <span className="cursor-pointer hover:text-blue-600">
          <a href={process.env.GITHUB_LINK} target="_blank">
            <GitHubIcon style={{ fontSize: "20px" }} />
          </a>
        </span>
        <span className="cursor-pointer hover:text-blue-600">
          <a href={process.env.LINKED_LINK} target="_blank">
            <LinkedInIcon style={{ fontSize: "20px" }} />
          </a>
        </span>
        <span className="cursor-pointer hover:text-blue-600">
          <a href="" target="_blank">
            <XIcon style={{ fontSize: "20px" }} />
          </a>
        </span>
      </div>
    </div>
  );
}
