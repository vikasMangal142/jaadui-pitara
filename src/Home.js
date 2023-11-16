import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderContext from "./Context/HeaderContext";
import cong from "./config1.json";

function Home() {
  const navigate = useNavigate();
  const { setPageCount } = useContext(HeaderContext);

  const handleStart = () => {
    navigate("/userInfo");
  };

  useEffect(() => {
    setPageCount(1);
    console.log("Home");
  }, []);

  console.log("string: ", JSON.stringify(cong));

  return (
    <div className="container dFlexAICenterJCCenter flex-1">
      <div className="card px-5 mx-2 card-styling home-card">
        <div className="card-body dFlexAICenterJCCenter flex-column">
          <h1 className="card-title mt-4 fw-bold display-1 text-center dancing-script-font fw-2">
            Prarambh
          </h1>
          <h5 className="m-2 ">Prarambhik Bal Vikas</h5>
          <button
            onClick={handleStart}
            type="button"
            className=" mt-3 btn btn-primary"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
