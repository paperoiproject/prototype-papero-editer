import React, { Component } from 'react';
import AddScene from '../Component/AddScene.js';

class AppAddScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      typeValue: "",
      nameValue: "",
    }
  };
  changeAddText(e){
    this.setState({
      textValue: e.target.value,
    });
  }
  changeSymbol(type){
    this.setState({
      typeValue: type,
    });
  }
  changeName(e){
    this.setState({
      nameValue: e.target.value,
    });
  }
  render() {
    console.log(this.state.textValue + this.state.typeValue)
    console.log(this.state.nameValue)
    return (
      <div className="" >
        <AddScene
          changeAddText = {e => {this.changeAddText(e)}}
          changeSymbol = {(type) => {this.changeSymbol(type)}}
          changeName = {(e) => {this.changeName(e)}}
          typeValue = {this.state.typeValue}
          sendScene = {() => {this.props.sendScene({type: this.state.typeValue, text: this.state.textValue})}}
          sendScenario={() => {this.props.sendScenes(this.state.nameValue)}}/>
      </div>
    );
  }
}

export default AppAddScene;