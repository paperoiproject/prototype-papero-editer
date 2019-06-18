import React, { Component } from 'react';

import AppScenarioEdit from '../AppComponent/AppScenarioEdit.js';
import AppAddScene from '../AppComponent/AppAddScene.js';

class EditScenario extends Component{
  constructor(props) {
    super(props);
    this.state = {
      scene_list: [
        {text: "こんにちは", type: "A"},
        {text: "ぱぺろです", type: "B"},
        {text: "みなさんはじめまして", type: "C"},
      ],
    }
  }
  addScene(obj){
    let cp_scene_list = this.state.scene_list.slice()
    cp_scene_list.push(obj)
    this.setState({
        scene_list: cp_scene_list,
    })
  }
  render(){
    const {scene_list} = this.props;
    return (
      <div className="EditScenario">
        <AppScenarioEdit
          scene_list={this.state.scene_list}
          listDror />
        <AppAddScene
          sendScene={(obj) => this.addScene(obj)} />
      </div>
    );
  }
}

export default EditScenario;