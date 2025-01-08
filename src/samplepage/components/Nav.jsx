import React from "react";

export default function Nav() {
  return (
    <div className="bg-gray-800 text-white">
      <div className="flex justify-between w-full p-4">
        <a href="#home" className="hover:text-gray-300 text-center w-full">
          Home
        </a>
        <a href="#about" className="hover:text-gray-300 text-center w-full">
          About
        </a>
        <a href="#services" className="hover:text-gray-300 text-center w-full">
          Services
        </a>
        <a href="#contact" className="hover:text-gray-300 text-center w-full">
          Contact
        </a>
      </div>
    </div>
  );
}
