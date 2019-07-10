import React, { Component } from "react";
import ViewLists from "../Component/ViewLists.js";


import "../App.css";

import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from './utils';


class AppLists extends Component {
  constructor(props) {
    super(props);
    this.state={
      items: generateItems(50, (index) => {
        return {
          id: index,
          data: 'Draggable' + index
        };
      })

    }


  }
  render() {
    return (
      <div className="Lists">
      <Container onDrop={e => this.props.setSta(e)}>

        {this.props.itemsForTimeTable.map((item, index,p) => {
          return (
          <Draggable >
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

            </Draggable>

          );
        })}
        </Container>

      </div>
    );
  }
}

export default AppLists;
