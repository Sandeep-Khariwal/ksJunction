"use client";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Card from "./component/Card";
import Service , { ServiceType } from "./content/services";

const Services = () => {
  return (
    <div id="services" className=" w-[90%] lg:w-[80%] mx-auto mt-4 lg:mt-20 ">
      <motion.div
        initial={{ y: "20%", opacity: 1 }}
        whileInView={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-semibold text-black flex text-2xl lg:text-5xl leading-tight justify-center items-center "
      >
        Services we{" "}
        <div className="text-[#6a5cff] ml-2 inline">
          <Typewriter
            options={{
              strings: [" Provide!"," Give!", " Promise!"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </motion.div>
      <div className="w-full flex justify-between items-center flex-wrap mt-10 ">
       {
        Service && Service.map((c:ServiceType,i:number)=>(
            <Card key={i} image={c.image} tittle={c.tittle} desc={c.desc} />
        ))
       }
      </div>
    </div>
  );
};

export default Services;
