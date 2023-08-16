import React from "react";
import { Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.scss";

const NavBar = () => {
  return (
    <Navbar expand="sm" className="shadow">
      <NavLink className="navbar-brand text_primary" to="/">
        Somyaranjan
      </NavLink>
      <ul className="ms-auto navbar-nav d-none d-sm-flex">
        <motion.li whileTap={{ scale: 0.95 }} className="nav-item">
          <NavLink className="nav-link text_primary" to="/">
            Home
          </NavLink>
        </motion.li>
        <motion.li whileTap={{ scale: 0.95 }} className="nav-item">
          <NavLink className="nav-link text_primary" to="/about">
            About
          </NavLink>
        </motion.li>
        <motion.li whileTap={{ scale: 0.95 }} className="nav-item">
          <NavLink className="nav-link text_primary" to="/project">
            Project
          </NavLink>
        </motion.li>
        <motion.li whileTap={{ scale: 0.95 }} className="nav-item">
          <NavLink className="nav-link text_primary" to="/journey">
            My Journey
          </NavLink>
        </motion.li>
        <motion.li whileTap={{ scale: 0.95 }} className="nav-item">
          <NavLink className="nav-link text_primary" to="/contact">
            Contact Me
          </NavLink>
        </motion.li>
      </ul>
    </Navbar>
  );
};

export default NavBar;
