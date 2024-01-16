import React from "react";
// import './App.css';
import Crud from "./crud/index";
import Crudtwo from "./crudtwo/index";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarC from "./crud/NavbarC";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarC />
        <Routes>
          <Route path="/books" element={<Crud />} />
          <Route path="/peminjams" element={<Crudtwo />} />
        </Routes>
      </Router>

      {/* <Crud /> */}
      {/* <Crudtwo /> */}
    </div>
  );
}

export default App;
