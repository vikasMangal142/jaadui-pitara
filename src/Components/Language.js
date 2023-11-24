import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderContext from "../Context/HeaderContext";

const IndianLanguages = [
  { name: "हिन्दी", code: "hi" },
  { name: "ଓଡିଆ", code: "or" },
  { name: "ગુજરાતી", code: "gu" },
  { name: "मराठी", code: "mr" },
  { name: "বাংলা", code: "bn" },
  { name: "मैथिली", code: "mai" },
  { name: "ਪੰਜਾਬੀ", code: "pa" },
  { name: "മലയാളം", code: "ml" },
  { name: "தமிழ்", code: "ta" },
  { name: "తెలుగు", code: "te" },
  { name: "ಕನ್ನಡ", code: "kn" },
];

function Language() {
  const { setLanguage, setPageCount } = useContext(HeaderContext);
  const navigate = useNavigate();
  const [lang, setLang] = useState();

  useEffect(() => {
    setPageCount(3);
    setLanguage(null);
  }, []);

  const handleBackClick = () => {
    navigate("/userInfo");
  };

  const handleLanguageSelection = (value) => {
    console.log("vikasfdsvs");
    console.log(IndianLanguages.find((lango) => lango.name === value).code);
    // <UsingRegex targetLanguage = {IndianLanguages.find((lango)=> lango.name  === value).code}></UsingRegex>
    if(localStorage.getItem("language") === value){
      navigate("/category")
    }
    else{
      console.log(value);
      setLanguage(value);
      localStorage.setItem("language", value);
      setLang(value);
      navigate(
        `/translate/usingRegex/${
          IndianLanguages.find((lango) => lango.name === value).code
        }`
      );
    }
  };

  return (
    <>
      <div className="container dFlexAICenterJCCenter my-4 flex-1">
        <div className="container selection-buttons-outer-container">
          <div className="mt-4 text-center p-3 selection-header">
            <h1 className="fw-bold display-5">Select your language</h1>
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
            className="m-4 btn btn-success p-1 cards-button"
          >
            &#60; Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Language;
