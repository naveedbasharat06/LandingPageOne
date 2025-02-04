import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./QuizPagination.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
const cardsData = [
  {
    id: 1,
    title: "Achieve Your Dream Figure with Quick and Effective Workouts.",
    description: "Do you think hours of cardio is beneficial for fat loss?",
    subText: "(Many people think doing cardio every day is the answer.)",
    options: ["Yes", "No", "Not sure"],
    correct: "Yes",
  },
  {
    id: 2,
    title: "Achieve Your Dream Figure with Quick and Effective Workouts.",
    description:
      "If there was a 7-minute routine to get you fit, would you want to add it to your daily routine?",
    subText:
      "(Certain exercise routines can help ignite your metabolism for faster fat burn).",
    options: ["Definatily", "Maybe", "Not Sure"],
    correct: "Definatily",
  },
];

const PaginatedCards = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answered, setAnswered] = useState(false);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    if (currentCardIndex < cardsData.length - 1) {
      setDirection(1);
      setCurrentCardIndex(currentCardIndex + 1);
      setAnswered(false); // Reset answered state when moving to next question
      setSelectedOption(""); // Clear selected option
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setDirection(-1);
      setCurrentCardIndex(currentCardIndex - 1);
      setAnswered(false); // Reset answered state when moving to previous question
      setSelectedOption(""); // Clear selected option
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // setAnswered(true);
  };

  const checkAnswer = () => {
    return selectedOption === cardsData[currentCardIndex].correct;
  };

  const progressPercentage = ((currentCardIndex + 1) / cardsData.length) * 100;

  return (
    <div className="main-container">
      <div className="paginationCard-main flex items-center justify-center">
        <div className="Quiz_Card bg-white shadow-lg my-0 p-3">
          {/* Card Content */}
          {/* Animated Card */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentCardIndex}
              initial={{ x: direction * 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -direction * 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 30 }}
              className="text-center"
            >
              <h1 className="Quiz-title text-gray-800 leading-tight">
                {cardsData[currentCardIndex].title}
              </h1>
              <div className="Quiz-progress-bar bg-gray-300 rounded-full h-5">
                <div
                  className={`rounded-l-lg bg-purple-500 h-5 w-full bg-[linear-gradient(90deg,_rgba(233,99,159,1)_0%,_rgba(129,67,226,1)_73%)]`}
                  style={{
                    width: `${
                      progressPercentage === 50
                        ? progressPercentage - 35
                        : progressPercentage - 75
                    }%`,
                  }}
                >
                  {/* {progressPercentage}% */}
                </div>
              </div>
              <p className="Quiz-description text-black-400 font-medium">
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
                    className={`Quiz-option text-center font-medium rounded-lg border-2 relative ${
                      selectedOption === option
                        ? checkAnswer()
                          ? "customBtnStyle text-white border-0"
                          : "customBtnStyle text-white border-0"
                        : // ? "bg-green-400 text-white"
                          // : "bg-pink-400 text-white"
                          "bg-white text-gray-800 hover:bg-gray-100"
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
            </motion.div>
          </AnimatePresence>
          <hr className="custom-hr" />
          {/* Navigation Buttons */}
          <div className="Quiz-Navigation-Btn mt-8 flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentCardIndex === 0}
              className={`px-4 py-2 text-black font-medium rounded-lg`}
            >
              <SlArrowLeft style={{ fontSize: "28px", color: "#575757" }} />
            </button>
            {`${currentCardIndex + 2}/5`}
            <button
              onClick={handleNext}
              disabled={currentCardIndex === cardsData.length - 1}
              className={`px-4 py-2 text-black font-medium rounded-lg`}
            >
              <SlArrowRight style={{ fontSize: "28px", color: "#575757" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginatedCards;
