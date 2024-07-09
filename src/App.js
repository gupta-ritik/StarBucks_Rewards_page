import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import Gift from "./Gift";
import Home from "./Home";
import Header from "./containers/Header";
// import LowerHeader from "./components/Header/LowerHeader";
function App() {
  return (
    <Router>
      <div className="myapp">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gift" element={<Gift />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
