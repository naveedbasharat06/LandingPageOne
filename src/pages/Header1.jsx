import React from "react";
import headerImg01 from "../pages/images/headerImg01.png";
import MAYCLINIC from "../pages/images/mayoC.png";
import Vector from "../pages/images/Vector.png";
import VOGUF from "../pages/images/VOGUF.png";
import WallStreatJ from "../pages/images/wallstreetJ.png";
import WHLogo from "../pages/images/WHLogo.png";

import "./header.css"; // Import custom CSS for additional styling

const Header1 = () => {
  return (
    <div className="header-container mx-auto">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-yellow-100 via-pink-200 to-purple-300">
        {/* <div className="flex flex-col md:flex-row lg:flex-row items-center md:justify-between container mx-auto"> */}
        <div className="flex flex-col md:flex-row lg:flex-row ">
          {/* Text Section */}
          <div className="z-20 w-full md:w-1/2 text-start md:text-left pt-16 pl-16 context-container">
            <h1 className="responsive-heading text-3xl md:text-5xl font-bold font-Jost text-black">
              Achieve Your Dream Figure with Quick and Effective Workouts.
            </h1>

            <p
              className="mt-4 text-lg text-black-400"
              style={{ fontSize: "2.1rem", width: "390px" }}
            >
              Take this 30-second quiz to find out how.
            </p>
            <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-6 pb-8">
              <button className="cta-button w-full md:w-auto px-10 py-6 flex items-center justify-center text-sm font-small text-black bg-white rounded-lg hover:bg-gray-100 shadow-md">
                <span className="mr-4">⚪</span> &emsp; ♀ Women Start Here
              </button>
              <button className="cta-button w-full md:w-auto px-10 py-6 flex items-center justify-center text-sm font-small text-black bg-white border rounded-lg hover:bg-gray-400 shadow-md">
                <span className="mr-4">⚪</span>&emsp; ♂ Men Start Here
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative  justify-center justify-start md:justify-center lg:mr-20">
            <img
              src={headerImg01}
              alt="Fitness Woman"
              className="header-image w-full  rounded-xl "
            />
          </div>
        </div>

        {/* Footer Section */}
        <div className="logos-container mt-10 flex flex-wrap items-center lg:justify-between gap-6">
          <img src={WHLogo} alt="Women's Health" className="logo-item" />
          <img src={Vector} alt="Forbes" className="logo-item" />
          <img src={MAYCLINIC} alt="Mayo Clinic" className="logo-item" />
          <img
            src={WallStreatJ}
            alt="The Wall Street Journal"
            className="logo-item"
          />
          <img src={VOGUF} alt="Vogue" className="logo-item" />
        </div>
      </div>
    </div>
  );
};

export default Header1;
