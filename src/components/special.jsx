import React from "react";
import "./special.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Neuro from "../assets/neuro.png";
import Sports from "../assets/sports.png";
import Pulmonary from "../assets/pulmonary.png";
import Physical from "../assets/physical.png";
import Pediatrics from "../assets/Paediatrics.png";
import Ortho from "../assets/ortho.png";
import Oncology from "../assets/oncology.png";
import Gyaen from "../assets/gyaen.png";
import Cardio from "../assets/cardio.png";
import { Link } from "react-router-dom";

const Special = () => {
  return (
    <div className="color">
      <div className="special" id="special">
        {/* for space */}
      </div>
      <div className="mtop-special">
        <p className="heading-special">Our Specialities</p>
      </div>
      {/* -------------------------------------- */}
      <div className="flex-special">
        <Link to="/departments " style={{ textDecoration: "none" }}>
          <div className="first">
            <img src={Ortho} alt="" className="image-slider" />
            <p className="first-p1">Orthopedics</p>

            <p className="first-p2">
              Orthopedics: Musculoskeletal system, bones, joints, ligaments,
              tendons, fractures, arthritis, surgery, rehabilitation, spine.
            </p>
            <div class="hidden-text">
              Know More
              <ArrowForwardIcon />
            </div>
          </div>
        </Link>

        <Link to="/departments" style={{ textDecoration: "none" }}>
          <div className="first">
            <img src={Neuro} alt="" className="image-slider" />
            <p className="first-p1">Neuro Sciences</p>

            <p className="first-p2">
              Neurosciences: Brain, neurons, synapses, neurotransmitters,
              cognition, memory, behavior, neuroplasticity, disorders, research.
            </p>
            <div class="hidden-text">
              Know More
              <ArrowForwardIcon />
            </div>
          </div>
        </Link>

        <Link to="/departments" style={{ textDecoration: "none" }}>
          <div className="first">
            <img src={Cardio} alt="" className="image-slider" />
            <p className="first-p1">Cardiac Sciences</p>

            <p className="first-p2">
              Cardiac Sciences: Heart, arteries, veins, cardiology,
              hypertension, arrhythmia, atherosclerosis, myocardial, ischemia,
              surgery.
            </p>
            <div class="hidden-text">
              Know More
              <ArrowForwardIcon />
            </div>
          </div>
        </Link>
      </div>

      {/* ------------------ */}

      <div className="flex-special  top-special bot-special">
        <Link to="/departments" style={{ textDecoration: "none" }}>
          <div className="first">
            <img src={Pulmonary} alt="" className="image-slider" />
            <p className="first-p1">Pulmonology</p>

            <p className="first-p2">
              Pulmonology: Lungs, breathing, respiratory diseases, asthma, COPD,
              pneumonia, bronchitis, oxygen, diagnostics, treatment.
            </p>
            <div class="hidden-text">
              Know More
              <ArrowForwardIcon />
            </div>
          </div>
        </Link>

        <Link to="/departments" style={{ textDecoration: "none" }}>
          <div className="first">
            <img src={Gyaen} alt="" className="image-slider" />
            <p className="first-p1">Gynecology</p>

            <p className="first-p2">
              Gynecology: Women’s health, reproductive system, menstruation,
              pregnancy, childbirth, ovaries, uterus, contraception, disorders,
              exams.
            </p>
            <div class="hidden-text">
              Know More
              <ArrowForwardIcon />
            </div>
          </div>
        </Link>
        <Link to="/departments" style={{ textDecoration: "none" }}>
          <div className="first below">
            <img src={Pediatrics} alt="" className="image-slider" />
            <p className="first-p1">Pediatrics</p>

            <p className="first-p2">
              Pediatrics: Children, infants, development, growth, vaccinations,
              diseases, diagnosis, treatment, nutrition, wellness.
            </p>
            <div class="hidden-text">
              Know More
              <ArrowForwardIcon />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Special;
