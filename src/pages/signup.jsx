import TextField from "@mui/material/TextField";
import React from 'react';
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/output-onlinegiftools.gif";
import "./signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  //   On component loading, run the id check
  useEffect(() => {
    let id = window.localStorage.getItem("id");
    if (id !== undefined && id !== null && id.length === 36) {
      navigate("/home");
    }
  }, []);
  return (
    <div className="for-flex-signup">
      <div>
        
        <div className="image-center-signup">
          <img src={logo} alt="Logo" className="image-signup" />
        </div>
        <div className="for-box-signup">
          <div className="text-field-signup">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              className="div-label"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <div className="txt-field">
            <TextField
              id="outlined-basic"
              label="Gender"
              variant="outlined"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />

            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div className="text-field-signup">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          <Button
          className="signup-btn"
            variant="contained"
            onClick={() => {
              axios
                .post(`http://127.0.0.1:5000/signup`, {
                  firstname: firstName,
                  lastname: lastName,
                  gender:gender,
                  username: userName,
                  age: parseInt(age),
                  password: password,
                  phone_number: parseInt(phoneNumber),
                })
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
            Signup
          </Button>

          <div className="hr-signup"></div>

          <Button variant="contained" className="login-btn-signup"onClick={() => {navigate("/login");}}>LOGIN</Button>
        </div>
        
      </div>
    </div>
  );
}
