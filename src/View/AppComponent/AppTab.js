import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { withRouter } from 'react-router-dom'

const LinkTab = (props) => {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const AppTab = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("/");
  function handleChange(event, newValue) {
    setValue(newValue);
    props.history.push(newValue);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="シナリオ一覧" value="/"/>
          <LinkTab label="シナリオの追加" value="/addscenario" />
          <LinkTab label="タイムテーブル" value="/timetable" />
          <LinkTab label="リアルタイム" value="/realtime" />
          <LinkTab label="通信デモ" value="/test" />
        </Tabs>
      </AppBar>
    </div>
  );
}
export default withRouter(AppTab)