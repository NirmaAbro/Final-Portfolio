import React from "react";
import image from "../images/img2.png";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen md:gap-7 bg-gray-800 flex flex-col md:flex-row py-10 justify-center items-center relative"
    >
      <div className="flex-1 flex justify-center items-center">
        <img
          src={image}
          alt="Hero Pic"
          className="h-72 w-72 md:h-96 md:w-96 object-cover rounded-full z-10  border-b-8 p-1 border-l-8 border-cyan-700"
        />
      </div>
      <div className="flex-1 z-20 ">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-center md:text-left">
            <h1 className="text-white font-bold text-2xl md:leading-normal leading-10 md:text-3xl lg:text-5xl">
              Hello! <br />
              <span>
                My Name is{" "}
                <span className="hover:text-white text-cyan-600">Nirma Abro</span>{" "}
              </span>
            </h1>
            <h1 className="text-lg md:text-2xl lg:text-3xl lg:mt-2 leading-5 md:leading-normal font-bold text-gray-600">
              MERN STACK DEVELOPER
            </h1>
          </div>
          <div className="flex justify-center items-center flex-col">
            <a
              href="/Nirma-Abro-Resume.pdf" // Ensure this matches the name and location of your resume file in the public folder
              download="Nirma_Abro_Resume.pdf" // Optional: Specify the name of the downloaded file
              className="btn-primary mt-8 hover:bg-cyan-600 border-l-8 border-b-4  border-cyan-600 rounded-full p-2 hover:text-black md:text-2xl font-bold "
            >
              Download Resume
            </a>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=100075848754894"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-white"
              >
                <FaFacebook className="text-cyan-600 text-2xl md:text-3xl lg:text-4xl " />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100075848754894"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-white"
              >
                <FaGithub className="text-cyan-600 text-2xl md:text-3xl lg:text-4xl " />
              </a>
              <a
                href="https://www.linkedin.com/in/nirma-abro-85a885230/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-white"
              >
                <FaLinkedin className="text-cyan-600 text-2xl md:text-3xl lg:text-4xl " />
              </a>
              <a
                href="https://www.instagram.com/nirma_abro143/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-white "
              >
                <FaSquareInstagram className="text-cyan-600 text-2xl md:text-3xl lg:text-4xl " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
