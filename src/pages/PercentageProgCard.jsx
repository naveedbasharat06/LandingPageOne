import React from "react";
import womenpic from "./images/woman.png";
import "./PercentageProgCard.css";
function PercentageProgCard() {
  return (
    <>
      <div className="PercentageCard-main flex ">
        <div className="percentageLeft-text container mx-auto px-4 md:px-12 ml-4  items-center">
          <h1 className="text-3xl md:text-4xl font-medium text-black-300 leading-tight">
            Achieve Your Dream Figure with Quick and Effective Workouts.
          </h1>
          <p className="mt-4 text-lg text-black-600">
            Please wait while we match you with the best routine for maximum fat
            loss...
          </p>
          <div className="ProgressCircle-Percentage">
            <svg
              className="size-full -rotate-180"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <!-- Background Circle --> */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-gray-200"
                strokeWidth="1"
              ></circle>
              {/* <!-- Progress Circle --> */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-blue-600"
                strokeWidth="1"
                stroke-dasharray="100"
                stroke-dashoffset="35"
                strokeLinecap="round"
              ></circle>
            </svg>

            {/* <!-- Percentage Text --> */}
            <div className="ProgressCircle-Content absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <span className="progressInter-Number text-center text-3xl font-bold text-blue-600">
                <span className="progress-font">65</span> %
              </span>
            </div>
          </div>
        </div>
        <div className="ProgressCircle-Image-div">
          <img
            id="ProgressCircle-Image"
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
// <!-- Circular Progress -->
// <div className="relative size-40">
//   <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
//     <!-- Background Circle -->
//     <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2"></circle>
//     <!-- Progress Circle -->
//     <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600" strokeWidth="2" stroke-dasharray="100" stroke-dashoffset="75" strokeLinecap="round"></circle>
//   </svg>
// </div>
// <!-- End Circular Progress -->

// <!-- Circular Progress -->
// <div className="relative size-40">
//   <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
//     <!-- Background Circle -->
//     <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2"></circle>
//     <!-- Progress Circle -->
//     <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600" strokeWidth="2" stroke-dasharray="100" stroke-dashoffset="65" strokeLinecap="round"></circle>
//   </svg>

//   <!-- Percentage Text -->
//   <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
//     <span className="text-center text-2xl font-bold text-blue-600">35%</span>
//   </div>
// </div>
// <!-- End Circular Progress -->
