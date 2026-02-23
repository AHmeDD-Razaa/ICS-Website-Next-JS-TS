"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const links = ["Home", "Services", "About Us", "Portfolio", "Subscription", "Contact Us"];

  return (
    <div className="lg:hidden relative">
      {/* Hamburger button */}
      <button onClick={toggleNav} className="text-white text-xl" aria-label="Toggle Menu">
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Mobile menu */}
      {isOpen && (
         <ul className="
        fixed left-0 top-0
        h-auto w-40
        flex flex-col gap-6
      bg-[#29303E]
        p-6
        shadow-lg
        z-50
        ">
          {links.map((item, idx) => (
            <li key={idx} className="text-white font-mundial-medium hover:text-amber-500 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
