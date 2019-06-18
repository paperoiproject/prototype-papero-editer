import React, { Component } from "react";

import AppLists from "../AppComponent/AppList.js";
import AppAddButton from "../AppComponent/AppAddButton.js";
import AppUnderBar from "../AppComponent/AppUnderBar.js";

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

class RealTimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          image: item1,
          name: "食パン 2食分",
          details: [
          ]
        },
        {
          image: item2,
          name: "オレンジデニッシュ",
          details: [
          ]
        },
        {
          image: item3,
          name: "パンコンプレ プレーン",
          details: [
          ]
        },
        {
          image: item4,
          name: "バイツェンミッシュブロート",
          details: [
          ]
        },
        {
          image: item5,
          name: "オニオンフランス",
          details: [
          ]
        },
        {
          image: item6,
          name: "ソーセージフランス",
          details: [
          ]
        },
        {
          image: item7,
          name: "ローストポーククロワッサンサンド",
          details: [
          ]
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
          details: [
          ]
        },
        {
          image: item10,
          name: "フルーツデニッシュ",
          details: [
          ]
        },
        {
          image: item11,
          name: "モダン焼き",
          details: [
          ]
        },
        {
          image: item12,
          name: "ソフトフランスのベーコンキッシュ",
          details: [
          ]
        }
      ],
      titleBarName: "PaPeRo Editor",
      itemsForTimeTable: [
        {
          image: item3,
          name: "パンコンプレ プレーン",
          details: [
          ]
        },
        {
          image: item4,
          name: "バイツェンミッシュブロート",
          details: [
          ]
        },
        {
          image: item7,
          name: "ローストポーククロワッサンサンド",
          details: [
          ]
        },
        {
          image: item8,
          name: "キングコッペ ブルーベリーバター",
          details: [
          ]
        }
      ],
      itemsForAutoSuggestion: [
        {
          image: item8,
          name: "キングコッペ ブルーベリーバター",
          details: [
          ]
        },
        {
          image: item9,
          name: "マフィン プレーン",
          details: [
          ]
        },
        {
          image: item10,
          name: "フルーツデニッシュ",
          details: [
          ]
        },
        {
          image: item11,
          name: "モダン焼き",
          details: [
          ]
        },
        {
          image: item12,
          name: "ソフトフランスのベーコンキッシュ",
          details: [
          ]
        }
      ],
      value: ""
    };
  }

  render() {
    return (
      <div className="">
        <div className = "RealTimeTable">
          <AppLists
            items={this.state.itemsForAutoSuggestion}
            itemsForTimeTable={this.state.itemsForTimeTable}
            deleteList={index => {
              this.props.deleteList(index);
             }}
            detailList={(name, details) => {
              this.props.detailList(name, details);
              this.handleClickFlag2();
            }}
          />
          <div className="RealTimeTable__button">
            <AppUnderBar />
          </div>
        </div>
        <AppAddButton/>
      </div>
    );
  }
}

export default RealTimeTable;