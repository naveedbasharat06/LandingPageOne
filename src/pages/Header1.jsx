import React, { useState } from "react";
import headerImg01 from "../pages/images/headerImg01.png";
import MAYCLINIC from "../pages/images/mayoC.png";
import Vector from "../pages/images/Vector.png";
import VOGUF from "../pages/images/VOGUF.png";
import WallStreatJ from "../pages/images/wallstreetJ.png";
import WHLogo from "../pages/images/WHLogo.png";

import "./header.css"; // Import custom CSS for additional styling

const Header1 = ({ onGenderSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (option) => {
    // setSelectedOption(option);
    // Toggle the selected option if it's already selected
    setSelectedOption((prev) => (prev === option ? "" : option));
    onGenderSelect();
  };
  return (
    <div className="header-container  mx-auto">
      {/* Header Section */}

      <div className="contextAndHeaderImage_div">
        {/* Text Section */}
        <div className="text-start context-container">
          <div>
            <h1 className="responsive-heading font-Jost text-black">
              Achieve Your Dream Figure with Quick and Effective Workouts.
            </h1>
            <p className="header-text text-black-400">
              Take this 30-second quiz <br /> to find out how
            </p>
          </div>
          <div className="checkboxBtn-div flex lg:flex-row md:flex-col sm:flex-col gap-4">
            {/* <div className="checkboxBtn-div gap-4"> */}
            {/* Option 1: Women */}
            <button
              className={`radioBtn w-full px-3 py-3 text-center font-medium rounded-lg relative ${
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
                className="absolute left-4 h-6 w-6 accent-purple-500"
                checked={selectedOption === "women"}
                onChange={() => handleOptionChange("women")}
              />
              ♀ &nbsp; Women Start Here
            </button>

            {/* Option 2: Men */}
            <button
              className={`radioBtn w-full px-3 py-3 text-center font-medium rounded-lg relative ${
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
                className="absolute left-4 h-6 w-6 accent-purple-500"
                checked={selectedOption === "men"}
                onChange={() => handleOptionChange("men")}
              />
              ♂ &nbsp; Men Start Here
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="headerImg-div">
          <img src={headerImg01} alt="Fitness Woman" className="header-image" />
        </div>
      </div>
      {/* Footer Section */}
      {/* Logos for large device */}
      <div className="logos-container flex flex-wrap lg:justify-between md:d-grid sm:d-grid gap-2">
        <img
          src={WHLogo}
          alt="Women's Health"
          className="logo-item"
          id="WHLogo"
        />
        <img src={Vector} alt="Forbes" className="logo-item" id="Forbes" />
        <img
          src={MAYCLINIC}
          alt="Mayo Clinic"
          className="logo-item"
          id="MAYCLINIC"
        />
        <img
          src={WallStreatJ}
          alt="The Wall Street Journal"
          className="logo-item"
          id="WallStreatJ"
        />
        <img src={VOGUF} alt="Vogue" className="logo-item" id="Vogue" />
      </div>
      {/* Mobile View Logos Design */}
      <div className="logos-container-4Mobile">
        <div className="top_row_logos flex d-flex">
          <img
            src={WHLogo}
            alt="Women's Health"
            className="logo-item"
            id="WHLogo"
          />
          <img src={Vector} alt="Forbes" className="logo-item" id="Forbes" />
        </div>
        <div className="bottom_row_logos flex d-flex">
          <img src={VOGUF} alt="Vogue" className="logo-item" id="Vogue" />
          <img
            src={WallStreatJ}
            alt="The Wall Street Journal"
            className="logo-item"
            id="WallStreatJ"
          />

          <img
            src={MAYCLINIC}
            alt="Mayo Clinic"
            className="logo-item"
            id="MAYCLINIC"
          />
        </div>
      </div>
    </div>
  );
};

export default Header1;
