import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: "50vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  TestChRow:{
    width: "50vw",
    height: "10vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

const TestCh = (props) => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <div className={classes.TestChRow}>
          <Button variant="outlined" color="primary"　onClick = {e => props.postWork("hello")}>
            こんにちわ
          </Button>
          <Button variant="outlined" color="primary"　onClick = {e => props.postWork("thank")}>
            ありがとう
          </Button>
          <Button variant="outlined" color="primary"　onClick = {e => props.postWork("sorry")}>
            ごめんね
          </Button>
          <Button variant="outlined" color="primary"　onClick = {e => props.postWork("bye")}>
            さよなら
          </Button>
        </div>
        <div className={classes.TestChRow}>
          <Button variant="outlined" color="primary"　onClick = {e => props.postWork("favorite")}>
            お気に入り
          </Button>
          <Button variant="outlined" color="primary"　onClick = {e => props.postWork("baking")}>
            焼きあがり
          </Button>
          <Button variant="outlined" color="primary"　onClick = {e => props.postWork("tasting")}>
            試食
          </Button>
          <Button variant="outlined" color="primary"　onClick = {e => props.postWork("recom")}>
            オススメ
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(TestCh);