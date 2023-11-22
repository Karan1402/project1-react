// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Example import statements in another file (e.g., App.js)
import Login from "./components/login"; // Adjust the path based on your structure
import Navbar from "./components/Navbar"; // Adjust the path based on your structure
import Registration from "./components/Registration";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <div className="container my-3">
          <Routes>
            {<Route exact path="/" element={<Login />}></Route>}
            {
              <Route
                exact
                path="/registration"
                element={<Registration />}
              ></Route>
            }
            {<Route exact path="/login" element={<Login />}></Route>}
            {/* {<Route exact path="/contact" element={<Contact />}></Route>} */}
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
