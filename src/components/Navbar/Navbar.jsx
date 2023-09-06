import React from "react";
import "./Navbar.modal.css";

const Navbar = () => {
  // navUl flex items-center justify-between  gap-20

  return (
    <nav className="hidden sm:block">
      <ul className=" navUl flex items-center justify-between  gap-20">
        <li className="navLi">
          <a
            href=""
            className="text-center text-[#FA4A0C] text-lg font-semibold leading-7 tracking-tight">
            Home
          </a>
        </li>
        <li className="navLi">
          <a
            href=""
            className="text-center text-slate-800 text-lg font-semibold leading-7 tracking-tight">
            Product
          </a>
        </li>
        <li className="navLi">
          <a
            href=""
            className="text-center text-slate-800 text-lg font-semibold leading-7 tracking-tight">
            Faq
          </a>
        </li>
        <li className="navLi">
          <a
            href=""
            className="text-center text-slate-800 text-lg font-semibold leading-7 tracking-tight">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
