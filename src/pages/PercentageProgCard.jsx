import React, { useState, useEffect } from "react";
import womenpic from "./images/woman.png";

import "./PercentageProgCard.css";
// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function PercentageProgCard({ onCircleCompleted }) {
  const [percentage, setPercentage] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (percentage < 67) {
  //       setPercentage((prev) => {
  //         const newValue = prev + 1;
  //         if (newValue === 67) {
  //           onCircleCompleted();
  //         }
  //         return newValue;
  //       });
  //     } else {
  //       clearInterval(interval);
  //     }
  //   }, 50);

  //   return () => clearInterval(interval);
  // }, [percentage]);

  const totalProgress = 67; // Displayed percentage (but mapped to 100% of the circle)
  const maxProgress = 100; // The circle should rotate for 100% but stop at 67%

  const radius = 16;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < totalProgress) {
          const newValue = prev + 1;
          if (newValue === totalProgress) {
            setTimeout(() => {
              onCircleCompleted();
            }, 400);
          }
          return newValue;
        }
        clearInterval(interval);
        return prev;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [percentage]);
  // Convert 67% into a full 100% stroke fill
  const progressOffset =
    circumference *
    ((maxProgress - (percentage / totalProgress) * 100) / maxProgress);

  // Dot positioning based on percentage
  const angle = ((percentage / totalProgress) * 360 * Math.PI) / 180;
  const dotX = 18 + radius * Math.cos(angle - Math.PI / 2);
  const dotY = 18 + radius * Math.sin(angle - Math.PI / 2);

  return (
    <div className="percentageCard-main mx-auto">
      <div className="PercentageCard">
        {/* Left Section */}
        <div className="percentageLeft-text text-start">
          <h1 className="PercetageCard-heading">
            Achieve Your Dream Figure with Quick and Effective Workouts.
          </h1>
          <p className="PercetageCard-text">
            Please wait while we match you with the best routine for maximum fat
            loss...
          </p>

          {/* Progress Circle div */}
          <div className="ProgressCircle-Percentage ">
            <svg
              // className="size-full"
              className="size-full -rotate-180"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18"
                cy="18"
                r={radius}
                fill="none"
                className="stroke-current text-gray-200"
                strokeWidth="1"
              ></circle>

              <circle
                cx="18"
                cy="18"
                r={radius}
                fill="none"
                className="stroke-current progressCircle-color "
                strokeWidth="1"
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
                strokeLinecap="round"
                transform="rotate(90 18 18)"
              />
              {/* Moving Dot */}
              <circle
                cx={dotX}
                cy={dotY}
                r="1.1"
                fill="#3EB8E5"
                transform="rotate(180 18 18)"
              />
            </svg>

            <div className="ProgressCircle-Content text-center absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <span className="progress-font">{percentage}</span>
              <span className="percentage-sign">%</span>
            </div>
          </div>
          {/* <div className="ProgressCircle-Percentage">
            <div className="ProgressCircle-Content">
              <CircularProgressbar
                className="progress-font"
                value={percentage}
                text={`${percentage} %`}
              />
             
            </div>
          </div> */}
        </div>
        <div className="ProgressCircle-Image-div">
          <img
            src={womenpic}
            alt="Fitness Woman"
            className="ProgressCircle-Image"
          />
        </div>
      </div>
    </div>
  );
}

export default PercentageProgCard;
