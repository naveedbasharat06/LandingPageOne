import React from "react";
import womenpic from "./images/woman.png";
import "./PercentageProgCard.css";
function PercentageProgCard() {
  return (
    <div className="percentageCard-main">
      <div className="PercentageCard">
        {/* Left Section */}
        <div className="percentageLeft-text">
          <h1 className="PercetageCard-heading">
            Achieve Your Dream Figure with Quick and Effective Workouts.
          </h1>
          <p className="PercetageCard-text">
            Please wait while we match you with the best routine for maximum fat
            loss...
          </p>
          {/* Progress Circle div */}
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
              {/* <span className="progressInter-Number text-center text-3xl font-bold text-blue-600"> */}
              {/* <p>67</p>% */}
              <span className="progress-font">65</span> %
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
    </div>
  );
}

export default PercentageProgCard;
