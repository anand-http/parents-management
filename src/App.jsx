// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddParents from "./components/addParents";
import ParentsDetailsPage from "./components/parentsDetailsPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Main Layout Route */}
          <Route path="/" element={<AddParents />} />
          <Route path="/parents-details" element={<ParentsDetailsPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
