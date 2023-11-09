import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderContext from "../Context/HeaderContext";
import jsonData from "../config1.json";
import {translate} from "./Utilities.js";
import { useState, useParams } from "react";

const translatedArrayOfCards = [];


const IndianLanguages = [
  { name: 'हिन्दी', code: 'hi' },
  { name: 'ଓଡିଆ', code: 'or' },
  { name: 'ગુજરાતી', code: 'gu' },
  { name: 'मराठी', code: 'mr' },
  { name: 'বাংলা', code: 'bn' },
  { name: 'मैथिली', code: 'mai' },
  { name: 'ਪੰਜਾਬੀ', code: 'pa' },
  { name: 'മലയാളം', code: 'ml' },
  { name: 'தமிழ்', code: 'ta' },
  { name: 'తెలుగు', code: 'te' },
  { name: 'ಕನ್ನಡ', code: 'kn' }
];



function translateAllCards(targetLanguage, categoryObject, setCategoryObject) {
  let x = 0;
  console.log("jsonLength", jsonData.cards.length);

  //   const promises = jsonData.cards.map(card => fetch("", card.imageUrl))
  //   Promise.all(promises).then(d => console.log(d))

  jsonData.cards.forEach(function (card) {
    x++;
    console.log(
      translate(
        { ...card, categoryInEnglish: card.category },
        translatedArrayOfCards,
        targetLanguage,
        categoryObject,
        setCategoryObject
      )
    );

  });
}

function Age() {
  const { setUserAge, setPageCount } = useContext(HeaderContext);

  const navigate = useNavigate();

  useEffect(() => {
    setPageCount(4);
    setUserAge(null);
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleAgeSelection = (value) => {
    console.log(value);
    setUserAge(value);
    localStorage.setItem("userAge", value);
    navigate("/card");
  };

  const [categoryObject, setCategoryObject] = useState({});

  useEffect(() => {
    if(localStorage.getItem("language")){
      console.log("hello ", localStorage.getItem("language"));
      if(localStorage.getItem("language") && localStorage.getItem("language")!=="English"){
        console.log("vdfsd:" , IndianLanguages.find((lango)=> lango.name === localStorage.getItem("language")).code);
        translateAllCards(IndianLanguages.find((lango)=> lango.name === localStorage.getItem("language")).code, categoryObject, setCategoryObject);
      }
    }
  }, []);

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
            {localStorage.getItem("category") !== "Infant Simulation" && (
              <>
                <button
                  onClick={() => handleAgeSelection("2-3 years")}
                  type="button"
                  className="btn btn-outline-dark px-4 my-2 option-tab"
                >
                  1-2 years
                </button>
                <button
                  onClick={() => handleAgeSelection("4-5 years")}
                  type="button"
                  className="btn btn-outline-dark px-4 my-2 option-tab"
                >
                  2-3 years
                </button>
                <button
                  onClick={() => handleAgeSelection("6-7 years")}
                  type="button"
                  className="btn btn-outline-dark px-4 my-2 option-tab"
                >
                  3-4 years
                </button>
                <button
                  onClick={() => handleAgeSelection("8+ years")}
                  type="button"
                  className="btn btn-outline-dark px-4 my-2 option-tab"
                >
                  4-5 years
                </button>
                <button
                  onClick={() => handleAgeSelection("8+ years")}
                  type="button"
                  className="btn btn-outline-dark px-4 my-2 option-tab"
                >
                  5-6 years
                </button>
              </>
            )}
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
