"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import course, { CourseType } from "./content/About";
import Card from "./component/Card";
import { useState } from "react";

const Course = () => {
  const [seeMore, setSeeMore] = useState<boolean>(false);
  return (
    <div id="course" className="w-[90%] lg:w-[80%] mx-auto mt-10 lg:mt-20 ">
      <motion.div
        initial={{ y: "20%", opacity: 1 }}
        whileInView={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-semibold text-black flex text-3xl lg:text-5xl leading-tight justify-center items-center "
      >
        About our{" "}
        <div className="text-[#6a5cff] ml-2 inline">
          <Typewriter
            options={{
              strings: [" Learnings!", " Course!", " Work!"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </motion.div>
      <div className="w-full flex justify-between items-center flex-wrap mt-10">
      {course &&
          (seeMore ? course : course.slice(0, 3)).map((c:CourseType, index) => (
            <Card key={index} image={c.image} tittle={c.tittle} desc={c.desc} duration={c.duration} fees={c.fees} />
          ))}

      </div>
      <div className="w-full p-10 flex justify-center items-center " >
        <button onClick={()=>setSeeMore(!seeMore)} className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-medium py-2 px-6 rounded-lg hover:scale-105 transform transition duration-200">
          {seeMore?"See less":"See more"}
        </button>
      </div>
    </div>
  );
};

export default Course;
