import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Khariwal software junction</h2>
            <p className="text-gray-400 mt-4 text-md">
              Building quality websites and mobile apps{" "}
              <br className="hidden lg:block " /> to help your business thrive
              online and <br className="hidden lg:block " />
              reach more customers.
            </p>
           
          </div>

          {/* Quick Links */}
          <div className="w-full px-auto md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white text-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 hover:text-white text-md"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white text-md"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white text-md"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <address className="w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-md ">Khariwal software junction</p>
            <p className="text-gray-400 text-md">
              Subhash colony, Near town park huda complex, opposite The sirsa
              school,Sirsa, Haryana, 125055
            </p>
            <p className="text-gray-400 text-md">
              Email: sandeepkhariwal01@gmail.com
            </p>
            <p className="text-gray-400 text-md">Phone: (+91) - 9416059799</p>
          </address>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Khariwal software junction. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
