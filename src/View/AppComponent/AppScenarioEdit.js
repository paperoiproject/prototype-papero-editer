import React, { Component } from 'react';
import ScenarioEdit from '../Component/ScenarioEdit.js';

class AppScenarioEdit extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className="" >
        <ScenarioEdit
          scene_list={this.props.scene_list }
          listDrop={e => {this.props.listDrop(e)}} />
      </div>
    );
  }
}

export default AppScenarioEdit;
