import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '5.5rem 3% 3% 3%',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '4.5rem',
    },
  },
}));

function NavPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.children}
    </div>
  )
}

export default NavPage;
