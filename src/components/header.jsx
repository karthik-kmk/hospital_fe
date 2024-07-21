import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SearchIcon from "@mui/icons-material/Search";

import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LogoutIcon from "@mui/icons-material/Logout";
import "./header.css";
import Imageside from "../assets/healior_symbol-removebg-preview.png";
import logo from "../assets/healior_logo.jpeg";
import DehazeIcon from "@mui/icons-material/Dehaze";



export default function Header() {
  
  const navigate = useNavigate();
  
  const [drawer, setDrawer] = useState(false);

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" className="bg-header" >
      <img src={logo} alt="logo" className="logo-header" />
     
      

      <ListItemButton className="arrow1" >
        <ListItemIcon
        
          className="arrow2"
          onClick={() => {
            setDrawer(false);
          }}
        >
          <KeyboardDoubleArrowLeftIcon />
        </ListItemIcon>
      </ListItemButton>

      <List>
        {[
          { icon: <DashboardIcon />, name: "Dashboard", link: "/dashboard",},
          {
            icon: <SearchIcon />,
            name: "Patient registration",
            link: "/patient-registration",
          },
      
          { icon: <LocalPharmacyIcon />, name: "Pharmacy", link: "/pharmacy" },
          {
            icon: <LocationCityIcon />,
            name: "Departments" ,
            link: "/departments",
          },
          { icon: <QuestionMarkIcon />, name: "About us", link: "/about-us" },
        ].map((item) => (
          <ListItem key={item.name} disablePadding >
            <Link to={item.link} style={{ textDecoration: "none" }}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <ListItemButton
        className="logout-btn"
        onClick={() => {
          // Delete id
          window.localStorage.removeItem("id");
          // redirect to login page
          navigate("/login");
        }}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary={"Logout"} />
      </ListItemButton>

     


      
    </Box>
  );

  const render_drawer = () => {
    return (
      <div>
        <div className="img-sid2">
          <img
            src={Imageside}
            alt=""
            className="image-sidebar"
            onClick={() => setDrawer(true)}
          />
        </div>

        {/* <Button onClick={() => setDrawer(true)}>Open drawer</Button> */}
        <Drawer open={drawer} onClose={() => setDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    );
  };

  return <div>{render_drawer()}</div>;
}
