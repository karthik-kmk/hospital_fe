import React from "react";
import MainImg from "../assets/cardio-main.jpg";

import "./dept.css";
const Cardio = () => {
  return (
    <div id="cardio">
      <div className="red"></div>
      <div>
        <div className="div-dept1">
          <p className="ptag-dept">Cardiac Sciences</p>
        </div>

        <div className="div-dept3">
          <p className="ptag-dept1">
            Cardiac sciences, a branch of medicine focused on the heart and
            circulatory system, encompasses various disciplines dedicated to
            understanding, diagnosing, and treating heart-related conditions.
            This field integrates cardiology, cardiac surgery,
            electrophysiology, and cardiovascular physiology to address a wide
            range of heart issues, from congenital heart defects to acquired
            cardiovascular diseases. Cardiologists use advanced diagnostic tools
            such as echocardiograms, electrocardiograms (ECG), and cardiac
            catheterization to assess heart function and identify abnormalities.
            Interventional cardiology involves minimally invasive procedures
            like angioplasty and stent placement to treat coronary artery
            disease. Electrophysiologists focus on the heart's electrical
            activity, managing arrhythmias through techniques such as ablation
            and the implantation of pacemakers and defibrillators. Cardiac
            surgery includes procedures like coronary artery bypass grafting
            (CABG), valve repair or replacement, and heart transplantation.
            Advances in surgical techniques, including minimally invasive and
            robotic-assisted surgeries, have improved patient outcomes and
            reduced recovery times.
          </p>
        </div>

        <img src={MainImg} alt="" className="dept-image" />
      </div>
      <div className="hr-dept"></div>
    </div>
  );
};

export default Cardio;
