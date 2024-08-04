import React from "react";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import "./modalappointment.css";
const modalortho = () => {
  return (
    <div>
      <p className="p-modal-apt">Request an Appointment</p>
      <div className="div1-apt">
        <TextField
     
          id="outlined-basic"
          label="doctor name"
          variant="outlined"
          className="text-field-apt"
        
        />
        <TextField
          id="outlined-basic"
          label="doctor name"
          variant="outlined"
          className="text-field-apt"
        />
      </div>

      <div className="div1-apt">
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          className="text-field-apt"
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          className="text-field-apt"
        />
      </div>

      <div className="div1-apt">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateTimePicker"]}>
            <DateTimePicker label="Date and Time" className="text-field-apt" />
          </DemoContainer>
        </LocalizationProvider>

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="text-field-apt1"
        />
      </div>
      <div className="submit-modal-apt-div">
        <button className="submit-modal-apt">Submit</button>
      </div>
    </div>
  );
};

export default modalortho;
