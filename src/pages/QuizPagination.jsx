import React, { useState } from "react";
// import headerImg01 from "../pages/images/headerImg01.png";
// import MAYCLINIC from "../pages/images/mayoC.png";
// import Vector from "../pages/images/Vector.png";
// import VOGUF from "../pages/images/VOGUF.png";
// import WallStreatJ from "../pages/images/wallstreetJ.png";
// import WHLogo from "../pages/images/WHLogo.png";

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
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-pink-300 to-purple-200 flex items-center justify-center py-8 px-4">
      <div className=" w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w- bg-white rounded-lg shadow-lg my-6 p-3">
        {/* Card Content */}
        <h1 className="text-2xl font-medium text-gray-800 leading-tight mx-4">
          {cardsData[currentCardIndex].title}
        </h1>
        <div className="w-full bg-gray-300 rounded-full h-4 mb-6 mt-2  ">
          <div
            className="bg-purple-500 h-4 rounded-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="mt-4 text-black-400 font-bold  mx-4">
          {cardsData[currentCardIndex].description}
        </p>

        <p className="mt-2 text-gray-500 text-sm mx-4">
          {cardsData[currentCardIndex].subText}
        </p>

        {/* Options */}
        <div className="mt-4 space-y-4">
          {cardsData[currentCardIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`w-full px-6 py-3 text-center font-medium rounded-lg border-2 relative  ${
                selectedOption === option
                  ? checkAnswer()
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
              disabled={answered}
            >
              <input
                type="radio"
                className="absolute left-4 mr-3 h-5 w-5 text-purple-500 border-gray-300 text-left  focus:ring-purple-500"
                checked={selectedOption === option}
                readOnly
              />
              {option}
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentCardIndex === 0}
            className={`px-4 py-2 text-white font-medium rounded-lg ${
              currentCardIndex === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-purple-500 hover:bg-purple-600"
            }`}
          >
            ◀
          </button>
          {`${currentCardIndex + 1} / ${cardsData.length}`}
          <button
            onClick={handleNext}
            disabled={currentCardIndex === cardsData.length - 1}
            className={`px-4 py-2 text-white font-medium rounded-lg ${
              currentCardIndex === cardsData.length - 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-purple-500 hover:bg-purple-600"
            }`}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginatedCards;
