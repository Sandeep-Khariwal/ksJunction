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
      <div className="hidden lg:block w-[80%]">
        <div className="w-full m-auto p-6 flex justify-between items-center ">
          <div className="w-[20%] ">
            <Image
              src="/logo.png"
              alt="Description of image"
              width={80}
              height={80}
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
      <div className="lg:hidden w-full">
        <div className="w-full py-4 px-8 flex justify-between items-center  ">
          <Image
            src="/logo.png"
            alt="Description of image"
            width={80}
            height={80}
          />
          {open ? (
            <MdClose
              onClick={() => setOpen(!open)}
              style={{ fontSize: "2rem", marginTop: "-0.5rem" }}
            />
          ) : (
            <FaBarsStaggered
              onClick={() => setOpen(!open)}
              style={{ fontSize: "1.5rem" }}
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
                  className="font-semibold font-OpenSans transition duration-300 transform hover:scale-105 hover:text-purple-500"
                >
                  Home
                </motion.a>
                <motion.a
                  initial={{ x: "50%", opacity: 1 }}
                  whileInView={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  href="#about"
                  className="font-semibold font-OpenSans transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-500"
                >
                  About
                </motion.a>
                <motion.a
                  initial={{ x: "50%", opacity: 1 }}
                  whileInView={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 2 }}
                  href="#services"
                  className="font-semibold font-OpenSans transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-500"
                >
                  Services
                </motion.a>
                <motion.a
                  initial={{ x: "50%", opacity: 1 }}
                  whileInView={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 2.5 }}
                  href="#course"
                  className="font-semibold font-OpenSans transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-500"
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
                <FaInstagram style={{ fontSize: "2rem" }} />
                <FaLinkedinIn style={{ fontSize: "2rem" }} />
                <FaFacebookF style={{ fontSize: "2rem" }} />
                <FaYoutube style={{ fontSize: "2rem" }} />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default NavBar;
