import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter, Route, Link } from 'react-router-dom'

import store from './Store/Store.js';

import AppTab from './View/AppComponent/AppTab.js'

import EditScenario from './View/AppPage/EditScenario.js'
import DisplayScenario from './View/AppPage/DisplayScenario.js'
import TestChannel from './View/AppPage/TestChannel.js'
import TimeTablePage from './View/AppPage/TimeTablePage.js'
import RealTimeTable from './View/AppPage/RealTimeTable.js'


class App extends Component{
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <AppTab />
          <Provider store={store}>
            <Switch>
              <Route exact path='/' component={DisplayScenario} />
              <Route exact path='/addscenario' component={EditScenario} />
              <Route exact path='/timetable' component={TimeTablePage} />
              <Route exact path='/realtime' component={RealTimeTable} />
              <Route exact path='/test' component={TestChannel} />
            </Switch>
          </Provider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
