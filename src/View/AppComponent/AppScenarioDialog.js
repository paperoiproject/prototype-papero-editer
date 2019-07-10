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
          onOpen={() => {
            this.props.onOpen();
          }}
          mode={this.props.mode}
        />
      </div>
    );
  }
}

export default AppScenarioDialog;
