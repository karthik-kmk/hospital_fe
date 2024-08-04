import React, { useState } from "react";

import "./patient.css";
import { Button, TextField } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Patient = ({ form_heading, data, submit_form, on_delete_clicked }) => {
  const [first_name, set_first_name] = useState(data.first_name || "");
  const [second_name, set_second_name] = useState(data.second_name || "");
  const [gender, set_gender] = useState(data.gender || "");
  const [age, set_age] = useState(data.age || "");
  const [phone_number, set_phone_number] = useState(data.phone_number || "");
  const [occupation, set_occupation] = useState(data.occupation || "");
  const [email_address, set_email_address] = useState(data.email_address || "");
  const [father_name, set_father_name] = useState(data.father_name || "");
  const [emergency_contact, set_emergency_contact] = useState(
    data.emergency_contact || ""
  );

  const render_input = (label, value, onChange) => {
    return (
      <div className="patient-input">
        
        <TextField
          InputProps={{
            endAdornment:(<PersonAddIcon/>)
          }}
          id="outlined-basic"
          label={label}
          variant="outlined"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };

  return (
    <div className="patient-main">
      <div className="patient-header">{form_heading}</div>
      <div className="patient-body-main">
        <div className="patient-body-row">
          {render_input("First name", first_name, e =>
            set_first_name(e.target.value)
          )}
          {render_input("Second name", second_name, e =>
            set_second_name(e.target.value)
          )}
        </div>
        <div className="patient-body-row">
          {render_input("Gender", gender, e => set_gender(e.target.value))}
          {render_input("Age", age, e => set_age(e.target.value))}
          {render_input("Phone number", phone_number, e =>
            set_phone_number(e.target.value)
          )}
        </div>
        <div className="patient-body-row">
          {render_input("Occupation", occupation, e =>
            set_occupation(e.target.value)
          )}
          {render_input("Email", email_address, e =>
            set_email_address(e.target.value)
          )}
        </div>
        <div className="patient-body-row">
          {render_input("Father's name", father_name, e =>
            set_father_name(e.target.value)
          )}
          {render_input("Emergency contact", emergency_contact, e =>
            set_emergency_contact(e.target.value)
          )}
        </div>

        <div className="patient-submit-button-main">
          <Button
            variant="contained"
            onClick={() => {
              submit_form({
                first_name,
                second_name,
                gender,
                age,
                phone_number,
                occupation,
                email_address,
                father_name,
                emergency_contact,
              });
            }}
          >
            {form_heading}
          </Button>
          {on_delete_clicked ? (
            <Button
              variant="contained"
              onClick={on_delete_clicked}
              style={{ marginLeft: 20 }}
            >
              Delete patient
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Patient;