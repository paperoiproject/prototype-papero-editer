import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const styles = theme => ({
  root: {},
  button1:{
    display:'flex',
    flexGrow: 2
  }
});

const inner = (
  <Box
    bgcolor="background.paper"
    m={1}
    borderColor="text.primary"
    style={{ width: '5rem', height: '10rem' }}
  />
);

const ScenarioDialog = props => {
  const { classes } = props;
    console.log(props.modal_state.details);
    console.log(props.modal_state);
    return (
      <div className={classes.root}>
        <Dialog open={props.modal_state.flag} onClose={props.onClose} scroll="paper">
          <DialogTitle id="dialog-title">{props.modal_state.name}</DialogTitle>
          <DialogContent dividers="true">
            <List>
              {props.modal_state.details.map(detail => {
                return (
                  <ListItem>
                    <ListItemText primary={detail} />
                  </ListItem>
                );
              })}
            </List>
          </DialogContent>
          <DialogActions>
            <Button className='button1' onClick={e => props.onClose()} color="primary">
              戻る
            </Button>
            <Box borderRight={1} clone borderRadius="0%" height='0%'>
              <Button className='button1' onClick={e => props.onOpen()} color="primary">
              編集
              </Button>
            </Box>
            <Button className='button1' onClick={e => props.onOpen()} color="primary">
              {props.mode}
            </Button>

          </DialogActions>
        </Dialog>
      </div>
    );
};

export default withStyles(styles)(ScenarioDialog);
