import React from "react";
import MainImg from "../assets/neuro-main.jpg";

import "./dept.css";
const Neuro = () => {
  return (
    <div id="neuro">
      <div className="red"></div>
      <div>
        <div className="div-dept1">
          <p className="ptag-dept">Neurosciences</p>
        </div>

        <div className="div-dept3">
          <p className="ptag-dept1">
            Neuroscience is the scientific study of the nervous system,
            encompassing its structure, function, development, genetics,
            biochemistry, physiology, pharmacology, and pathology. This
            interdisciplinary field integrates principles from biology,
            psychology, chemistry, physics, and medicine to understand how the
            brain and nervous system work. One key area of neuroscience research
            is understanding how neural circuits and networks process
            information, which is fundamental to understanding cognition,
            behavior, and neurological disorders. Advancements in technology,
            such as brain imaging techniques (e.g., MRI, fMRI, PET) and
            electrophysiological methods, have revolutionized our ability to
            study the brain in detail. These tools have enabled researchers to
            explore brain activity and connectivity in both healthy and diseased
            states, contributing to our knowledge of conditions like Alzheimer's
            disease, Parkinson's disease, schizophrenia, and depression.
            Neuroscience also explores neuroplasticity, the brain's ability to
            reorganize itself by forming new neural connections throughout life.
            This plasticity underlies learning and memory and offers insights
            into recovery from brain injuries. Additionally, neurogenetics and
            molecular neuroscience examine the roles of genes and molecules in
            neural function, providing targets for potential therapies.
          </p>
        </div>

        <img src={MainImg} alt="" className="dept-image" />
      </div>
      <div className="hr-dept"></div>
    </div>
  );
};

export default Neuro;
