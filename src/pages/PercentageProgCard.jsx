import React, { useState, useEffect } from "react";
import womenpic from "./images/woman.png";

import "./PercentageProgCard.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function PercentageProgCard() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 67) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);
  const percetageSign = `<span style={{fontSize:'16px'}}>%</span>`;
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
          {/* <div className="ProgressCircle-Percentage">
            <svg
              className="size-full -rotate-180"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-gray-200"
                strokeWidth="1"
              ></circle>
             
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current progressCircle-color"
                strokeWidth="1"
                stroke-dasharray="100"
                stroke-dashoffset="0"
                strokeLinecap="round"
              ></circle>
            </svg>

           
            <div className="ProgressCircle-Content absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
             
              <span className="progress-font">67</span>
              <span className="percentage-sign">%</span>
            </div>
          </div> */}
          <div className="ProgressCircle-Percentage">
            <div className="ProgressCircle-Content">
              <CircularProgressbar
                className="progress-font"
                value={percentage}
                text={`${percentage} %`}
              />
              {/* <span className="percentage-sign">%</span> */}
            </div>
          </div>
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
