import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import RingVolumeIcon from '@mui/icons-material/RingVolume';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen} className="modal-hover">
        <p className="first-p">Contact</p>
        <p className="second-p">Us</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title1" variant="h6" component="h2">
            Call Us
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="modal2-flex1">
              <div className="modal-icon-bg">
                <HeadphonesIcon className="modal-icon" />
              </div>

              <div className="modal2-flex2">
                <p className="modal-p1">Helpline Number</p>
                <p className="modal-p2">080-4342-0100</p>
              </div>
            </div>


            <div className="modal2-flex1">
              <div className="modal-icon-bg1">
                <RingVolumeIcon className="modal-icon" />
              </div>

              <div className="modal2-flex2">
                <p className="modal-p3">Emergency Number</p>
                <p className="modal-p4">080-4342-0100</p>
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
