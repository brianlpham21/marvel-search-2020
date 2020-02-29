import React from 'react';
import NavPage from '../common/NavPage';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CharactersSection from './CharactersSection';
import MainSection from './MainSection';
import ComicSection from './ComicSection';
import EventSection from './EventSection';
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
  paperFluid: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  }
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
            <ComicSection classStyle={classes.paperFluid} />
            <EventSection classStyle={classes.paperFluid} />
          </Grid>
          <YouTubeSection classStyle={classes.paperFluid} />
        </Grid>
      </div>
    </NavPage>
  )
}

export default Dashboard;
