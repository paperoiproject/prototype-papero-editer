import React from "react";
import ScenarioList__Card from "./ScenarioList__Card.js";
import List from "@material-ui/core/List";

const ScenarioList = (props) => {
  return (
    <div className="ScenarioList">
      {props.items.map(item => {
       return (
          <ScenarioList__Card
            image={item.image}
            name={item.name}
            onClick={() => {
              props.cardClick(item.name, item.details);
            }} />
        );
      })}
   </div>
  );
}
export default ScenarioList;