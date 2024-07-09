import { useState } from "react";
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import SearchIcon from "@mui/icons-material/Search";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import "./header.css";

export default function Header() {
  const navigate = useNavigate();
  const [drawer, setDrawer] = useState(false);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <ListItemButton>
        <ListItemIcon
          onClick={() => {
            setDrawer(false);
          }}
        >
          <KeyboardDoubleArrowLeftIcon />
        </ListItemIcon>
      </ListItemButton>
      
      
      <List >
        {[
          { icon: <DashboardIcon />, name: "Dashboard", link: "/dashboard" },
          {
            icon: <SearchIcon />,
            name: "Patient registration",
            link: "/patient-registration",
            
          },
          {
            icon: <HowToRegIcon />,
            name: "Find your disease",
            link: "/find-your-disease",
          },
          { icon: <LocalPharmacyIcon />, name: "Pharmacy", link: "/pharmacy" },
          {
            icon: <LocationCityIcon />,
            name: "Departments",
            link: "/departments",
          },
          { icon: <QuestionMarkIcon />, name: "About us", link: "/about-us" },
        ].map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link to={item.link}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItemButton
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
        <Button onClick={() => setDrawer(true)}>Open drawer</Button>
        <Drawer open={drawer} onClose={() => setDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    );
  };

  return (
    <div>

      {render_drawer()}
    </div>
  );
}
