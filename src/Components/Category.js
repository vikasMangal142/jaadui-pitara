import React from 'react';
import { useNavigate } from "react-router-dom";

function Category() {

    const navigate = useNavigate();

    const handleBackClick = () =>{
        navigate(-1);
    }

  return (
    <div className="category">
      <div className="container" style={{display:"flex", height:"100vh", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <div className="fw-bold m-2 text-center px-2" style={{fontSize:"2.5rem"}}>Select a category</div>
        <div className="container m-2 flex-lg-row" style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", flexDirection:"column", maxWidth:"40rem", flexWrap:"wrap"}}>
            <button type="button" className="btn btn-outline-dark px-4 my-2 option-tab">Language</button>
            <button type="button" className="btn btn-outline-dark px-4 my-2 option-tab">Cognitive</button>
            <button type="button" className="btn btn-outline-dark px-4 my-2 option-tab">Self Help</button>
            <button type="button" className="btn btn-outline-dark px-4 my-2 option-tab">Infant Stimulation</button>
            <button type="button" className="btn btn-outline-dark px-4 my-2 option-tab">Motor</button>
            <button type="button" className="btn btn-outline-dark px-4 my-2 option-tab">Socialization</button>

        </div>
        <button type="button" onClick={handleBackClick} className="m-4 btn btn-primary">&#60;  Back</button>
      </div>
    </div>
  );
}

export default Category;