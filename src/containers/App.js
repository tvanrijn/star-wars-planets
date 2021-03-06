import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import CardList from "../components/CardList/CardList";
import SearchBox from "../components/SearchBox/SearchBox";
import Scroll from "../components/Scroll/Scroll";
import LoadingBar from "../components/LoadingBar/LoadingBar";
import "./App.css";

export const GET_PLANETS = gql`
  {
    planets {
      name
      rotation_period
      terrain
      gravity
      climate
    }
  }
`;

const App = () => {
  const [searchField, setSearchField] = useState("");

  const onSearchChange = event => {
    setSearchField(event.target.value);
  };

  const { loading, error, data } = useQuery(GET_PLANETS);
  if (loading) return <LoadingBar />;
  if (error)
    return (
      <div className="tc">
        <h1>Sorry, something went wrong.</h1>
        <p>Refresh the page to try again.</p>
      </div>
    );

  const filteredPlanets = data.planets.filter(planet => {
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

  return (
    <div className="tc">
      <h1 data-testid="title" className="f1">Star Wars Planets</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList planets={filteredPlanets} />
      </Scroll>
    </div>
  );
};

export default App;
