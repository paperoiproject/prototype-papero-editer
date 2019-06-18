import React, { Component } from "react";

import "../App.css";

import AppScenarioList from "../AppComponent/AppScenarioList.js";

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
          details: []
        },
        {
          image: item2,
          name: "オレンジデニッシュ",
          details: []
        },
        {
          image: item3,
          name: "パンコンプレ プレーン",
          details: []
        },
        {
          image: item4,
          name: "バイツェンミッシュブロート",
          details: []
        },
        {
          image: item5,
          name: "オニオンフランス",
          details: []
        },
        {
          image: item6,
          name: "ソーセージフランス",
          details: []
        },
        {
          image: item7,
          name: "ローストポーククロワッサンサンド",
          details: []
        },
        {
          image: item8,
          name: "キングコッペ ブルーベリーバター",
          details: [

          ]
        },
        {
          image: item9,
          name: "マフィン プレーン",
          details: []
        },
        {
          image: item10,
          name: "フルーツデニッシュ",
          details: []
        },
        {
          image: item11,
          name: "モダン焼き",
          details: []
        },
        {
          image: item12,
          name: "ソフトフランスのベーコンキッシュ",
          details: []
        }
      ],
    };
  }

  render() {
    return (
      <div className="DisplayScenario">
        <AppScenarioList items={this.state.items}/>
      </div>
    );
  }
}

export default DisplayScenario;
