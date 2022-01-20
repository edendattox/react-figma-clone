import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Fragment, useState } from "react";
import { SideBar } from "./components/SideBar";
import { useMediaQuery } from "react-responsive";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 980px" });

  return (
    <div className="App">
      <Router>
        <Fragment>
          {isMenuOpen && isTabletOrMobile ? (
            <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          ) : (
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
