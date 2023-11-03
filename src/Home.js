import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  

  const handleStart = () =>{
    navigate("/language");
  }

  return (
      <div className="container dFlexAICenterJCCenter flex-1">
        <div className="card px-5 mx-2 card-styling">
          <div className="card-body dFlexAICenterJCCenter flex-column">
            <h1 className="card-title mt-4 fw-bold text-center">
              Welcome to Digital Pitara
            </h1>
            <button onClick={handleStart} type="button" className=" mt-3 btn btn-primary">Start</button>
          </div>
          
        </div>
      </div>
  );
}










export default Home;
