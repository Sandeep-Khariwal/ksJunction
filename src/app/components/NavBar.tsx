"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="hidden text-black lg:block w-[80%] lg:w-full ">
        <div className="w-full mx-auto p-6 flex justify-between items-center ">
          <div className="w-[20%] ">
            <Image
              src="/logo.png"
              alt="Description of image"
              width={200}
              height={100}
            />
          </div>
          <div className="w-[30%] m-auto flex justify-between items-center">
            <Link
              href="#home"
              className="font-semibold font-OpenSans transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-500"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="font-semibold font-OpenSans transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-500"
            >
              About
            </Link>
            <Link
              href="#services"
              className="font-semibold font-OpenSans transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-500"
            >
              Services
            </Link>
            <Link
              href="#course"
              className="font-semibold font-OpenSans transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-500"
            >
              Courses
            </Link>
          </div>
          <a
            href="https://forms.gle/WEU7t6VjFCTpXY6A6"
            target="_blank"
            className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-medium py-2 px-6 rounded-lg hover:scale-105 transform transition duration-200"
          >
            Register
          </a>
        </div>
      </div>
      <div className="lg:hidden w-full text-black">
        <div className="w-full py-4  flex justify-between items-center  ">
          <Image
            src="/logo.png"
            alt="Description of image"
            width={180}
            height={100}
          />
          {open ? (
            <MdClose
              onClick={() => setOpen(!open)}
              style={{ fontSize: "2rem", marginTop: "-0.5rem", marginRight:"2rem" }}
            />
          ) : (
            <FaBarsStaggered
              onClick={() => setOpen(!open)}
              style={{ fontSize: "1.5rem", marginRight:"2rem" }}
            />
          )}
        </div>
        {open && (
          <motion.div
            initial={{ y: "20%", opacity: 1 }}
            whileInView={{ y: "0%", opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-screen "
          >
            <div className="w-full h-full p-6 flex flex-col justify-start items-center ">
              <div className="w-full gap-10 mt-10 flex flex-col justify-start items-center ">
                <motion.a
                  initial={{ x: "50%", opacity: 1 }}
                  whileInView={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 1 }}
                  href="#home"
                  className="font-semibold text-lg font-OpenSans transition duration-300 transform hover:scale-105 hover:text-purple-500"
                >
                  Home
                </motion.a>
                <motion.a
                  initial={{ x: "50%", opacity: 1 }}
                  whileInView={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  href="#about"
                  className="font-semibold text-lg font-OpenSans transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-500"
                >
                  About
                </motion.a>
                <motion.a
                  initial={{ x: "50%", opacity: 1 }}
                  whileInView={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 2 }}
                  href="#services"
                  className="font-semibold text-lg font-OpenSans transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-500"
                >
                  Services
                </motion.a>
                <motion.a
                  initial={{ x: "50%", opacity: 1 }}
                  whileInView={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 2.5 }}
                  href="#course"
                  className="font-semibold text-lg font-OpenSans transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-500"
                >
                  Courses
                </motion.a>
              </div>
              <a
                href="https://forms.gle/WEU7t6VjFCTpXY6A6"
                target="_blank"
                className="mt-10 bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-medium py-2 px-6 rounded-lg hover:scale-105 transform transition duration-200"
              >
                Register
              </a>

              <div className="w-[80%] flex justify-between items-center my-auto ">
                <Link href={"https://www.instagram.com/sandeep_khariwal/"} ><FaInstagram style={{ fontSize: "2rem" }} /></Link>
                <Link href={"https://www.linkedin.com/in/sandeep-khariwal-95b65522b/"} ><FaLinkedinIn style={{ fontSize: "2rem" }} /></Link>
                <Link href={"https://www.facebook.com/sandeep.kharival.3"} ><FaFacebookF style={{ fontSize: "2rem" }} /></Link>
                <Link href={"https://www.youtube.com/@sandeep_khariwal8137"} >   <FaYoutube style={{ fontSize: "2rem" }} /></Link>
                
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default NavBar;
