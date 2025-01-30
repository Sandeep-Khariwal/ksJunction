"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const About = () => {
  return (
    <div id="about" className="w-full lg:w-[80%] mx-auto mt-4 lg:mt-20 ">
      <motion.div
        initial={{ y: "20%", opacity: 1 }}
        whileInView={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-semibold text-black flex text-3xl lg:text-5xl  justify-center items-center "
      >
        About my{" "}
        <div className="text-[#6a5cff] ml-2 inline">
          <Typewriter
            options={{
              strings: [" Education!", " Experience!", " Work!"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </motion.div>
      <div className="w-full flex justify-between items-center flex-col lg:flex-row mt-10 ">
        <div className="w-full lg:w-1/2 justify-center items-center p-auto">
          <div className="w-full lg:w-fit m-auto lg:ml-auto ">
            <motion.svg
              width="400"
              viewBox="-20 -15 300 300"
              initial="hidden"
              animate="visible"
              spacing={10}
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: "#6a5cff", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#c34aff", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <motion.circle
                cx="100"
                cy="100"
                r="110"
                stroke="url(#gradient)"
                strokeWidth={10}
                variants={draw}
                custom={1}
              />
              <foreignObject x="0" y="0" width="200" height="200">
                <div className="w-full flex justify-center items-center">
                  <Image
                    src="/hero.jpg"
                    alt="Description of image"
                    width={200}
                    height={200}
                    className="rounded-full m-auto "
                  />
                </div>
              </foreignObject>
            </motion.svg>
            <div className="w-fit m-auto p-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white text-2xl lg:text-5xl font-semibold transform -rotate-6 -mt-16 lg:-mt-10 lg:mr-2 ">
              software engineer
            </div>
          </div>
        </div>
        <motion.div
          initial={{ y: "20%", opacity: 1 }}
          whileInView={{ y: "0%", opacity: 1 }}
          transition={{ duration: 2 }}
          className=" w-full lg:w-1/2 p-7 lg:p-10 text-lg lg:text-2xl font-poppins text-gray-500 flex items-start"
        >
          Hy, <br />
          I am sandeep khariwal, <br />
          graduated from delhi university with software development
          spacification <br />
          I am working in software industry from last 2 years, and help organization to build a complex design and sacalable application.
          I have great knowledge about the industry work flow. <br/>
          also I have built my own software projects and now providing services as a freelancer
        </motion.div>
      </div>
    </div>
  );
};

export default About;
