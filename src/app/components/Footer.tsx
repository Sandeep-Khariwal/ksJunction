// components/Footer.js

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-20 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold">Khariwal software junction</h2>
            <p className="text-gray-400 mt-4 text-xl">
              Building quality websites and mobile apps <br/> to help your business thrive online and <br/>reach more customers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full px-auto md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-xl">Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-xl">About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-xl">Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-xl">Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-xl ">Khariwal software junction</p>
            <p className="text-gray-400 text-xl">Sirsa, Haryana, ITI chowk, 125055</p>
            <p className="text-gray-400 text-xl">Email: sandeepkhariwal01@gmail.com</p>
            <p className="text-gray-400 text-xl">Phone: (+91) - 9416059799</p>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Khariwal software junction. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
