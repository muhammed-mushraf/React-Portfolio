import React from "react";
import logo from "../assets/m.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/muhammed-mushraf/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href=" https://github.com/muhammed-mushraf "
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black"
        >
          <FaGithub />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919539840277"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
