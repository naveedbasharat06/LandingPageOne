import "./App.css";
import PaginatedCards from "./pages/QuizPagination";
import PercentageProgCard from "./pages/PercentageProgCard";
import Header1 from "./pages/Header1";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
function App() {
  // State to track which component to display
  const [selectedComponent, setSelectedComponent] = useState("Header1");
  const showPaginationCards = () => {
    setSelectedComponent("PaginatedCards");
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
              key={PaginatedCards}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: -100 }}
              transition={{ duration: 1 }}
            >
              <PaginatedCards />
            </motion.div>
          )}
        </AnimatePresence>
        {/* <br /> */}
        {/* <PercentageProgCard /> */}
      </div>
    </>
  );
}
export default App;
