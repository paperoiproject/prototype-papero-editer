import React, { Component } from "react";
import ViewLists from "../Component/ViewLists.js";

import "../App.css";

class AppLists extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Lists">
        {this.props.itemsForTimeTable.map((item, index) => {
          return (
            <ViewLists
              item={item}
              onEvent={() => {
                this.props.handleDialog(item.name, item.details);
              }}
              onClick={() => {
                if(this.props.call === "TimeTablePage"){
                  this.props.switchList(index);
                }
              
              }}
              call={this.props.call}
            />
          );
        })}
      </div>
    );
  }
}

export default AppLists;
