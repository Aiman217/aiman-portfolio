import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen text-gray-400">
        <div className="hero-content flex-col lg:flex-row">
          <img src="/profile.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl text-center lg:text-5xl lg:text-start font-bold">
              <Typewriter
                words={["Nice to Meet You!", "Learn More About Me!"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="text-lg text-center lg:text-2xl lg:text-start py-6">
              I am a Fourth Year Computer Science student from Universiti Sains
              Malaysia (USM). I am majoring in Intelligent Computing and
              minoring in Management. Passion on web development using
              frameworks like React and NextJS.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
