import React, { useContext, useEffect, useState } from "react";
import img from "./img.png";
import { json, useNavigate } from "react-router-dom";
import HeaderContext from "../Context/HeaderContext";

function Card() {
  const navigate = useNavigate();
  const [cardIndex, setCardIndex] = useState(
    parseInt(localStorage.getItem("cardIndex"))
      ? parseInt(localStorage.getItem("cardIndex"))
      : 0
  );
  const { setPageCount } = useContext(HeaderContext);
  const [speakerOn, setSpeakerOn] = useState(false);
  const [pause, setPause] = useState(false);

  const speech = new SpeechSynthesisUtterance();
  const [readText, setReadText] = useState(null);

  const config = JSON.parse(
    localStorage.getItem(localStorage.getItem("category"))
  );

  console.log("AGE: ", localStorage.getItem("userAge"));

  const filteredData = config.filter(
    (obj) => obj.ageGroup === localStorage.getItem("userAge")
  );

  const cardData = filteredData[cardIndex];

  useEffect(() => {
    window.speechSynthesis.cancel();
    setSpeakerOn(false);
    if(filteredData.length>0){
      if (cardIndex >= 0 && cardIndex <= config.length - 1) {
        setReadText(
          cardData.title + cardData.Tasks.flatMap((task) => task)
        );
      }
    }
  }, [cardIndex]);

  const handleSpeak = () => {
    console.log("hello");
    if (speakerOn) {
      window.speechSynthesis.cancel();
      setSpeakerOn(false);
    } else {
      console.log("bey");
      setSpeakerOn(true);
      var voices = window.speechSynthesis.getVoices();
      var gujratiVoice = voices.find((voice) => voice.lang === "hi-IN");
      speech.voice = gujratiVoice;
      speech.text = readText;
      speech.pause = 5000;
      console.log(readText);
      window.speechSynthesis.speak(speech);
    }
  };

  speech.onend = function (event) {
    console.log("Speech has ended");
    setSpeakerOn(false);
  };

  const handlePause = () => {
    if (!pause) {
      window.speechSynthesis.pause();
      setPause(true);
    }
  };

  const handlePlayAfterPause = () => {
    if (pause) {
      console.log("aaya");
      window.speechSynthesis.resume();
      setPause(false);
    }
  };

  useEffect(() => {
    setPageCount(5);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const handleNeedHelp = () => {
    navigate("/needHelp");
  };

  const handlePrevCard = () => {
    if (cardIndex === 0) {
      return;
    } else {
      localStorage.setItem("cardIndex", parseInt(cardIndex - 1, 10));
      setCardIndex(cardIndex - 1);
    }
  };

  const handleNextCard = () => {
    localStorage.setItem("cardIndex", parseInt(cardIndex + 1, 10));
    setCardIndex(cardIndex + 1);
  };

  return (
    <>
      {filteredData.length > 0 ? (
        <>
          <div className="container dFlexAICenterJCCenter flex-1 my-4">
            <div className="card px-5 m-4 card-styling">
              <div className="music-btn-position d-flex align-center flex-column">
                {speakerOn ? (
                  <>
                    <button
                      type="button"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="stop"
                      className="material-symbols-rounded btn btn-outline-dark p-1 music-btn"
                      onClick={handleSpeak}
                    >
                      stop_circle
                    </button>
                    {!pause ? (
                      <>
                        <button
                          type="button"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="pause"
                          className="material-symbols-rounded btn btn-outline-dark p-1 music-btn"
                          onClick={handlePause}
                        >
                          pause_circle
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        data-toggle="tooltip"
                        data-placement="right"
                        title="play"
                        className="material-symbols-rounded btn btn-outline-dark p-1 music-btn"
                        onClick={handlePlayAfterPause}
                      >
                        play_circle
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    type="button"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Listen"
                    className="material-symbols-rounded btn btn-outline-dark music-btn px-2"
                    onClick={handleSpeak}
                  >
                    text_to_speech
                  </button>
                )}
              </div>
              <div className="card-body">
                <h3 className="card-title mt-4 fw-bold text-center">
                  {cardData.title} {cardData.ageGroup}
                </h3>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="container-fluid p-3">
                    <img
                      src={img}
                      className="card-img-top card-img-style"
                      alt="..."
                    ></img>
                  </div>
                </div>
                <div className="col-md-8 p-3 card-body-points">
                  <ul className="list-group list-group-flush">
                    {cardData.Tasks.map((task, index) => (
                      <li key={index} className="card-body-list">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-body p-0 mx-2 mb-3 d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    onClick={handlePrevCard}
                    disabled={cardIndex === 0}
                    className="my-2 btn btn-outline-primary p-1 arrow-button"
                  >
                    &#60;
                  </button>
                  <div className="d-flex flex-column flex-sm-row align-items-center">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="m-2 btn btn-outline-success p-1 cards-button"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNeedHelp}
                      className="m-2 btn btn-outline-danger p-1 cards-button"
                    >
                      Need Help
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={handleNextCard}
                    disabled={cardIndex + 1 >= filteredData.length}
                    className="my-2 btn btn-outline-primary p-1 arrow-button"
                  >
                    &#62;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>No Cards To Display</div>
        </>
      )}
    </>
  );
}

export default Card;
