import React from 'react';
import ToolBar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import NavItem from './NavItem'
import { Router } from '@reach/router';
import About from '../views/About'
import Experience from '../views/Experience'
import Portfolio from '../views/Portfolio'
import Contact from '../views/Contact'

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" color="default">
        <ToolBar>
          <NavItem routeTo="About" label="About"/>
          <NavItem routeTo="Experience" label="Experience"/>
          <NavItem routeTo="Portfolio" label="Portfolio"/>
          <NavItem routeTo="Contact" label="Contact"/>
        </ToolBar>
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