import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Fragment } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
