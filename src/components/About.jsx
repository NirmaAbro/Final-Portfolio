import React from "react";
// import aboutimg from "../images/aboutimg.png";
import aboutimg from "../images/six.svg";
// import { useGSAP } from "@gsap/react";
import gsap from "gsap/gsap-core";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    const animation = gsap.fromTo(
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
          onEnter: () => animation.play(), // Play animation when element enters the viewport
          onLeaveBack: () => animation.reverse(), // Reverse animation when scrolling back up
          toggleActions: "play none none reverse", // Ensures animation plays forward and backward
          // markers: true, // Remove or comment out this line
        },
      }
    );

    return () => {
      // Cleanup on unmount
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
    };
  }, []);

  return (
    <div className="bg-gray-800 gap-4 md:flex pb-7 ">
      <div className="text-xl md:w-1/2 text-center items-center justify-center">
        <h6 className="text-white items-center text-justify flex-wrap pt-8 mr-7 md:mr-0 md:mt-20 ml-10">
          I am an undergraduate
          <span className="text-cyan-600 font-bold">
            Computer Science student
          </span>
          with 3 years of programming experience. I specialize in front-end
          technologies, including HTML, CSS, JavaScript, ReactJS, Tailwind CSS,
          and GSAP. Additionally, I have a strong command of Python and
          Git/GitHub, along with foundational knowledge in NodeJS, ExpressJS,
          and MongoDB. I am a dedicated and hardworking individual, known for my
          quick learning abilities and strong time management skills. I take
          pride in being responsible and ensuring tasks are completed
          efficiently. I am eager to kickstart my career as a junior ReactJS
          developer, where I can apply my skills and grow as a professional.
        </h6>
      </div>
      <div className="md:w-1/2 flex items-center justify-center pt-24 md:pt-0 ">
        <img
          // style={{ boxShadow: "0 10px 15px -3px rgba(0, 255, 255, 0.7)" }}
          ref={ref}
          src={aboutimg}
          alt=""
          className="cursor-pointer shadow-[0_10px_15px_-3px_rgba(0,255,255,0.7)] hover:shadow-white border-b-8 w-1/2 border-l-8 rounded-full p-0 m-0 border-cyan-800"
        />
      </div>
    </div>
  );
}

export default About;
