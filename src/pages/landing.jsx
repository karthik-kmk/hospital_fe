import Button from "@mui/material/Button";
import React from 'react';
import logo from "../assets/output-onlinegiftools.gif";
import Grid from "@mui/material/Unstable_Grid2";
import "./landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div className="center">
        <img src={logo} alt="Logo" />
      </div>
      <center className="for-heading"><p className="text-landing">HEALIOR</p></center>
      <Grid container spacing={0} className="center">
        <Grid>
          <Link to={"/login"}>
            <Button variant="contained" className="main-btns">
              Login
            </Button>
          </Link>
        </Grid>
        <Grid>
          <Link to={"/signup"}>
            <Button variant="contained" className="main-btns">
              Signup
            </Button>
          </Link>
        </Grid>
        <Grid>
          <Link to={"/login"}>
            <Button variant="contained" className="main-btns">
              About Us
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
