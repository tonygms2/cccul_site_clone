import Logo from "assets/images/logo/logocccul.png";
import LogoWhite from "assets/images/logo/white_logo.png";
import useScrollPosition from "lib/useScrollPosition";
import { useState } from "react";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import LoginModal from "../login/LoginModal";
function Header() {
  const SCROLL_VALUE = 60;
  const isScrolled = useScrollPosition(SCROLL_VALUE);

  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="sticky top-0 z-50 w-full bg-surface lg:bg-transparent">
      {/**Top Header */}
      <div
        className={`hidden ${
          isScrolled && "hidden"
        } bg-background lg:block w-full`}
      >
        <div className="flex container mx-auto justify-between  ">
          <ul className=" flex justify-start justify-items-stretch gap-6 py-4 font-semibold text-stone-600">
            <li className="hover:scale-105">
              <a href="/">Office Bearers</a>
            </li>
            <li className="hover:scale-105">
              <a href="/">Board of Directors</a>
            </li>
            <li className="hover:scale-105">
              <a href="/">Credit Committee</a>
            </li>
            <li className="hover:scale-105">
              <a href="/">Supervisory Committee</a>
            </li>
          </ul>
          <ul className="flex gap-2 items-center ">
            <li className="h-8 w-8 group rounded-full bg-surface shadow-lg hover:scale-125 hover:text-primary flex items-center justify-center duration-150 transition-all">
              <a
                target="_blank"
                href="https://www.facebook.com/dhakacredit"
                rel="noreferrer noopener"
              >
                <FaFacebookF className="fill-primary group-hover:fill-error" />
              </a>
            </li>
            <li className="h-8 w-8 group rounded-full bg-surface shadow-lg hover:scale-125 hover:text-primary flex items-center justify-center duration-150 transition-all">
              <a
                className=""
                href="tel:+8809678771270"
                data-url="tel:+8809678771270"
              >
                <BsFillPhoneVibrateFill className="text-xl fill-primary group-hover:fill-error" />
              </a>
            </li>
            <li className="h-8 w-8 group rounded-full bg-surface shadow-lg hover:scale-125 hover:text-primary flex items-center justify-center duration-150 transition-all">
              <a className="" href="mailto: info@cccul.com">
                <MdAttachEmail className="text-xl fill-primary group-hover:fill-error" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`${
          isScrolled ? "md:bg-surface " : "lg:text-surface "
        } text-primary relative`}
      >
        {" "}
        {/*container mx-auto flex flex-col md:flex-row items-center justify-between */}
        <nav className="flex justify-between container mx-auto">
          <NavLink to="/">
            <img
              className="w-15 m-3 h-12 rounded-lg"
              src={isScrolled ? Logo : LogoWhite}
              alt=""
            />
          </NavLink>

          <div className={`md:hidden  ${isOpen && "z-50"} `}>
            <button
              className={`inline-flex  items-center p-2 m-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}
              onClick={toggleMenu}
            >
              <svg
                className="m-3 h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`${
              isOpen
                ? "md:block w-full md:w-auto bg-surface inset-0 h-screen absolute"
                : "hidden"
            }  sm:flex sm:items-center sm:justify-center`}
          >
            <ul className="inset-0 flex flex-col lg:flex-row items-center">
              <li className="nav-style inline-block">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-style inline-block">
                <NavLink to="/services">Services</NavLink>
              </li>
              <li className="nav-style inline-block">
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li className="nav-style inline-block">
                <NavLink to="/loans">Loans</NavLink>
              </li>
              <li className="nav-style inline-block">
                <NavLink to="/deposits">Deposits</NavLink>
              </li>
              <li className="nav-style inline-block">
                <NavLink to="/career">Career</NavLink>
              </li>
              <li className="nav-style inline-block">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="nav-style inline-block">
                <NavLink to="/notice">Notice</NavLink>
              </li>
              <li className="nav-style inline-block">
                <NavLink to="/faq">FAQs</NavLink>
              </li>
              <li className="nav-style inline-block">
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li className="nav-style inline-block">
                <button
                  onClick={() => setShow((s) => !s)}
                  className="rounded bg-indigo-900 py-2 px-4 font-bold text-zinc-200 transition duration-[102ms] hover:scale-110"
                >
                  Member Login
                </button>
                <LoginModal show={show} closeModal={() => setShow(false)} />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

/**
 *  <nav className="container mx-auto  flex items-center justify-between">
          <NavLink to="/">
            <img
              className="w-15 m-3  h-12 rounded-lg"
              src={isScrolled ? Logo : LogoWhite}
              alt=""
            />
          </NavLink>

          <div className="sm:z-60 flex flex-row ">
            <div className="flex flex-col  gap-6 md:flex-row lg:block">
              <ul className="inset-0 flex flex-col lg:flex-row items-center">
                <li className="nav-style inline-block">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-style inline-block">
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li className="nav-style inline-block">
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li className="nav-style inline-block">
                  <NavLink to="/loans">Loans</NavLink>
                </li>
                <li className="nav-style inline-block">
                  <NavLink to="/deposits">Deposits</NavLink>
                </li>
                <li className="nav-style inline-block">
                  <NavLink to="/career">Career</NavLink>
                </li>
                <li className="nav-style inline-block">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="nav-style inline-block">
                  <NavLink to="/notice">Notice</NavLink>
                </li>
                <li className="nav-style inline-block">
                  <NavLink to="/faq">FAQs</NavLink>
                </li>
                <li className="nav-style inline-block">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="nav-style inline-block">
                  <button className="rounded bg-indigo-900 py-2 px-4 font-bold text-zinc-200 transition duration-[102ms] hover:scale-110">
                    <NavLink to="/login"> Member Login</NavLink>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
 */
