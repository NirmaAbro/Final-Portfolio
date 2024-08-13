import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import image1 from "../images/technisttttt.png";
import image2 from "../images/landingpageeee.png";
import image3 from "../images/recipieeeee.png";

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <div className="slick-prev" />,
    nextArrow: <div className="slick-next" />,
  };

  return (
    <div className="justify-center items-center min-h-screen bg-gray-800 gap-5 p-9">
      {/* for headings  */}
      <div className="justify-center items-center text-center pt-6 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold p-4 text-white justify-center items-center text-center ">
          My <span className="text-cyan-600">Projects</span>
        </h1>
        <h3 className="text-base md:text-xl lg:text-2xl font-bold p-3 text-gray-600 justify-center items-center text-center ">
          My awesome work
        </h3>
      </div>
      <Slider
        {...settings}
        className="w-2/3 mt-7 justify-center m-auto items-center md:w-2/3 lg:w-1/2"
      >
        {/* img1 */}
        {/* <div className="shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white rounded-3xl transition-shadow cursor-pointer border-2 border-cyan-300 m-3 flex flex-col justify-center items-center p-4 w-full md:w-2/3 lg:w-1/2 mx-auto">
          <img
            src={image1}
            alt="Slide 1"
            className="max-w-full max-h-60 rounded-3xl"
          />
          <p className="text-left text-base md:text-2xl lg:text-3xl mt-4 font-bold text-white">
            Technist Beautiful Landing Page
          </p>
          <button className="text-base mt-4 text-white bg-gray-800 font-bold py-2 px-4 rounded-full shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white transition-shadow">
            <a
              href=" https://nirmaabro.github.io/Technist-landing-pagee"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </button>
        </div> */}

        {/* img2 */}
        <div className="shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white rounded-3xl transition-shadow cursor-pointer border-2 border-cyan-300 m-3 flex flex-col justify-center items-center p-4 w-full md:w-2/3 lg:w-1/2 mx-auto">
          <img
            src={image2}
            alt="Slide 2"
            className="max-w-full max-h-60 rounded-3xl"
          />
          <p className="text-left text-base md:text-2xl lg:text-3xl mt-4 font-bold text-white">
            ReactJS Landing Page
          </p>
          <button className="text-base mt-4 text-white bg-gray-800 font-bold py-2 px-4 rounded-full shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white transition-shadow">
            {/* it's a good practice to add rel="noopener noreferrer" when using target="_blank"  */}
            <a
              href="https://react-js-beautiful-landing-page-cvvq8apsi-nirma-abros-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </button>
        </div>

        {/* img3 */}
        <div className="shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white rounded-3xl transition-shadow cursor-pointer border-2 border-cyan-300 m-3 flex flex-col justify-center items-center p-4 w-full md:w-2/3 lg:w-1/2 mx-auto">
          <img
            src={image3}
            alt="Slide 2"
            className="max-w-full max-h-60 rounded-3xl"
          />
          <p className="text-left text-base md:text-2xl lg:text-3xl mt-4 font-bold text-white">
            Recipie Recommendation Engine
          </p>
          <button className="text-base mt-4 text-white bg-gray-800 font-bold py-2 px-4 rounded-full shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white transition-shadow">
            <a
              href=" https://recipie-recommendation-engine.vercel.app/ "
              // href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </button>
        </div>
      </Slider>
    </div>
  );
}

export default Projects;
