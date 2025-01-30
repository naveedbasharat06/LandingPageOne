// import logo from "./logo.svg";
import "./App.css";
// import Header from "./pages/Header";
import PaginatedCards from "./pages/QuizPagination";
// import PercentageProgCard from "./pages/PercentageProgCard";
import Header1 from "./pages/Header1";
import { useState } from "react";
function App() {
  // State to track which component to display
  const [selectedComponent, setSelectedComponent] = useState("Header1");
  const showPaginationCards = () => {
    setSelectedComponent("PaginatedCards");
  };
  return (
    <div className="App mx-auto">
      {selectedComponent === "Header1" && (
        <Header1 onGenderSelect={showPaginationCards} />
      )}
      {selectedComponent === "PaginatedCards" && <PaginatedCards />}
      {/* <Header /> */}
      {/* <PaginatedCards /> */}
      {/* <PercentageProgCard /> */}
    </div>
  );
}

export default App;
