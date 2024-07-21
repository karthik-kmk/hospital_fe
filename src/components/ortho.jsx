import React from "react";
import MainImg from "../assets/ortho-main.jpg";


import "./dept.css";
const Ortho = () => {
  return (
    <div id="ortho">
     
      <div>
        <div className="div-dept1">
          <p className="ptag-dept">Orthopedics</p>
        </div>

        <div className="div-dept3">
          <p className="ptag-dept1">
            Orthopedics is a medical specialty focused on diagnosing, treating,
            and preventing disorders of the musculoskeletal system, which
            includes bones, joints, ligaments, tendons, muscles, and nerves.
            Orthopedic surgeons employ both surgical and non-surgical methods to
            address a wide range of conditions, such as fractures, arthritis,
            sports injuries, spine disorders, and congenital deformities. One of
            the primary goals of orthopedics is to restore function and
            alleviate pain, enabling patients to return to their daily
            activities and improve their quality of life. Treatments can vary
            from physical therapy and medications to more advanced interventions
            like joint replacement surgeries, arthroscopy, and minimally
            invasive procedures. Technological advancements have significantly
            enhanced orthopedic care. Innovations such as robotic-assisted
            surgery, 3D printing for custom implants, and regenerative medicine
            techniques like stem cell therapy are revolutionizing treatment
            outcomes. Additionally, the integration of biomechanics and imaging
            technologies has improved diagnostic accuracy and personalized
            treatment plans. Orthopedic research continues to evolve, focusing
            on improving surgical techniques, developing better biomaterials,
            and exploring the genetic and molecular basis of musculoskeletal
         
          </p>
        </div>

        <img src={MainImg} alt="" className="dept-image" />
        
      </div>
      <div className="hr-dept"></div>
    </div>
  );
};

export default Ortho;
