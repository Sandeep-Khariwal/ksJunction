"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const HeroSection = () => {

  return (
    <>
      <div id="home" className=" w-[95%] lg:w-[80%]  m-auto mt-5 lg:mt-24 ">
        <div className="w-full flex flex-col-reverse lg:flex-row ">
          <div className="w-full lg:w-[50%]  ">
            <motion.div
              initial={{ y: "20%", opacity: 1 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 1 }}
              className="font-semibold text-black text-3xl text-center lg:text-start lg:text-5xl leading-tight "
            >
              Unlock the Power of Full Stack 
              web Development
              <div className="text-[#6a5cff] inline">
                <Typewriter
                  options={{
                    strings: [
                      "Get job!",
                      "Launch your Career!",
                      "build your career!",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ y: "40%", opacity: 1 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 2 }}
              className="mt-8 text-lg text-center lg:text-start lg:text-2xl font-poppins text-gray-500 "
            >
              Gain hands-on experience with real-world projects, 
              learn industry-leading technologies,  and become a job-ready 
              Full Stack Developer in just a few months!
            </motion.div>
            <div className="w-full flex justify-center items-center mt-10 ">
              <a href="tel:+919416059799" className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-medium py-2 px-6 rounded-lg hover:scale-105 transform transition duration-200">
                call now
              </a>
            </div>
          </div>
          <div className="w-full lg:w-[50%] h-auto  lg:pl-20 mt-[-1rem] ">
          <div className="  w-full flex justify-center items-center">
                  <Image
                    src="/home.png"
                    alt="Description of image"
                    width={500}
                    height={100}
                    quality={80}
                    className="w-full"
                  />
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
