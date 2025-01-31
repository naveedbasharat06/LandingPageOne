import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./QuizPagination.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
const cardsData = [
  {
    id: 1,
    title: "Achieve Your Dream Figure with Quick and Effective Workouts.",
    description: "Do you think hours of cardio is beneficial for fat loss??",
    subText: "(Many people think doing cardio every day is the answer).",
    options: ["true", "false", "Not sure"],
    correct: "true",
  },
  {
    id: 2,
    title: "Achieve Your Dream Figure with Quick and Effective Workouts.",
    description:
      "If there was a 7-minute routine to get you fit, would you want to add it to your daily routine?",
    subText:
      "(Certain exercise routines can help ignite your metabolism for faster fat burn).",
    options: ["Definatily", "Maybe", "Not Sure"],
    correct: "194Definatily7",
  },
  {
    id: 3,
    title: "Achieve Your Dream Figure with Quick and Effective Workouts.",
    description: "What is the full form of HTML?",
    subText: "(Knowing basic web terms can help you in development).",
    options: ["HyperText Markup Language", "HyperType Value", "Not sure"],
    correct: "HyperText Markup Language",
  },
  {
    id: 4,
    title: "Achieve Your Dream Figure with Quick and Effective Workouts.",
    description:
      "Which of the following activites improves aerobic endurance the most?",
    subText: "(Knowing basic web terms can help you in development).",
    options: ["Stretching", "Weightliting", "Swimming", "Archery"],
    correct: "Swimming",
  },
  {
    id: 4,
    title: "The ability to maintain equilibrium when stationary or moving:",
    description:
      "The ability to maintain equilibrium when stationary or moving:",
    subText: "(Knowing basic web terms can help you in development).",
    options: ["Accuracy", "Flexibility", "Balance", "Agility"],
    correct: "Balance",
  },
];

const PaginatedCards = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answered, setAnswered] = useState(false);

  const handleNext = () => {
    if (currentCardIndex < cardsData.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setAnswered(false); // Reset answered state when moving to next question
      setSelectedOption(""); // Clear selected option
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setAnswered(false); // Reset answered state when moving to previous question
      setSelectedOption(""); // Clear selected option
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setAnswered(true);
  };

  const checkAnswer = () => {
    return selectedOption === cardsData[currentCardIndex].correct;
  };

  const progressPercentage = ((currentCardIndex + 1) / cardsData.length) * 100;

  return (
    <div className="main-container">
      <div className="paginationCard-main  flex items-center justify-center">
        <AnimatePresence>
          <div className="Quiz_Card w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w- bg-white rounded-lg shadow-lg my-6 p-3">
            {/* Card Content */}

            <h1 className="Quiz-title  text-gray-800 leading-tight">
              {cardsData[currentCardIndex].title}
            </h1>
            <div className="Quiz-progress-bar bg-gray-300 rounded-full h-5  ">
              <div
                className={` bg-purple-500 h-5 rounded-l-lg bg-gradient-to-l from-yellow-400 via-pink-400 to-purple-400 ${
                  progressPercentage === 100 ? "rounded-r-lg" : ""
                }`}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="Quiz-description text-black-400 font-medium ">
              {cardsData[currentCardIndex].description}
            </p>
            <p className="Quiz-subText mt-2 text-gray-500 text-x1 mx-4">
              {cardsData[currentCardIndex].subText}
            </p>
            {/* Options */}
            <div className="mt-4 space-y-6 Quiz-options-div">
              {cardsData[currentCardIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`Quiz-option text-center font-medium rounded-lg border-2 relative  ${
                    selectedOption === option
                      ? checkAnswer()
                        ? "bg-green-400 text-white"
                        : "bg-pink-400 text-white"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                  disabled={answered}
                >
                  <input
                    type="radio"
                    className="Quiz-option-radioBtn absolute left-4 mr-3 h-6 w-5  text-purple-900 border-gray-300 text-left  focus:ring-purple-500"
                    checked={selectedOption === option}
                    readOnly
                  />
                  {option}
                </button>
              ))}
            </div>
            <hr className="custom-hr" />
            {/* Navigation Buttons */}
            <div className="Quiz-Navigation-Btn mt-8 flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentCardIndex === 0}
                className={`px-4 py-2 text-black font-medium rounded-lg ${
                  currentCardIndex === 0 ? "bg-red-200 cursor-not-allowed" : ""
                }`}
              >
                <SlArrowLeft style={{ fontSize: "20px" }} />
              </button>
              {`${currentCardIndex + 1} / ${cardsData.length}`}
              <button
                onClick={handleNext}
                disabled={currentCardIndex === cardsData.length - 1}
                className={`px-4 py-2 text-black font-medium rounded-lg ${
                  currentCardIndex === cardsData.length - 1
                    ? "bg-red-200 cursor-not-allowed"
                    : ""
                }`}
              >
                <SlArrowRight style={{ fontSize: "20px" }} />
              </button>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PaginatedCards;
