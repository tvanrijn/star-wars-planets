import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(
    () => {
      const urls = [
        "https://swapi.co/api/planets/",
        "https://swapi.co/api/planets/?page=2",
        "https://swapi.co/api/planets/?page=3",
        "https://swapi.co/api/planets/?page=4",
        "https://swapi.co/api/planets/?page=5",
        "https://swapi.co/api/planets/?page=6",
        "https://swapi.co/api/planets/?page=7"
      ];

      Promise.all(
        urls.map(async url => {
          const response = await fetch(url);
          const morePlanets = await response.json();
          var combinedArrayOfPlanets = planets;
          combinedArrayOfPlanets.push(morePlanets.results);

          var sortedArrayOfPlanets = combinedArrayOfPlanets
            .flat()
            .sort((a, b) => a.name.localeCompare(b.name));

          setPlanets(sortedArrayOfPlanets);
        })
      ).catch(error => console.log("Error during fetching of planets:", error));
    }, // eslint-disable-next-line
    []
  );

  const onSearchChange = event => {
    setSearchField(event.target.value);
  };

  const filteredPlanets = planets.filter(planet => {
    return (
      planet.name.toLowerCase().includes(searchField.toLowerCase()) ||
      planet.terrain.toLowerCase().includes(searchField.toLowerCase()) ||
      planet.rotation_period
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
      planet.gravity.toLowerCase().includes(searchField.toLowerCase()) ||
      planet.climate.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  return !planets.length ? (
    <div className="tc">
      <h1 className="loadingBar">Loading</h1>
    </div>
  ) : (
    <div className="tc">
      <h1 className="f1">Star Wars Planets</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList planets={filteredPlanets} />
      </Scroll>
    </div>
  );
};

export default App;
