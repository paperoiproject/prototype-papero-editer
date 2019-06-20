import React, { Component } from "react";

import AppList from "../AppComponent/AppList.js";
import AppScenarioDialog from "../AppComponent/AppScenarioDialog.js";
import AppAddDialog from "../AppComponent/AppAddDialog.js";

import AppAddButton from "../AppComponent/AppAddButton.js";

import item1 from "../img/食パン_2食.jpg";
import item2 from "../img/オレンジデニッシュ.jpg";
import item3 from "../img/パンコンプレ_プレーン.jpg";
import item4 from "../img/バイツェンミッシュブロート.jpg";
import item5 from "../img/オニオンフランス.jpg";
import item6 from "../img/ソーセージフランス.jpg";
import item7 from "../img/ローストポーククロワッサンサンド.jpg";
import item8 from "../img/キングコッペ_ブルーベリーバター.jpg";
import item9 from "../img/マフィン_プレーン.jpg";
import item10 from "../img/フルーツデニッシュ.jpg";
import item11 from "../img/モダン焼き.jpg";
import item12 from "../img/ソフトフランスのベーコンキッシュ.jpg";

class TimeTablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          image: item1,
          name: "食パン 2食分",
          details: ["A", "B", "C", "D"]
        },
        {
          image: item2,
          name: "オレンジデニッシュ",
          details: ["A", "B", "C", "D"]
        },
        {
          image: item3,
          name: "パンコンプレ プレーン",
          details: ["A", "B", "C", "D"]
        },
        {
          image: item4,
          name: "バイツェンミッシュブロート",
          details: ["A", "B", "C", "D"]
        },
        {
          image: item5,
          name: "オニオンフランス",
          details: ["A", "B", "C", "D"]
        },
        {
          image: item6,
          name: "ソーセージフランス",
          details: ["A", "B", "C", "D"]
        },
        {
          image: item7,
          name: "ローストポーククロワッサンサンド",
          details: ["A", "B", "C", "D"]
        },
        {
          image: item8,
          name: "キングコッペ ブルーベリーバター",
          details: ["A", "B", "C", "D"]
        },
        {
          image: item9,
          name: "マフィン プレーン",
          details: ["A", "B", "C", "D"]
        },
        {
          image: item10,
          name: "フルーツデニッシュ",
          details: ["A", "B", "C", "D"]
        },
        {
          image: item11,
          name: "モダン焼き",
          details: ["A", "B", "C", "D"]
        },
        {
          image: item12,
          name: "ソフトフランスのベーコンキッシュ",
          details: ["A", "B", "C", "D"]
        }
      ],
      itemsForTimeTable: [
        {
          image: item10,
          name: "フルーツデニッシュ",
          details: ["A", "B", "C", "D"],
          power: true,
        },
        {
          image: item11,
          name: "モダン焼き",
          details: ["A", "B", "C", "D"],
          power: true,
        },
        {
          image: item12,
          name: "ソフトフランスのベーコンキッシュ",
          details: ["A", "B", "C", "D"],
          power: true,
        },
      ],
      modal_state: {
        flag: false,
        name: "",
        details: []
      },
      flag: false,
    };
  }
  handleDialog(name, details){
    let obj = Object.assign({}, this.state.modal_state);
    if(obj.flag){
      obj.flag = false;
    }else{
      obj.flag = true;
      obj.name = name;
      obj.details = details
    }
    this.setState({
      modal_state: obj,
    });
  }

  handleAddDialog(){
    this.setState({
      flag: !this.state.flag,
    });
  }

  addList(item) {
    console.log(item)
    let index = this.state.items.findIndex(temp => temp.name === item.name);
    let temp_items = this.state.itemsForTimeTable;
    temp_items.push(this.state.items[index]);
    this.setState({
      itemsForTimeTable: temp_items
    });
  }
  deleteList(index) {
    let temp_items = this.state.itemsForTimeTable.slice();
    temp_items.splice(index, 1);
    this.setState({
      itemsForTimeTable: temp_items
    });
  }
  switchList(index){
    let temp_items = this.state.itemsForTimeTable.slice();
    temp_items[index].power = !temp_items[index].power;
    this.setState({
      itemsForTimeTable: temp_items
    });
  }

  displayAddDialog(){
    if(this.state.flag){
      return(
        <AppAddDialog
          items={this.state.items}
          open={this.state.flag}
          onClose={() => {
           this.handleAddDialog();
          }}
          addList={(item) => {
            this.addList(item);
            this.handleAddDialog();
          }}
        />
      )
    }else{
      return "";
    }
  }


  render() {
    console.log(this.state)
    return (
      <div className="TimeTablePage">
        <AppScenarioDialog
          modal_state={this.state.modal_state}
          onClose={() => {
            this.handleDialog();
          }}
        />
        {this.displayAddDialog()}
        <AppList
          itemsForTimeTable={this.state.itemsForTimeTable}
          handleDialog={(name, details) => {
            this.handleDialog(name, details);
          }}
          switchList={(index) => {this.switchList(index)}}
          call={"TimeTablePage"}
        />
        <AppAddButton
          handleAddDialog={() => {
            this.handleAddDialog();
          }}
        />
      </div>
    );
  }
}

export default TimeTablePage;