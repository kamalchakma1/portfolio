"use client";
import { menuAtom } from "@/store/Atom";
import { useRecoilState } from "recoil";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuAto, setMenuAto] = useRecoilState(menuAtom);
  const subMenus = ["About", "Experience", "Projects", "Skills"];
  const menuFun = () => {
    menuAto ? setMenuAto(false) : setMenuAto(true);
  };
  return (
    <div className="w-[100%] bg-white z-50 fixed  h-[3.7rem] lg:h-[5rem] flex items-center justify-center">
      <div className="w-[95%] h-[100%] lg:w-[90%]  flex">
        <div className="w-[40%] cursor-pointer  text-sm font-extrabold lg:text-xl flex items-center">
          <Link to="hero" spy={true} smooth={true}>{`<KKChakma/>`}</Link>
        </div>
        <div className="w-[60%]  flex justify-end">
          <div className="w-[60%]  lg:w-[25%]  flex  relative items-center justify-end">
            <div className="w-[50%] hover:text-green-400 cursor-pointer text-[0.8rem] lg:text-[0.9rem] font-semibold flex items-center justify-center ">
              <a href={process.env.RESUME_URL} target="_blank">
                RESUME
              </a>
            </div>
            <div
              onClick={menuFun}
              className="w-[50%] hover:text-green-400   cursor-pointer  text-[0.8rem] font-semibold lg:text-[0.9rem] border-l-[1px] border-l-black ml-2 flex items-center justify-center"
            >
              MENU
            </div>
            {menuAto ? (
              <div className="w-[8.5rem] min-h-[9rem] p-6 flex items-center justify-center lg:right-5 right-2 bg-white border-[0.5px] border-gray-100 shadow-md absolute lg:top-16 top-[3.2rem] cursor-pointer rounded-sm">
                <ul className="text-sm flex items-left gap-4 flex-col justify-center">
                  {subMenus.map((menu) => (
                    <>
                      <li className="hover:text-green-400">
                        <Link to={menu.toLowerCase()} spy={true} smooth={true}>
                          {menu}
                        </Link>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
