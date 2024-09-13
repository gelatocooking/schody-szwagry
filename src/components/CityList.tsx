import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./module-css/CityList.module.css"; // CSS module for styling

const cities = [
  "Warszawa",
  "Kraków",
  "Wrocław",
  "Gdańsk",
  "Poznań",
  "Łódź",
  "Katowice",
  "Szczecin",
  "Lublin",
  "Białystok",
];

interface CityListProps {
  onCitySelect: (city: string) => void;
}

const CityList: React.FC<CityListProps> = ({ onCitySelect }) => {
  const navigate = useNavigate();

  const handleCityClick = (city: string) => {
    const citySlug = city.toLowerCase().replace("ł", "l").replace(/\s/g, "-");
    console.log("Navigating to:", `/schody-na-wymiar-${citySlug}`);
    onCitySelect(city);
    navigate(`/schody-na-wymiar-${citySlug}`);
  };

  return (
    <div className={styles.cityList}>
      <ul>
        {cities.map((city) => (
          <li key={city} onClick={() => handleCityClick(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
