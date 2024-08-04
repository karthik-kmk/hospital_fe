import React from 'react';
import './pharmacy.css';
import MedicineCard  from "../components/medicinecard";

const medicines = [
  {
    name: "Aspirin",
    image: "https://via.placeholder.com/150",
    description: "Pain reliever and fever reducer."
  },
  {
    name: "Ibuprofen",
    image: "https://via.placeholder.com/150",
    description: "Nonsteroidal anti-inflammatory drug (NSAID)."
  },
  {
    name: "Acetaminophen",
    image: "https://via.placeholder.com/150",
    description: "Pain reliever and a fever reducer."
  }
];

function Pharmacy() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Blue Pharmacy</h1>
      </header>
      <div className="medicine-list">
        {medicines.map((medicine, index) => (
          <MedicineCard 
            key={index} 
            name={medicine.name} 
            image={medicine.image} 
            description={medicine.description} 
          />
        ))}
      </div>
    </div>
  );
}

export default Pharmacy;
