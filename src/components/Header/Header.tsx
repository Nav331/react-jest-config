import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

enum NavTabs{
  HOME="Home",
  BOOKSLEVES="Booksleves"
}
const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div className="w-full h-[50px] bg-white flex flex-row items-center justify-between md:px-20">
      <img className="px-10" src="./assets/Group 7731 (5).png" alt="image" />
      <div>
        <ul className="md:flex flex flex-row px-10 space-x-6 hidden ">
          <li className="px-5 py-2">{NavTabs.HOME}</li>
          <li className="px-5 py-2">{NavTabs.BOOKSLEVES}</li>
          <li>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-sm">Logout</button>
          </li>
        </ul>
      </div>
      <div className="md:hidden sm:flex px-10">
        <MenuIcon onClick={() => setMenu(!menu)} />
        {menu && (
          <ul
            className={`fixed top-[50px] bg-slate-300  text-black right-0 h-full w-[50%] bg-white shadow-lg px-6 py-4 flex flex-col space-y-4 z-20 transform transition-transform duration-300 ease-in-out ${
              menu ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
          >
            <li>{NavTabs.HOME}</li>
            <li>{NavTabs.BOOKSLEVES}</li>
            <li>
              <button className="bg-blue-500 text-white px-5 py-2 rounded-sm">Logout</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
