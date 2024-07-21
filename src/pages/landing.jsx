import Button from "@mui/material/Button";
import React from "react";
import logo from "../assets/output-onlinegiftools.gif";
import Grid from "@mui/material/Unstable_Grid2";
import "./landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  
  return (
    <div>
      <div className="for-landing-logo-center">
        <img src={logo} alt="Logo" className="landing-logo" />
      </div>
      <center className="for-heading-center-landing">
        <p className="text-landing">HEALIOR</p>
      </center>
      <Grid container spacing={0} className="buttons-center-landing">
        <Grid>
          <Link to={"/login"}>
            <Button variant="contained" className="btns-landing">
              Login
            </Button>
          </Link>
        </Grid>

        <Grid>
          <Link to={"/signup"}>
            <Button variant="contained" className="btns-landing">
              Signup
            </Button>
          </Link>
        </Grid>
        <Grid>
          <Link to={"/login"}>
            <Button variant="contained" className="btns-landing">
              About Us
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
