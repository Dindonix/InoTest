import { constants } from "http2";
import { useState } from "react";

import "../../App.css";

const FakeNavBar:React.FC<Props> = ({activeStep2, setActiveStep2}) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full burgerStyle2 transition ease transform duration-300`;

  const closeMenu: void = () => {
    setIsMenuOpen(false);
  };

  const handlePreviousPage = () => {
    const previousStep: number = Math.max(activeStep2 - 1, 0);
    setActiveStep2(previousStep);
  }  

  const handleNextPage = () => {
    const nextStep: number = Math.min(activeStep2 + 1, 1);
    setActiveStep2(nextStep);
  }

  return (
    <>
      <nav className="h-[2rem] flex justify-between px-4 py-8">
      <div className="relative md:hidden flex items-start mr-[-1rem]">
          <button
            className="flex flex-col h-12 w-12 rounded justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isMenuOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${isMenuOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"}`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isMenuOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
          </button>

          <ul
            className={`menu right-0 w-36 mr-2 buttonClass2 rounded-lg shadow-md ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <button type="button" onClick={closeMenu, handlePreviousPage} className="block px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105">
                Home
              </button>
            </li>
            <li>
              <button type="button" onClick={closeMenu, handleNextPage} className="block px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105">
                Contact
              </button>
            </li>
          </ul>
        </div>

        <ul className="menu hidden md:flex md:items-end mt-5 windowStyle">
          <li>
            <button
              type="button"
              className="block px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              onClick={handlePreviousPage}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              className="block px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              onClick={handleNextPage}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};


export default FakeNavBar;