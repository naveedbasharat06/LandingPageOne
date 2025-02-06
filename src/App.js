import "./App.css";
import PaginatedCards from "./pages/QuizPagination";
import PercentageProgCard from "./pages/PercentageProgCard";
import Header1 from "./pages/Header1";
import QuizContent from "./pages/QuizContent";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import QuizFooter from "./pages/QuizFooter";
function App() {
  // State to track which component to display
  const [selectedComponent, setSelectedComponent] = useState("Header1");
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [circleCompleted, setcircleCompleted] = useState(false);
  const showPaginationCards = () => {
    setSelectedComponent("PaginatedCards");
  };
  const handleQuizCompletion = () => {
    setQuizCompleted(true);
  };
  const handleCircleComplete = () => {
    setcircleCompleted(true);
  };
  return (
    <>
      <div className="App mx-auto">
        <AnimatePresence mode="wait">
          {selectedComponent === "Header1" && (
            <motion.div
              key="Header1"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 1 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              <Header1 onGenderSelect={showPaginationCards} />
            </motion.div>
          )}
          {selectedComponent === "PaginatedCards" && (
            <motion.div
              key={"PaginatedCards"}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: -100 }}
              transition={{ duration: 1 }}
            >
              {!quizCompleted && (
                <PaginatedCards onComplete={handleQuizCompletion} />
              )}
            </motion.div>
          )}
          {quizCompleted && !circleCompleted && (
            <motion.div
              key="PercentageProgCard"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 2 }}
            >
              <PercentageProgCard onCircleCompleted={handleCircleComplete} />
            </motion.div>
          )}
          {circleCompleted && (
            <motion.div
              key="QuizContent"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 2 }}
            >
              <QuizContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <QuizFooter />
    </>
  );
}
export default App;
// https://www.npmjs.com/package/react-circular-progressbar
// https://codesandbox.io/p/sandbox/react-circular-progress-bar-pxepje?file=%2Fsrc%2FApp.js%3A10%2C30
