import React from 'react';
import NavPage from '../common/NavPage';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingRight: theme.spacing(10),
    paddingLeft: theme.spacing(10),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(4),
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
              <h1 style={{ fontFamily: 'Marvel' }}>About</h1>
              <p>
                As a part of a learning project in 2018 that I participated in, I took on the
                challenge of creating a website that would allow users the ability
                to search through the Marvel library for their favorite heroes,
                villains, and miscellaneous characters. The website would provide them with
                information from the Marvel API as well as videos on YouTube through
                the YouTube API.
              </p>
              <p>
                The project took approximately 2 weeks to complete and was fairly bare in the
                amount of technologies used. I was able to utilize multiple open APIs through
                AJAX calls and manipulate the DOM through jQuery. Additional changes were added to
                the application throughout the months following but the main foundation was built
                within those 2 weeks.
              </p>
              <p>
                Come 2020 and I've been wanting to see how this Marvel Character Search application
                would look with other technologies being utilized to build it. This new 2020 version
                of the application is still somewhat simple in it's use and was built in approximately
                4 days. However, this time around I was able to use some of the following technologies
                to create, what I think, is a better and improved version of the application.
              </p>
              <ul>
                <li>React/Redux</li>
                <li><i>React-Thunk</i></li>
                <li><i>React-Persist</i></li>
                <li>Material UI</li>
                <li>SASS</li>
                <li>Bootstrap</li>
                <li>Reactstrap</li>
              </ul>
              <p>
                I understand that some of the technologies included in this might be seen as overkill
                by some,but I wanted to experiment and see what worked together and what didn't.
                This application still remains an experiment, a sandbox project.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </NavPage>
  )
}

export default About;
