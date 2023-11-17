import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderContext from "../Context/HeaderContext";

function Category() {
  const { setCategory, setPageCount } = useContext(HeaderContext);
  const navigate = useNavigate();

  useEffect(() => {
    setPageCount(4);
    setCategory(null);
  }, []);

  const handleCategorySelection = (value) => {
    console.log(value);
    localStorage.setItem("cardIndex", 0);
    setCategory(value);
    localStorage.setItem("category", value);
    navigate("/age");
  };

  const handleBackClick = () => {
    navigate("/language");
  };

  return (
    <div className="container dFlexAICenterJCCenter my-4 flex-1">
      <div className="container selection-buttons-outer-container">
        <div className="mt-4 text-center p-3 selection-header">
          <h1 className="fw-bold display-5">Select a category</h1>
        </div>
        <div className="container m-2 flex-lg-row selection-buttons">
          <button
            type="button"
            onClick={() => handleCategorySelection("Language and Communication Development")}
            className="btn btn-outline-dark px-4 my-2 option-tab"
          >
            Language and Communication Development
          </button>
          <button
            type="button"
            onClick={() => handleCategorySelection("Cognitive Development")}
            className="btn btn-outline-dark px-4 my-2 option-tab"
          >
            Cognitive Development
          </button>
          <button
            type="button"
            onClick={() => handleCategorySelection("Self Help")}
            className="btn btn-outline-dark px-4 my-2 option-tab"
          >
            Self Help
          </button>
          <button
            type="button"
            onClick={() => handleCategorySelection("Infant Stimulation")}
            className="btn btn-outline-dark px-4 my-2 option-tab"
          >
            Infant Stimulation
          </button>
          <button
            type="button"
            onClick={() => handleCategorySelection("Motor")}
            className="btn btn-outline-dark px-4 my-2 option-tab"
          >
            Motor
          </button>
          <button
            type="button"
            onClick={() => handleCategorySelection("Socialization")}
            className="btn btn-outline-dark px-4 my-2 option-tab"
          >
            Socialization
          </button>
        </div>
        <button
          type="button"
          onClick={handleBackClick}
          className="m-4 btn btn-success cards-button"
        >
          &#60; Back
        </button>
      </div>
    </div>
  );
}

export default Category;
