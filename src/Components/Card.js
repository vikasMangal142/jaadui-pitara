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
  const cardData = JSON.parse(config[cardIndex]);
  console.log("vikasconfig ", config[cardIndex]);

  useEffect(() => {
    window.speechSynthesis.cancel();
    setSpeakerOn(false);
    if (cardIndex >= 0 && cardIndex <= config.length - 1) {
      setReadText(
        cardData.title + cardData.Tasks.flatMap((task) => task.Action)
      );
    }
  }, [cardIndex]);

  const handleSpeak = () => {
    console.log("hello");
    if (speakerOn) {
      window.speechSynthesis.cancel();
      setSpeakerOn(false);
    } else {
      console.log("bey")
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


  speech.onend = function(event) {
    console.log('Speech has ended');
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
                className="material-symbols-rounded btn btn-outline-dark music-btn"
                onClick={handleSpeak}
              >
                text_to_speech
              </button>
            )}
          </div>
          <div className="card-body">
            <h3 className="card-title mt-4 fw-bold text-center">
              {cardData.title}
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
                {cardData.Tasks.map((task, index) => (
                  <li key={index} className="card-body-list">
                    {task.Action}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-body p-0 d-flex justify-content-between align-items-center">
              <button
                type="button"
                onClick={handlePrevCard}
                disabled={cardIndex === 0}
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
                disabled={cardIndex + 1 >= config.length}
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
