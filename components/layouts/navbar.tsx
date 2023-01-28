"use client";

import { APP_NAME } from "config/app";
import { FaBars } from "react-icons/fa";
import { Fragment } from "react";
import { KOPI } from "mock/kopi";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const gotoElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Fragment>
      <nav className="w-full backdrop-blur-xl bg-gray-900/10 fixed">
        <div className="container h-20 flex mx-auto items-center justify-between px-5">
          <span className="text-3xl font-bold text-white">{APP_NAME}</span>
          {/* menu for desktop */}
          <div className="hidden md:flex gap- text-white">
            <button
              className="px-6 py-4 hover:bg-orange-500 hover:rounded-md"
              onClick={() => gotoElement("section-home")}
            >
              HOME
            </button>
            <button
              className="px-6 py-4 hover:bg-orange-500 hover:rounded-md"
              onClick={() => gotoElement("section-product")}
            >
              Product
            </button>
            <button
              className="px-6 py-4 hover:bg-orange-500 hover:rounded-md"
              onClick={() => gotoElement("section-about")}
            >
              About
            </button>
            <button
              className="px-6 py-4 hover:bg-orange-500 hover:rounded-md"
              onClick={() => gotoElement("section-contact")}
            >
              Contact
            </button>
          </div>
          {/* toggle button */}
          <div
            className="md:hidden text-white text-x px-5 py-5 hover:rounded-lg hover:bg-orange-500 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars />
          </div>
        </div>

        {/* mobile menu */}
        {isOpen && (
          <div className="flex flex-col md:hidden mx-auto text-center font-semibold text-white">
            <button
              className="px-6 py-4 hover:bg-orange-500 hover:rounded-md"
              onClick={() => gotoElement("section-home")}
            >
              HOME
            </button>
            <button
              className="px-6 py-4 hover:bg-orange-500 hover:rounded-md"
              onClick={() => gotoElement("section-product")}
            >
              Product
            </button>
            <button
              className="px-6 py-4 hover:bg-orange-500 hover:rounded-md"
              onClick={() => gotoElement("section-about")}
            >
              About
            </button>
            <button
              className="px-6 py-4 hover:bg-orange-500 hover:rounded-md"
              onClick={() => gotoElement("section-contact")}
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </Fragment>
  );
}
