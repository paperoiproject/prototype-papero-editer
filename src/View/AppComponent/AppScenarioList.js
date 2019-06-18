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
          items={this.props.items} />
      </div>
    );
  }
}

export default AppScenarioList;
