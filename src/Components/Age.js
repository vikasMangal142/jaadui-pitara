import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Age() {
  const [userAge, setUserAge] = useState();

    const navigate = useNavigate();

    const handleBackClick = () =>{
        navigate(-1);
    }

    const handleAgeSelection = (value) =>{
      console.log(value);
      setUserAge(value);
      navigate("/category");


    }

  return (
    <>
      <div className="container" style={{display:"flex", height:"100vh", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <div className="fw-bold m-2 text-center px-2" style={{fontSize:"2.5rem"}}>Which age group you are in?</div>
        <div className="container m-2 flex-lg-row" style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", flexDirection:"column", maxWidth:"40rem", flexWrap:"wrap"}}>
            <button onClick={()=>handleAgeSelection("0-1")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">0-1 years</button>
            <button onClick={()=>handleAgeSelection("2-3")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">2-3 years</button>
            <button onClick={()=>handleAgeSelection("4-5")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">4-5 years</button>
            <button onClick={()=>handleAgeSelection("6-7")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">6-7 years</button>
            <button onClick={()=>handleAgeSelection("8+")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">8 years & Above</button>
        </div>
        <button type="button" onClick={handleBackClick} className="m-4 btn btn-primary">&#60; Back</button>
      </div>
    </>
  );
}

export default Age;
