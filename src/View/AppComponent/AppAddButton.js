import React from "react";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const style = theme => ({
  root: {},
  appBar: {
    bottom: 0
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  }
});

const AppAddButton = props => {
  const  classes  = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar>
          <Fab
            className={classes.fabButton}
            color="default"
            aria-label="Add"
            onClick={e => {
              props.handleAddDialog(e);
            }}
          >
            <AddIcon />
          </Fab>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(style)(AppAddButton);
