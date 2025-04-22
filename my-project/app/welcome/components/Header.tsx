import { Link } from "react-router";
import Logo from "./assets/Logo (1).png";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import Burger from "./assets/Burger.png";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <header className="flex w-full justify-center h-20 pl-10 z-50">
        <nav className="grid grid-flow-col items-center justify-between w-[1200px]">
          <h1>
            <img src={Logo} alt="Logo" width={"80px"} />
          </h1>

          <ul
            className={`flex gap-6 max-md:fixed max-md:top-0 max-md:h-screen max-md:w-[60%]
               max-md:transition-all max-md:duration-300 max-md:p-10 max-md:flex max-md:flex-col max-md:gap-14
            ${isMenuOpen ? "max-md:right-0 bg-[rgb(255,255,255,0.9)]" : "max-md:right-[-100%]"}`}
          >
            <li className="text-2xl ">
              <a href="#Home" className="underline" onClick={closeMenu}>Home</a>
            </li>
            <li className="text-2xl text-gray-500">
              <a href="#Education " onClick={closeMenu}>About</a>
            </li>
            <li className="text-2xl text-gray-500">
              <a href="#Skills" onClick={closeMenu}>Contact Us</a>
            </li>
            <li className="text-2xl text-gray-500">
              <a href="#Projects" onClick={closeMenu}>Blog</a>
            </li>
            <li className="text-2xl text-gray-500 min-md:hidden">
              <a href="#Projects" onClick={closeMenu}>profile</a>
            </li>
          </ul>

          
          <div className="flex gap-6 mr-6 max-md:hidden">
            <Link to={""} className="text-2xl">
              <FaRegHeart />
            </Link>
            <Link to={""} className="text-2xl">
              <BsCart3 />
            </Link>
            <Link to={""} className="text-2xl">
              <FaRegUser />
            </Link>
          </div>
        </nav>

        {/* Burger Button (same icon, toggles menu) */}
        <div className="max-md:block hidden right-6 absolute  top-5 z-50">
          <button onClick={toggleMenu}>
            <img
              src={Burger}
              alt="Menu Toggle"
              className={`w-9 cursor-pointer transition-transform duration-300`}
            />
          </button>
        </div>
      </header>
    </div>
  );
}
