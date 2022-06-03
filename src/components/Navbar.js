import React from "react";
import logo from "../logo1.png";
import { TextField,InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { shadows } from "@mui/system";
import { CenterFocusStrong } from "@mui/icons-material";

const Navbar = () => {
  return (
    <nav className="flex-container">
      <Link href="/">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <div></div>
      <div className="navitems">
        <Box
          sx={{
            width: 600,
            maxWidth: "100%",
          }}
        >
          <TextField fullWidth label="Search for anything..." id="fullWidth" 
             InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
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
      </div>

      <div className="flex-container-2">
        <Link href="#">Register</Link>
        <span>or</span>
        <Link href="#">Sign In</Link>
        <Box
        >
          <button className="btnPostAd">
            <Link
              href="/post"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Post Ad
            </Link>
          </button>
        </Box>
      </div>
    </nav>
  );
};

export default Navbar;
