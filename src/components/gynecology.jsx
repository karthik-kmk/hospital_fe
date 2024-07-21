import React from "react";
import MainImg from "../assets/gyan-main.jpg";

import "./dept.css";
const Gyne = () => {
  return (
    <div id="gyne">
      <div className="red"></div>
      <div>
        <div className="div-dept1">
          <p className="ptag-dept">Gynecology</p>
        </div>

        <div className="div-dept3">
          <p className="ptag-dept1">
            Gynecology is a medical specialty focused on the health of the
            female reproductive system, encompassing the diagnosis, treatment,
            and prevention of conditions affecting the uterus, ovaries,
            fallopian tubes, and breasts. Gynecologists provide essential
            healthcare services, including routine examinations, Pap smears, and
            screenings for sexually transmitted infections (STIs), contributing
            to early detection and management of potential health issues. One
            key aspect of gynecology is managing menstrual disorders such as
            irregular periods, heavy bleeding, and premenstrual syndrome (PMS).
            Gynecologists also address hormonal imbalances, including polycystic
            ovary syndrome (PCOS) and menopause, offering treatment options that
            range from lifestyle modifications to hormone replacement therapy.
            In addition to managing common gynecological issues, gynecologists
            are trained to perform various surgical procedures, such as
            hysterectomies, laparoscopies, and treatment for gynecologic
            cancers. They also play a crucial role in reproductive health,
            providing fertility treatments, contraception counseling, and
            prenatal care. Preventive care in gynecology emphasizes regular
            screenings and vaccinations, such as the HPV vaccine, to prevent
            cervical cancer. By focusing on comprehensive care, gynecology aims
            to improve women's health and well-being throughout their lives,
            addressing both routine and complex health concerns.
          </p>
        </div>

        <img src={MainImg} alt="" className="dept-image" />
      </div>
      <div className="hr-dept"></div>
    </div>
  );
};

export default Gyne;
