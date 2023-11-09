import React, { useContext, useEffect, useState } from "react";
import "./Language.css";
import { useNavigate } from "react-router-dom";
import HeaderContext from "../Context/HeaderContext";

function Language() {
  const { setLanguage, setPageCount } = useContext(HeaderContext);
  const navigate = useNavigate();
  const [lang, setLang] = useState();

  useEffect(() => {
    setPageCount(2);
    setLanguage(null);
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleLanguageSelection = (value) => {
    console.log(value);
    setLanguage(value);
    localStorage.setItem("language", value);
    setLang(value);
    navigate("/category");
  };

  return (
    <>
      <div className="container dFlexAICenterJCCenter flex-column my-4 flex-1">
        <div className="container selection-buttons-outer-container">
          <div className="fw-bold m-2 text-center p-3 selection-header">
            Select your language
          </div>
          <div className="container m-2 flex-lg-row selection-buttons">
            <button
              onClick={() => handleLanguageSelection("English")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              English
            </button>
            <button
              onClick={() => handleLanguageSelection("हिन्दी")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              हिन्दी
            </button>
            <button
              onClick={() => handleLanguageSelection("ଓଡିଆ")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              ଓଡିଆ
            </button>
            <button
              onClick={() => handleLanguageSelection("ગુજરાતી")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              ગુજરાતી
            </button>
            <button
              onClick={() => handleLanguageSelection("मराठी")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              मराठी
            </button>
            <button
              onClick={() => handleLanguageSelection("বাংলা")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              বাংলা
            </button>
            <button
              onClick={() => handleLanguageSelection("मैथिली")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              मैथिली
            </button>
            <button
              onClick={() => handleLanguageSelection("ਪੰਜਾਬੀ")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              ਪੰਜਾਬੀ
            </button>
            <button
              onClick={() => handleLanguageSelection("മലയാളം")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              മലയാളം
            </button>
            <button
              onClick={() => handleLanguageSelection("தமிழ்")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              தமிழ்
            </button>
            <button
              onClick={() => handleLanguageSelection("తెలుగు")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              తెలుగు
            </button>
            <button
              onClick={() => handleLanguageSelection("ಕನ್ನಡ")}
              type="button"
              className="btn btn-outline-dark px-4 my-2 option-tab"
            >
              ಕನ್ನಡ
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

export default Language;
