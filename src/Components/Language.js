import React, { useState } from 'react'
import './Language.css'
import { useNavigate } from "react-router-dom";
function Language() {
  const [language, setLanguage] = useState();
    const navigate = useNavigate();

    const handleBackClick = () =>{
        navigate(-1);
    }

    const handleLanguageSelection = (value) =>{
      console.log(value);
      setLanguage(value);
      navigate("/age");
    }

  return (
    <>
      <div className="container" style={{display:"flex", height:"100vh", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <div className="fw-bold m-2 text-center px-2" style={{fontSize:"2.5rem"}}>Select your language.</div>
        <div className="container m-2 flex-lg-row" style={{display:"flex", justifyContent:"space-evenly", alignItems:"center", maxWidth:"50rem", flexWrap:"wrap"}}>
            <button onClick={()=>handleLanguageSelection("English")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">English</button>
            <button onClick={()=>handleLanguageSelection("English")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">ଓଡିଆ</button>
            <button onClick={()=>handleLanguageSelection("English")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">ગુજરાતી</button>
            <button onClick={()=>handleLanguageSelection("English")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">मराठी</button>
            <button onClick={()=>handleLanguageSelection("English")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">বাংলা</button>
            <button onClick={()=>handleLanguageSelection("English")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">मैथिली</button>
            <button onClick={()=>handleLanguageSelection("English")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">ਪੰਜਾਬੀ</button>
            <button onClick={()=>handleLanguageSelection("English")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">മലയാളം</button>
            <button onClick={()=>handleLanguageSelection("English")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">தமிழ்</button>
            <button onClick={()=>handleLanguageSelection("English")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">తెలుగు</button>
            <button onClick={()=>handleLanguageSelection("English")} type="button" className="btn btn-outline-dark px-4 my-2 option-tab">ಕನ್ನಡ</button>
        </div>
        <button type="button" onClick={handleBackClick} className="m-4 btn btn-primary">&#60; Back</button>
      </div>
    </>
  )
}

export default Language
