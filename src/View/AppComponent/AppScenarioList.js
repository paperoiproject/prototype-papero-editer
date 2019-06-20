import React, { Component } from "react";

import ScenarioList from "../Component/ScenarioList.js";

class AppScenarioList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <ScenarioList
          items={this.props.items}
          handleDialog={(name, details) => {
            console.log(name);
            this.props.handleDialog(name, details);
          }}
        />
      </div>
    );
  }
}

export default AppScenarioList;
