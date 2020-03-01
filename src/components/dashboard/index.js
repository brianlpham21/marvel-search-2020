import React from 'react';
import NavPage from '../common/NavPage';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CharactersSection from './CharactersSection';
import MainSection from './MainSection';
import ComicSection from './ComicSection';
import EventSection from './EventSection';
import YouTubeSection from './YouTubeSection';
import VideoModal from '../common/VideoModal';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingRight: theme.spacing(10),
    paddingLeft: theme.spacing(10),
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperFluid: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },
  mainPhoto: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  }
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <NavPage>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <CharactersSection classStyle={classes.paper} />
          <MainSection classStyle={classes.paper} mainPhotoStyle={classes.mainPhoto} />
          <Grid item xs={12} md={8} lg={9}>
            <EventSection classStyle={classes.paperFluid} />
            <ComicSection classStyle={classes.paperFluid} />
          </Grid>
          <YouTubeSection classStyle={classes.paperFluid} />
        </Grid>
      </div>
      <VideoModal />
    </NavPage>
  )
}

export default Dashboard;
