import TextField from "@mui/material/TextField";
import React from 'react';
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/output-onlinegiftools.gif";
import "./login.css";

export default function Home() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //   On component loading, run the id check
  useEffect(() => {
    let id = window.localStorage.getItem("id");
    if (id !== undefined && id !== null && id.length === 36) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="background-image-login">
      <div className="image-login-center">
        <img src={logo} alt="Logo" className="image-login" />
      </div>
      {/* for whole thing */}
      <div className="for-login-center">
        <div>
          <p className="for-text-login">Healior</p>
          <p className="for-text2-login">healing lives everyday...</p>
        </div>
        <div className="for-box-login">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={userName}
            className="label-textf"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            className="label-textf"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          
          <Button
            variant="contained"
            className="label-login-btn"
            onClick={() => {
              axios
                .get(
                  `http://127.0.0.1:5000/login?username=${userName}&password=${password}`
                )
                .then((response) => {
                  // 200 response
                  console.log(response.data.id);

                  //   store id in local storage
                  window.localStorage.setItem("id", response.data.id);

                  // Redirect to home page
                  navigate("/home");
                })
                .catch((error) => {
                  // Non-200 response
                  console.log(error.response);
                });
            }}
          >
            Login
          </Button>

          <div className="hr-login"></div>

          <Button variant="contained" className="signup-btn-login" onClick={() => {navigate("/signup");}}>Signup</Button>
        </div>
      </div>
    </div>
  );
}
