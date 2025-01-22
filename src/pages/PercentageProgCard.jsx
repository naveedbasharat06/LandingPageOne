import React from "react";
import womenpic from "./images/woman.png";
function PercentageProgCard() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 via-pink-300 to-purple-200">
        <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center">
          <h1 className="text-3xl md:text-4xl font-medium text-black-300 leading-tight">
            Achieve Your Dream Figure with Quick and Effective Workouts.
          </h1>
          <p className="mt-4 text-lg text-black-600">
            Take this 30-second quiz to find out how
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0  justify-center">
          <img
            src={womenpic}
            alt="Fitness Woman"
            className="w-full max-w-sm md:max-w-lg rounded-xl"
          />
        </div>
      </div>
    </>
  );
}

export default PercentageProgCard;
