import React from 'react';
import Ortho from "../components/ortho";
import Neuro from "../components/neuro";
import Cardio from "../components/cardio";
import NavbarDept from "../components/navbardept"
import Gyne from "../components/gynecology"
import Pedia from "../components/pediatrics"
import Pulmon from "../components/pulmonology"


import "./department.css";

const Department = () => {
    return (
        <div>
            <NavbarDept/>
            <Ortho/>
            
            <Neuro/>
            <Cardio/>
            <Gyne/>
            <Pedia/>
            <Pulmon/>
        </div>
    );
};

export default Department;