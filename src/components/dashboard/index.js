import React from 'react';
import NavPage from '../common/NavPage';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CharactersSection from './CharactersSection';
import MainSection from './MainSection';
import ComicSection from './ComicSection';
import YouTubeSection from './YouTubeSection';

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

function Dashboard() {
  const classes = useStyles();

  return (
    <NavPage>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <CharactersSection classStyle={classes.paper} />
          <MainSection classStyle={classes.paper} />
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={classes.paper}>
              <ComicSection />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={classes.paper}>
              <YouTubeSection />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </NavPage>
  )
}

export default Dashboard;
