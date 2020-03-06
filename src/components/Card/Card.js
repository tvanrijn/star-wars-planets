import React from "react";
import "./Card.css";
import Icon from "@mdi/react";
import {
  mdiEarth,
  mdiImageFilterHdr,
  mdiAirplaneTakeoff,
  mdiWeatherSunny
} from "@mdi/js";

const Card = ({ name, rotation, terrain, gravity, climate }) => {
  return (
    <div className="tc dib br4 pa3 ma2 grow bw2 shadow-5 avenir bg-grey">
      <div>
        <h2>{name}</h2>
        <ul>
          <li data-testid="rotation">
            <Icon
              className="icon"
              path={mdiEarth}
              size={1}
              color="#00766c"
              spin={5}
            />
            Rotation period: {rotation} hours
          </li>
          <li data-testid="terrain">
            <Icon
              className="icon"
              path={mdiImageFilterHdr}
              size={1}
              color="#00766c"
            />
            Terrain: {terrain}
          </li>
          <li data-testid="gravity">
            <Icon
              className="icon"
              path={mdiAirplaneTakeoff}
              size={1}
              color="#00766c"
            />
            Gravity: {gravity}
          </li>
          <li data-testid="climate">
            <Icon
              className="icon"
              path={mdiWeatherSunny}
              size={1}
              color="#00766c"
            />
            Climate: {climate}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
