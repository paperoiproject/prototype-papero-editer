import React, { Component } from "react";

import "../App.css";

import AppScenarioList from "../AppComponent/AppScenarioList.js";
import AppScenarioDialog from "../AppComponent/AppScenarioDialog.js";


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

class DisplayScenario extends Component {
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
          image: item2,
          name: "オレンジデニッシュ",
          details: ["A", "B", "C", "D"]
        },
        {
          image: item2,
          name: "オレンジデニッシュ",
          details: ["A", "B", "C", "D"]
        },
        {
          image: item2,
          name: "オレンジデニッシュ",
          details: ["A", "B", "C", "D"]
        },

      ],
      modal_state: {
        flag: false,
        name: "",
        details: []
      }
    };
  }


  deleteList(index) {
    let temp_items = this.state.items.slice();
    temp_items.splice(index, 1);
    this.setState({
      items: temp_items
    });
  }

  handleDialog(name, details) {
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

  render() {
    console.log(this.state.modal_state);
    return (
      <div className="DisplayScenario">
       <AppScenarioDialog
          modal_state={this.state.modal_state}
          onClose={() => {
            this.handleDialog();
          }}
          onOpen={() => {
            this.deleteList()
            this.handleDialog();
          }}
          mode='シナリオから消す'
        />
        <AppScenarioList
          items={this.state.items}
          handleDialog={(name, details) => {
            this.handleDialog(name, details);
          }}
        />
      </div>
    );
  }
}

export default DisplayScenario;
