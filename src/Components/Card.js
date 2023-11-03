import React, { useState } from "react";
import img from "./img.png";
import config from "../config.json";
import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  const [cardIndex, setCardIndex] = useState(localStorage.getItem("cardIndex")?localStorage.getItem("cardIndex"):0);



  const handleBack = () => {
    navigate(-1);
  };

  const handleNeedHelp = () => {
    navigate("/needHelp");
  };

  const handlePrevCard = () => {
    localStorage.setItem("cardIndex", cardIndex-1);
    setCardIndex(cardIndex - 1);
  };
  
  const handleNextCard = () => {
    localStorage.setItem("cardIndex", cardIndex+1);
    setCardIndex(cardIndex + 1);
  };

  return (
    <>
      <div className="container dFlexAICenterJCCenter flex-1 my-4">
        <div className="card px-5 m-4 card-styling">
          <div className="card-body">
            <h3 className="card-title mt-4 fw-bold text-center">
              {config.cards[cardIndex].title}
            </h3>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="container-fluid px-4">
                <img
                  src={img}
                  className="card-img-top card-img-style"
                  alt="..."
                ></img>
              </div>
            </div>
            <div className="col-md-8 p-2 card-body-points">
              <ul className="list-group list-group-flush pe-3">
                {config.cards[cardIndex].Tasks.map((task) => (
                  <li key={task} className="card-body-list">
                    {task.Action}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-body p-0 d-flex justify-content-between align-items-center">
              <button
                type="button"
                onClick={handlePrevCard}
                disabled = {cardIndex===0}
                className="my-2 btn btn-outline-primary p-2"
              >
                &#60;
              </button>
              <div>
                <button
                  type="button"
                  onClick={handleBack}
                  className="m-2 btn btn-outline-success p-1"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNeedHelp}
                  className="m-2 btn btn-outline-danger p-1"
                >
                  Need Help
                </button>
              </div>
              <button
                type="button"
                onClick={handleNextCard}
                disabled = {cardIndex +1 >=config.cards.length}
                className="my-2 btn btn-outline-primary p-2"
              >
                &#62;
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
