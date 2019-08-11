import React from 'react';
import Tabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar'
import { Router } from '@reach/router';
import About from '../views/About'
import Experience from '../views/Experience'
import Portfolio from '../views/Portfolio'
import Contact from '../views/Contact'
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react'
import {navigate} from '@reach/router'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const NavBar = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} variant="fullWidth" indicatorColor="primary">
          <Tab onClick={() => {navigate("/About")}} label="About"/>
          <Tab onClick={() => {navigate("/Experience")}} label="Experience"/>
          <Tab onClick={() => {navigate("/Portfolio")}} label="Portfolio"/>
          <Tab onClick={() => {navigate("/Contact")}} label="Contact"/>
        </Tabs>
      </AppBar>

      <Router>
        <About path="/About"/>
        <Experience path="/Experience"/>
        <Portfolio path="/Portfolio"/>
        <Contact path="/Contact"/>
      </Router>
    </div>
  ) 
}

export default NavBar