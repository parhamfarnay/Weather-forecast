import React, { useState } from "react";
import AnimatedView from "./components/animatedView";
import Status from "./components/status";
import "./home.scss";
import SideBar from "../../components/sideBar";

const Home = () => {
  const [cityInfo, setCityInfo] = useState({});
  const [weatherInfo, setWeatherInfo] = useState({});
  const [unit, setUnit] = useState("imperial");
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState("New York");

  return (
    <div className="home">
      <SideBar
        isOpen={sideBarStatus}
        onClose={() => setSideBarStatus(false)}
        onInput={(e) => setSearchTerm(e.target.value)}
        searchTerm={searchTerm}
        onUnit={(e) => setUnit(e.target.value)}
        unit={unit}
      />
      <AnimatedView />
      <Status cityInfo={cityInfo} weatherInfo={weatherInfo} unit={unit} />
    </div>
  );
};

export default Home;
