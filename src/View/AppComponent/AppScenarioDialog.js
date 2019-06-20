import React, { Component } from "react";
import ScenarioDialog from "../Component/ScenarioDialog.js";

class AppScenarioDialog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="">
        <ScenarioDialog
          modal_state={this.props.modal_state}
          onClose={() => {
            this.props.onClose();
          }}
        />
      </div>
    );
  }
}

export default AppScenarioDialog;