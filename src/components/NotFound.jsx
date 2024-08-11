import React from "react";
import { Link } from "react-router-dom";
import { RiBearSmileFill } from "react-icons/ri"; // Make sure to import the image

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-cyan-300">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
        Page Not Found
      </h1>
      <p className="text-base md:text-xl mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="text-base md:text-xl px-2 py-1 bg-cyan-300 text-gray-800 rounded-lg hover:bg-cyan-400 transition-colors"
      >
        Go to Home Page
      </Link>
      <div className="mt-12">
        {/* <img
          src={teddyBearImage}
          alt="Teddy Bear"
          className="w-48 h-48 md:w-64 md:h-64"
        /> */}
        <RiBearSmileFill className="w-30 h-30 md:w-40 md:h-40" />
      </div>
    </div>
  );
}

export default NotFound;
