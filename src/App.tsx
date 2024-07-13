import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";

// Lazy load components
const Home = lazy(() => import("./components/pages/Home"));
// const About = lazy(() => import("./components/pages/About"));
// const Contact = lazy(() => import("./components/pages/Contact"));
const Gallery = lazy(() => import("./components/pages/Gallery"));



function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/o-nas" element={<About />} /> */}
              <Route path="/galeria" element={<Gallery />} />
              {/* <Route path="/kontakt" element={<Contact />} /> */}
            </Routes>
          </main>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
