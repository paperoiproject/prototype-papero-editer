import React, { Component } from "react";
import AddDialog from "../Component/AddDialog.js";

class AppAddDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.items,
      word: "",
    }
  }

  changeWord(e) {
    this.setState({
      list: this.searchScenario(e.target.value)
    });
  };

  searchScenario(value) {
    return this.props.items.filter(i =>
      i.name.toLowerCase().includes(value.toLowerCase())
    );
  }

  render() {
    console.log(this.state)
    return (
      <div className="">
        <AddDialog
          items={this.state.list}
          open={this.props.open}
          onClose={()=>{
            this.props.onClose();
          }}
          changeWord={(e) => {
            this.changeWord(e)
          }}
          addList={(item)=>{
            this.props.addList(item);
          }}
          deleteList={(index)=>
            this.props.deleteList(index)
          }
        />
      </div>
    );
  }
}

export default AppAddDialog;
