import React from "react";
import { useState } from "react";
import "./cards.css";
import logo from "../assets/output-onlinegiftools.gif";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import doc1 from "../assets/Thirumalesh.webp";
import doc2 from "../assets/lokesh.webp";
import doc3 from "../assets/sanjay.webp";
import doc4 from "../assets/sunil-pul.webp";
import doc5 from "../assets/prakurthi-gyn.webp";
import doc6 from "../assets/pedia-chetan.webp";
import Patient from "../components/patient";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Height } from "@mui/icons-material";
import Modalortho from "../components/modalortho";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Cards = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="cards-center">
      <div>
        {/* first card */}
        <div className="cards-main">
          <div className="cards-main-flex">
            <div className="cards-main-image-div">
              <img src={doc1} alt="" className="cards-main-image-image" />
            </div>

            <div className="cards-main-div1">
              <p className="cards-main-p1">Dr. Thirumalesh K Reddy</p>
              <p className="cards-main-p">
                Chairman - Medical Advisory Board, Healior DM Healthcare - GCC &
                India,
              </p>
              <p className="cards-main-p">
                Global Director - Healior International Institute of Oncology -
                GCC & India, Lead
              </p>
              <p className="cards-main-p">Consultant - Orthopedics</p>
              <p className="cards-main-p">PIPAC Super-specialist</p>
              <p className="cards-main-p">
                MBBS, MS, MCh(Onco), FRCS Edinburgh
              </p>
            </div>

            <div className="cards-main-div2">
              <p className="cards-main-p1">SPECIALITY</p>
              <p className="cards-main-pp">Orthopedics</p>
            </div>
          </div>

          <button onClick={handleOpen} className="cards-button">
            Book An Appointment
            <ArrowForwardIcon className="arrow-card" />
          </button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
                <Modalortho/>
            </Box>
          </Modal>
        </div>

        {/* second card */}

        <div className="cards-main">
          <div className="cards-main-flex">
            <div className="cards-main-image-div">
              <img src={doc2} alt="" className="cards-main-image-image" />
            </div>

            <div className="cards-main-div1">
              <p className="cards-main-p1">Dr. Lokesh B</p>
              <p className="cards-main-p">
                Chairman - Medical Advisory Board, Healior DM Healthcare - GCC &
                India,
              </p>
              <p className="cards-main-p">
                Global Director - Healior International Institute of Oncology -
                GCC & India, Lead
              </p>
              <p className="cards-main-p">Consultant - Neurology</p>
              <p className="cards-main-p">PIPAC Super-specialist</p>
              <p className="cards-main-p">
                MBBS, MS, MCh(Onco), FRCS Edinburgh
              </p>
            </div>

            <div className="cards-main-div2">
              <p className="cards-main-p1">SPECIALITY</p>
              <p className="cards-main-pp">Neurology</p>
            </div>
          </div>

          <button onClick={handleOpen} className="cards-button">
            Book An Appointment
            <ArrowForwardIcon className="arrow-card" />
          </button>
        </div>

        {/* third */}

        <div className="cards-main">
          <div className="cards-main-flex">
            <div className="cards-main-image-div">
              <img src={doc3} alt="" className="cards-main-image-image" />
            </div>

            <div className="cards-main-div1">
              <p className="cards-main-p1">Dr. Sanjay Bhat</p>
              <p className="cards-main-p">
                Chairman - Medical Advisory Board, Healior DM Healthcare - GCC &
                India,
              </p>
              <p className="cards-main-p">
                Global Director - Healior International Institute of Oncology -
                GCC & India, Lead
              </p>
              <p className="cards-main-p">Consultant - Cardiology</p>
              <p className="cards-main-p">PIPAC Super-specialist</p>
              <p className="cards-main-p">
                MBBS, MS, MCh(Onco), FRCS Edinburgh
              </p>
            </div>

            <div className="cards-main-div2">
              <p className="cards-main-p1">SPECIALITY</p>
              <p className="cards-main-pp">Cardiology</p>
            </div>
          </div>

          <button className="cards-button">
            Book An Appointment
            <ArrowForwardIcon className="arrow-card" />
          </button>
        </div>

        {/* 4th */}

        <div className="cards-main">
          <div className="cards-main-flex">
            <div className="cards-main-image-div">
              <img src={doc4} alt="" className="cards-main-image-image" />
            </div>

            <div className="cards-main-div1">
              <p className="cards-main-p1">Dr. Sunil Kumar K</p>
              <p className="cards-main-p">
                Chairman - Medical Advisory Board, Healior DM Healthcare - GCC &
                India,
              </p>
              <p className="cards-main-p">
                Global Director - Healior International Institute of Oncology -
                GCC & India, Lead
              </p>
              <p className="cards-main-p">Consultant - Pulmonology</p>
              <p className="cards-main-p">PIPAC Super-specialist</p>
              <p className="cards-main-p">
                MBBS, MS, MCh(Onco), FRCS Edinburgh
              </p>
            </div>

            <div className="cards-main-div2">
              <p className="cards-main-p1">SPECIALITY</p>
              <p className="cards-main-pp">Pulmonology</p>
            </div>
          </div>

          <button className="cards-button">
            Book An Appointment
            <ArrowForwardIcon className="arrow-card" />
          </button>
        </div>

        {/* 5th */}

        <div className="cards-main">
          <div className="cards-main-flex">
            <div className="cards-main-image-div">
              <img src={doc5} alt="" className="cards-main-image-image" />
            </div>

            <div className="cards-main-div1">
              <p className="cards-main-p1">Dr. Prakrutha S</p>
              <p className="cards-main-p">
                Chairman - Medical Advisory Board, Healior DM Healthcare - GCC &
                India,
              </p>
              <p className="cards-main-p">
                Global Director - Healior International Institute of Oncology -
                GCC & India, Lead
              </p>
              <p className="cards-main-p">Consultant - Gynaecology</p>
              <p className="cards-main-p">PIPAC Super-specialist</p>
              <p className="cards-main-p">
                MBBS, MS, MCh(Onco), FRCS Edinburgh
              </p>
            </div>

            <div className="cards-main-div2">
              <p className="cards-main-p1">SPECIALITY</p>
              <p className="cards-main-pp">Gynaecology</p>
            </div>
          </div>

          <button className="cards-button">
            Book An Appointment
            <ArrowForwardIcon className="arrow-card" />
          </button>
        </div>

        {/* 6th */}

        <div className="cards-main">
          <div className="cards-main-flex">
            <div className="cards-main-image-div">
              <img src={doc6} alt="" className="cards-main-image-image" />
            </div>

            <div className="cards-main-div1">
              <p className="cards-main-p1">Dr. Chetan Ginigeri</p>
              <p className="cards-main-p">
                Chairman - Medical Advisory Board, Healior DM Healthcare - GCC &
                India,
              </p>
              <p className="cards-main-p">
                Global Director - Healior International Institute of Oncology -
                GCC & India, Lead
              </p>
              <p className="cards-main-p">Consultant - Paediatrics</p>
              <p className="cards-main-p">PIPAC Super-specialist</p>
              <p className="cards-main-p">
                MBBS, MS, MCh(Onco), FRCS Edinburgh
              </p>
            </div>

            <div className="cards-main-div2">
              <p className="cards-main-p1">SPECIALITY</p>
              <p className="cards-main-pp">Paediatrics </p>
            </div>
          </div>

          <button className="cards-button">
            Book An Appointment
            <ArrowForwardIcon className="arrow-card" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
