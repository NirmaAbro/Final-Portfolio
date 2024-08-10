import React, { useEffect, useRef } from "react";
import { FaPython, FaHtml5, FaReact, FaNode } from "react-icons/fa";
import { MdOutlineCss, MdJavascript } from "react-icons/md";
import { DiMongodb } from "react-icons/di";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  // Step 1: Create an array to store refs
  const refs = useRef([]);

  // Step 2: Function to add elements to refs array
  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  // Step 3: Apply GSAP ScrollTrigger animation
  useEffect(() => {
    // Create a snapshot of refs.current
    const elements = refs.current;

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { scale: 0 },
        {
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Cleanup (Optional, for safety)
    return () => {
      elements.forEach((el) => {
        ScrollTrigger.getById(el)?.kill();
      });
    };
  }, []);

  return (
    <div className="bg-gray-800 cursor-pointer justify-center px-8 gap-2 md:gap-3 md:pl-20 items-center min-h-screen grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:pl-20 text-center">
      {/* html */}
      <div
        ref={addToRefs}
        className="bg-gray-900 shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white mb-3 border-2 border-cyan-300 w-32 h-32 lg:w-40 lg:h-40 flex flex-col justify-center items-center rounded-2xl"
      >
        <FaHtml5 className="text-white shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white border-8 border-cyan-700 rounded-full p-1 text-6xl" />
        <h6 className="font-bold text-xl text-white mt-2">HTML</h6>
      </div>
      {/* css */}
      <div
        ref={addToRefs}
        className="bg-gray-900 shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white mb-3 w-32 h-32 border-2 border-cyan-300 lg:w-40 lg:h-40 flex flex-col justify-center items-center rounded-2xl"
      >
        <MdOutlineCss className="text-white shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white border-8 border-cyan-700 rounded-full text-6xl" />
        <h6 className="font-bold text-xl text-white mt-2">CSS</h6>
      </div>
      {/* javascript */}
      <div
        ref={addToRefs}
        className="bg-gray-900 shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white mb-3 w-32 h-32 border-2 border-cyan-300 lg:w-40 lg:h-40 flex flex-col justify-center items-center rounded-xl"
      >
        <MdJavascript className="text-white shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white border-8 border-cyan-700 rounded-full text-6xl" />
        <h6 className="font-bold text-xl text-white mt-2">JavaScript</h6>
      </div>
      {/* reactjs */}
      <div
        ref={addToRefs}
        className="bg-gray-900 shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white mb-3 w-32 h-32 border-2 border-cyan-300 lg:w-40 lg:h-40 flex flex-col justify-center items-center rounded-xl"
      >
        <FaReact className="text-white shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white border-8 border-cyan-700 rounded-full text-6xl p-1" />
        <h6 className="font-bold text-xl text-white mt-2">ReactJS</h6>
      </div>
      {/* tailwindcss */}
      <div
        ref={addToRefs}
        className="bg-gray-900 shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white mb-3 w-32 h-32 border-2 border-cyan-300 lg:w-40 lg:h-40 flex flex-col justify-center items-center rounded-xl"
      >
        <MdOutlineCss className="text-white shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white border-8 border-cyan-700 rounded-full text-6xl" />
        <h6 className="font-bold text-xl text-white mt-2">Tailwind CSS</h6>
      </div>
      {/* c */}
      <div
        ref={addToRefs}
        className="bg-gray-900 shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white mb-3 w-32 h-32 border-2 border-cyan-300 lg:w-40 lg:h-40 flex flex-col justify-center items-center rounded-xl"
      >
        <span className="text-white shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white border-8 border-cyan-700 rounded-full text-3xl px-2">
          C
        </span>
        <h6 className="font-bold text-xl text-white mt-2">C</h6>
      </div>
      {/* python */}
      <div
        ref={addToRefs}
        className="bg-gray-900 shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white mb-3 w-32 h-32 border-2 border-cyan-300 lg:w-40 lg:h-40 flex flex-col justify-center items-center rounded-xl"
      >
        <FaPython className="text-white shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white border-8 border-cyan-700 rounded-full p-1 text-6xl" />
        <h6 className="font-bold text-xl text-white mt-2">Python</h6>
      </div>
      {/* Node js */}
      <div
        ref={addToRefs}
        className="bg-gray-900 shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white mb-3 w-32 h-32 border-2 border-cyan-300 lg:w-40 lg:h-40 flex flex-col justify-center items-center rounded-xl"
      >
        <FaNode className="text-white shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white border-8 border-cyan-700 rounded-full p-1 text-6xl" />
        <h6 className="font-bold text-xl text-white mt-2">NodeJS</h6>
      </div>
      {/* express */}
      <div
        ref={addToRefs}
        className="bg-gray-900 mb-3 shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white w-32 h-32 border-2 border-cyan-300 lg:w-40 lg:h-40 flex flex-col justify-center items-center rounded-xl"
      >
        <span className="text-white shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white border-8 border-cyan-700 rounded-full p-1 text-6xl">
          {"{}"}
        </span>
        <h6 className="font-bold text-xl text-white mt-2">ExpressJS</h6>
      </div>
      {/* mongoDB */}
      <div
        ref={addToRefs}
        className="bg-gray-900 shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white mb-3 w-32 h-32 border-2 border-cyan-300 lg:w-40 lg:h-40 flex flex-col justify-center items-center rounded-xl"
      >
        <DiMongodb className="text-white shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white border-8 border-cyan-700 rounded-full p-1 text-6xl" />
        <h6 className="font-bold text-xl text-white mt-2">MongoDB</h6>
      </div>
    </div>
  );
}

export default Skills;
