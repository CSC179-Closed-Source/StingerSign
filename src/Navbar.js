import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      fontWeight: 600,
      borderBottom: "0.7px solid black",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="inherit" >
      
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          FORM Sign 
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/SignUp" className={classes.link}>
              SignUp
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
