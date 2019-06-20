import React, { Component } from 'react';

import TestCh from '../Component/TestCh.js';

class TestChannel extends Component {
  constructor(props) {
    super(props);
  }
  async testPost(work){
    try{
      let obj = {work: work}
      console.log(JSON.stringify(obj))
      let data = await fetch("https://d5340bc4.ngrok.io",{
        method: 'POST',
        mode: "cors",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(obj)
      }).then(response => response.json());
    }
    catch(e){
     console.log("dataエラー")
     console.log(e)
    }
  }
  render() {
    return (
      <div className="TestChannel">
        <TestCh postWork={(work) => this.testPost(work)}/>
      </div>
    );
  }
}

export default TestChannel;