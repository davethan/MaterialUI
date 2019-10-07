import React from 'react';
import {Route} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './Style.js';

export default function Loading(){
  const classes = useStyles();
  return(
    <div className={classes.loadingDiv}>
    <CircularProgress color="secondary" className={classes.CircularProgress}/>
    </div>
  )
}
