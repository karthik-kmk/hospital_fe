import React from "react";
import MainImg from "../assets/pulmon-main.jpg";

import "./dept.css";
const Pulmonology = () => {
  return (
    <div id="pulma">
      <div className="red"></div>
      <div>
        <div className="div-dept1">
          <p className="ptag-dept">Pulmonology</p>
        </div>

        <div className="div-dept3">
          <p className="ptag-dept1">
            Pulmonology is a medical specialty focused on the respiratory
            system, encompassing the diagnosis, treatment, and management of
            conditions affecting the lungs and airways. Pulmonologists treat a
            wide range of respiratory disorders, including asthma, chronic
            obstructive pulmonary disease (COPD), pneumonia, tuberculosis, and
            lung cancer. Diagnostic tools in pulmonology include spirometry to
            measure lung function, bronchoscopy to visualize the airways, and
            imaging techniques such as chest X-rays and CT scans. These tools
            help pulmonologists identify abnormalities, monitor disease
            progression, and tailor treatment plans. Asthma and COPD are two
            common chronic respiratory conditions managed by pulmonologists.
            Treatment often involves inhaled medications to reduce inflammation
            and open airways, along with lifestyle modifications and pulmonary
            rehabilitation to improve breathing and quality of life. In more
            severe cases, advanced therapies like oxygen therapy and mechanical
            ventilation may be necessary. Pulmonologists also address
            sleep-related breathing disorders such as sleep apnea, utilizing
            treatments like continuous positive airway pressure (CPAP) therapy
            to ensure adequate oxygenation during sleep.
          
          </p>
        </div>

        <img src={MainImg} alt="" className="dept-image" />
      </div>
      <div className="hr-dept"></div>
    </div>
  );
};

export default Pulmonology;
