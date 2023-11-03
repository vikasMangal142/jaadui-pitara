import React from 'react';
import { useNavigate } from "react-router-dom";

function Category() {

    const navigate = useNavigate();

    const handleBackClick = () =>{
        navigate(-1);
    }

  return (
      <div className="container dFlexAICenterJCCenter flex-column my-4 flex-1">
        <div className="container selection-buttons-outer-container">
          <div className="fw-bold m-2 text-center px-2 selection-header">Select a category</div>
          <div className="container m-2 flex-lg-row selection-buttons">
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