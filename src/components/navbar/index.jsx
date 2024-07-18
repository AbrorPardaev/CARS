import React from 'react'
import belgi from '../../assets/belgi.jpg';
const Navbar = () => {
  return (
    <div style={{display: "flex", height: "90px", boxShadow: "0px 2px 10px 0px rgba(180, 18, 18, 0.1)",  alignItems: 'center', justifyContent: 'center',  gap: "140px"}}>
        <div><h1 style={{color: "#006DAB"}}>Camper</h1></div>
        <div style={{display: "flex", alignItems: 'center', gap: "80px"}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <p>Motor</p><img src={belgi} alt="belgi" />
              </div>
            <p>Caravan</p>
            <p>Tuning</p>
            <p>Used Car</p>
            <p>Camping Place</p>
        </div>
        <div></div>



    </div>
  );
};

export default Navbar;