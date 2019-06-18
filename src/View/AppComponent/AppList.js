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
        {this.props.items.map((item, index) => {
          return (
            <ViewLists
              image={item.image}
              name={item.name}
            />
          );
        })}
      </div>
    );
  }
}

export default AppLists;