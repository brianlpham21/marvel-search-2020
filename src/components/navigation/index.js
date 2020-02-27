import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, InputBase, Link } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    backgroundColor: '#ed1d24',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  link: {
    color: 'white',
  },
  aboutLinkContainer: {
    position: 'absolute',
    right: '0',
    paddingRight: '24px',
  },
}));

function Navigation(props) {
  const classes = useStyles();

  const handleInput = (e) => {
    props.onChange(e.keyCode, e.target.value);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6">
            <Link to="/" className={classes.link} component={RouterLink}>
              Marvel | Character Search
            </Link>
          </Typography>
          <div className={`ml-4 ${classes.search}`}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onKeyUp={(e) => handleInput(e)}
              defaultValue={props.searchTerm}
              key={props.searchTerm}
              autoFocus
            />
          </div>
          <div className={classes.aboutLinkContainer}>
            <Typography variant="h6">
              <Link to="/about" className={classes.link} component={RouterLink}>
                About
              </Link>
              <Link
                href="https://github.com/brianlpham21/marvel-search-2020"
                className={`ml-3 ${classes.link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default connect()(Navigation);
