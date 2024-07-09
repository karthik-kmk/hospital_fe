import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import Header from "../components/header";
import carousal from "../components/carousel";


export default function Home() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [age, setAge] = useState(0);
  

  // On page open, run the id check
  useEffect(() => {
    let id = window.localStorage.getItem("id");
    if (id === undefined || id === null || id.length !== 36) {
      navigate("/login");
    }
  }, []);

  // On page open, get the user profile details
  useEffect(() => {
    let id = window.localStorage.getItem("id");
    axios
      .get(`http://127.0.0.1:5000/profile?id=${id}`)
      .then((response) => {
        // 200 response
        setUserName(response.data.name);
        setAge(response.data.age);
      })
      .catch((error) => {
        // Non-200 response
        console.log(error.response);
      });
  }, []);

  
  return (
    <div>
       <Header/>

      <Button variant="contained" onClick={() => {
          // Delete id
          window.localStorage.removeItem("id");
          // redirect to login page
          navigate("/login");
        }}>Logout</Button>
    </div>
  );
}
