import React, { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const navlinks = ["Home", "About", "Skills", "Hire Me", "Projects"];

function Navbar() {
  const [isopen, setisopen] = useState(false);
  const toggleNavbar = () => {
    setisopen(!isopen);
    console.log(isopen);
  };

  return (
    <>
      <nav className="w-auto p-6 top-0 rounded-l-full ">
        <div className="lg:flex  justify-between hidden  mx-12 text-xl">
          <ul className="lg:flex gap-6 mx-3 md:text-xl text-cyan-600 ">
            {navlinks.map((link, index) => (
              <li
                className="shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white    rounded-3xl transition-shadow text-white p-2  "
                key={index}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile screen */}
        <div className="lg:hidden justify-end ">
          <button onClick={toggleNavbar} className="text-white">
            {isopen ? (
              <IoMdCloseCircleOutline className="text-xl" />
            ) : (
              <FaGripLines className="text-xl" />
            )}
          </button>
        </div>
      </nav>
      {isopen && (
        <div className="lg:hidden w-1/2  justify-center flex flex-col items-start basis-full">
          <ul className="lg:hidden mx-3 md:text-xl ">
            {navlinks.map((link, index) => (
              <li
                className="hover:border-b-2 hover:shadow-white border-cyan-300 hover:text-cyan-300 transition-shadow text-white p-2  "
                key={index}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
