import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "3vh",
    width: "55vw",
  },
  button: {
    margin: theme.spacing.unit,
    width: "40vw",
  },
  textfield: {
    margin: theme.spacing.unit,
    width: "45vw",
  },
});

const AddScene = (props) => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <TextField
          className={classes.textfield}
          id="input-with-icon-textfield"
          label="発話のテキスト"
          onChange={e => {props.changeAddText(e)}}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {props.typeValue}:
              </InputAdornment>
          )}} />
        <Button variant="outlined" className={classes.button} onClick={() => props.sendScene()}>
          シーンの追加
        </Button>
        <div className = "EnterPaper__Alfs">
          <Button onClick={e => {props.changeSymbol('A')}}>A:笑顔</Button>
          <Button onClick={e => {props.changeSymbol('B')}}>B:うなずき</Button>
          <Button onClick={e => {props.changeSymbol('A')}}>C:周りをみる</Button>
          <Button onClick={e => {props.changeSymbol('A')}}>D:あやまる</Button>
          <Button onClick={e => {props.changeSymbol('A')}}>E:首を傾げる</Button>
          <Button onClick={e => {props.changeSymbol('A')}}>F:恥ずかしがる</Button>
          <Button onClick={e => {props.changeSymbol('A')}}>G:右を向く</Button>
          <Button onClick={e => {props.changeSymbol('A')}}>H:左を向く</Button>
        </div>
        <TextField
         className={classes.textfield}
         id="input-with-icon-textfield"
         label="シナリオの名前"
         onChange={e => {props.changeName(e)}} />
        <Typography variant="h5" component="h3">
          <Button variant="outlined" className={classes.button} onClick={() => props.sendScenario()}>
            シナリオの確定
          </Button>
        </Typography>
      </Paper>

    </div>
  );
}


export default withStyles(styles)(AddScene);