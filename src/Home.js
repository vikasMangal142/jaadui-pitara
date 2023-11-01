import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    e.preventDefault();
    navigate("/bhashini");
  };

  const handleStart = () =>{
    navigate("/language");
  }

  return (
    <div className="home">
      <h1>Welcome to Digital Pitara</h1>
      <button onClick={clickHandler} type="button" className=" mt-3 btn btn-outline-secondary">Go to Bhashini Translator</button>
      <button onClick={handleStart} type="button" className=" mt-3 btn btn-outline-secondary">Start</button>
    </div>
  );
}

export default Home;
