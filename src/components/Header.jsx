import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="bg-gray-800 sticky flex-wrap sm:flex  z-[20] top-0 mx-auto w-full items-center flex justify-between">
      <h1 className="md:text-3xl lg:text-4xl  text-xl ml-6 text-white">Nirma <span className="text-cyan-700 lg:text-4xl  md:text-3xl text-xl">Abro</span></h1>
      <Navbar />
    </header>
  );
}

export default Header;