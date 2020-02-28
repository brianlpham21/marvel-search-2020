import React from 'react';
import NavPage from '../common/NavPage';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function About() {
  const classes = useStyles();

  return (
    <NavPage>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h1>About</h1>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </NavPage>
  )
}

export default About;
