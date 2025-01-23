import React, { useState } from "react";
import headerImg01 from "../pages/images/headerImg01.png";
import MAYCLINIC from "../pages/images/mayoC.png";
import Vector from "../pages/images/Vector.png";
import VOGUF from "../pages/images/VOGUF.png";
import WallStreatJ from "../pages/images/wallstreetJ.png";
import WHLogo from "../pages/images/WHLogo.png";

import "./header.css"; // Import custom CSS for additional styling

const Header1 = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="header-container bg-gradient-to-r from-pink-200 via-orange-100 to-purple-200 ... mx-auto">
      {/* Header Section */}
      <div className="">
        {/* <div className="flex flex-col md:flex-row lg:flex-row items-center md:justify-between container mx-auto"> */}
        <div className=" flex flex-col md:flex-row lg:flex-row">
          {/* Text Section */}
          {/* <div className="z-20 w-full md:w-1/2 text-start md:text-left  context-container"> */}
          <div className="text-start md:text-left context-container">
            <div>
              <h1 className="responsive-heading text-3xl md:text-5xl font-bold font-Jost text-black">
                Achieve Your Dream Figure with Quick and Effective Workouts.
              </h1>
              <p
                className="mt-4 text-lg text-black-400"
                style={{ fontSize: "2.1rem", lineHeight: "2.1rem " }}
              >
                Take this 30-second quiz <br /> to find out how.
              </p>
            </div>
            <div className="checkboxBtns mt-8 flex lg:flex-row md:flex-col sm:flex-col gap-4">
              {/* Option 1: Women */}
              <button
                className={`w-full px-2 py-3 text-center font-medium rounded-lg relative ${
                  selectedOption === "women"
                    ? "bg-purple-500 text-white border-purple-500"
                    : "bg-white text-black border-gray-300"
                }`}
                onClick={() => handleOptionChange("women")}
              >
                <input
                  type="radio"
                  name="gender"
                  value="women"
                  className="absolute left-4 h-5 w-5 accent-purple-500"
                  checked={selectedOption === "women"}
                  onChange={() => handleOptionChange("women")}
                />
                ♀ Women Start Here
              </button>

              {/* Option 2: Men */}
              <button
                className={`w-full px-2 py-3 text-center font-medium rounded-lg relative ${
                  selectedOption === "men"
                    ? "bg-purple-500 text-white border-purple-500"
                    : "bg-white text-black border-gray-300"
                }`}
                onClick={() => handleOptionChange("men")}
              >
                <input
                  type="radio"
                  name="gender"
                  value="men"
                  className="absolute left-4 h-5 w-5 accent-purple-500"
                  checked={selectedOption === "men"}
                  onChange={() => handleOptionChange("men")}
                />
                ♂ Men Start Here
              </button>
            </div>
          </div>
          {/* <span className="mr-4">⚪</span> &emsp; ♀ Women Start Here */}
          {/* Image Section */}
          <div className="headerImg-div relative justify-center md:justify-left sm:justify-center">
            <img
              src={headerImg01}
              alt="Fitness Woman"
              className="header-image lg:pr-20"
            />
          </div>
        </div>
        {/* Footer Section */}
        {/* <div className="my-6"> */}
        <div className="logos-container mt-10 flex flex-wrap  lg:justify-between md:d-grid gap-2">
          <img src={WHLogo} alt="Women's Health" className="logo-item" />
          <img src={Vector} alt="Forbes" className="logo-item" />
          <img
            src={MAYCLINIC}
            alt="Mayo Clinic"
            className="logo-item"
            style={{ height: "65px" }}
          />
          <img
            src={WallStreatJ}
            alt="The Wall Street Journal"
            className="logo-item"
          />
          <img src={VOGUF} alt="Vogue" className="logo-item" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Header1;
