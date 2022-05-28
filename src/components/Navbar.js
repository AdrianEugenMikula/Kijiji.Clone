import React from "react";
import logo from "../logo.png";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

const Navbar = () => {
  return (
    <nav className="flex-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" align="left" />
      </div>
      <div></div>
      <div className="navitems">
        <Box
          sx={{
            width: 600,
            maxWidth: "100%",
          }}
        >
          <TextField fullWidth label="Search for anything..." id="fullWidth" />
        </Box>
      </div>

      <div className="navitems">
        <div className="dropdown">
          <button className="dropbtn">All Categories</button>
          <div className="dropdown-content">
            <a href="#">Cars and Vehicles</a>
            <a href="#">Real Estate</a>
            <a href="#">Jobs</a>
          </div>
        </div>
        <IconButton
          color="secondary"
          aria-label="Search"
          size="medium"
          component="span"
        >
          <SearchIcon />
        </IconButton>
      </div>

      <div className="flex-container-2">
        <Link href="#">Register</Link>
        <span>or</span>
        <Link href="#">Sign In</Link>
        <button>Post Ad</button>
      </div>
    </nav>
  );
};

export default Navbar;
