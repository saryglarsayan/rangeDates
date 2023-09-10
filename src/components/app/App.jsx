import React from "react";
import Main from "../main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainMounth from "../main/MainMounth";
import Page404 from '../error/404';



function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/mounth" element={<MainMounth/>}/>
            <Route path="*" element={<Page404/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
