import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderContext from "../Context/HeaderContext";

function Age() {
  const { setUserAge, setPageCount } = useContext(HeaderContext);

  const navigate = useNavigate();

  useEffect(() => {
    setPageCount(3);
    setUserAge(null);
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleAgeSelection = (value) => {
    console.log(value);
    setUserAge(value);
    localStorage.setItem("userAge", value);
    navigate("/category");
  };

  return (
    <>
      <div className="container dFlexAICenterJCCenter my-4 flex-1">
        <div className="container m-4 p-4 selection-buttons-outer-container">
          <div className="fw-bold m-2 text-center p-3 selection-header">
            Which age group you are in?
          </div>
          <div className="container m-2 flex-lg-row selection-buttons">
            <button
              onClick={() => handleAgeSelection("0-1 years")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              0-1 years
            </button>
            <button
              onClick={() => handleAgeSelection("2-3 years")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              2-3 years
            </button>
            <button
              onClick={() => handleAgeSelection("4-5 years")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              4-5 years
            </button>
            <button
              onClick={() => handleAgeSelection("6-7 years")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              6-7 years
            </button>
            <button
              onClick={() => handleAgeSelection("8+ years")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              8 years & Above
            </button>
          </div>
          <button
            type="button"
            onClick={handleBackClick}
            className="m-4 btn btn-primary"
          >
            &#60; Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Age;
