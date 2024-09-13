import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense, lazy, useState } from "react";

// Lazy load components
const Home = lazy(() => import("./components/pages/Home"));
const Gallery = lazy(() => import("./components/pages/Gallery"));
const CityList = lazy(() => import("./components/CityList"));

function App() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const handleCitySelection = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <main>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route path="/galeria" element={<Gallery />} />
              {/* <Route
                path="/miasta"
                element={<CityList onCitySelect={handleCitySelection} />}
              />
              {selectedCity && (
                <Route
                  path={`/schody-na-wymiar-${selectedCity.toLowerCase().replace("ł", "l").replace(/\s/g, "-")}`}
                  element={<Home  />}
                />
              )} */}
            </Routes>
          </main>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
