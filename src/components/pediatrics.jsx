import React from "react";
import MainImg from "../assets/ped-main.jpg";

import "./dept.css";
const Pediatrics = () => {
  return (
    <div id="pedia">
      <div>
        <div className="div-dept1">
          <p className="ptag-dept">Pediatrics</p>
        </div>

        <div className="div-dept3">
          <p className="ptag-dept1">
            Pediatrics is a medical specialty dedicated to the health and
            well-being of infants, children, and adolescents. Pediatricians
            focus on the physical, emotional, and social development of
            children, ensuring they reach their full potential. This field
            covers a wide range of health services, from preventive care and
            immunizations to diagnosing and treating acute and chronic
            illnesses. Preventive care is a cornerstone of pediatrics.
            Pediatricians conduct regular check-ups to monitor growth and
            development, administer vaccines to prevent infectious diseases, and
            provide guidance on nutrition, safety, and behavioral issues. Early
            detection of developmental disorders and early intervention
            strategies are critical components of pediatric care. Pediatricians
            manage common childhood illnesses such as ear infections, asthma,
            and allergies, as well as more serious conditions like congenital
            abnormalities, genetic disorders, and pediatric cancers. They
            collaborate with specialists when necessary to provide comprehensive
            care tailored to each child's needs. Pediatrics also emphasizes the
            importance of a family-centered approach, recognizing the role of
            parents and caregivers in a child's health. By fostering open
            communication and education, pediatricians empower families to make
            informed decisions and promote healthy lifestyles for their
            children. The ultimate goal of pediatrics is to ensure that children
            grow up healthy, happy, and thriving.
          </p>
        </div>

        <img src={MainImg} alt="" className="dept-image" />
      </div>
      <div className="hr-dept"></div>
    </div>
  );
};

export default Pediatrics;
