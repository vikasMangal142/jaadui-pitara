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

  const imageUrlArray = [
    "/images/1.png",
    "/images/image1.jpg",
    "/images/image1.png",
  ];

  const config = JSON.parse(
    localStorage.getItem(localStorage.getItem("category"))
  );
  const userData = JSON.parse(localStorage.getItem("userInfo"));
  console.log("AGE: ", localStorage.getItem("userAge"));

  const filteredData = config.filter(
    (obj) => obj.ageGroup === localStorage.getItem("userAge")
  );

  const cardData = filteredData[cardIndex];

  useEffect(() => {
    window.speechSynthesis.cancel();
    setSpeakerOn(false);
    if (filteredData.length > 0) {
      if (cardIndex >= 0 && cardIndex <= config.length - 1) {
        setReadText(cardData.title + cardData.Tasks.flatMap((task) => task));
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
    setPageCount(6);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const handleBackToCategory = () => {
    navigate("/category");
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

  const handleTaskYes = (e) => {
    e.preventDefault();
    const data = {
      cardIndex: cardData.cardIndex,
      category: cardData.categoryInEnglish,
      userId: userData.userName+userData.userContact,
      ageGroup: cardData.ageGroup,
      timeStamp: Date.now(),
      status:"Success",
      language:(localStorage.getItem("languageCode")?localStorage.getItem("languageCode"):"en")
    };
    fetch(
      "https://sheet.best/api/sheets/f38fbee0-5173-4aaf-8dcf-a2a973707444",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
    if (!(cardIndex + 1 >= filteredData.length)) {
      handleNextCard();
    }
  };

  const handleTaskSkip = (e) => {
    e.preventDefault();
    const data = {
      cardIndex: cardData.cardIndex,
      category: cardData.categoryInEnglish,
      userId: userData.userName+userData.userContact,
      ageGroup: cardData.ageGroup,
      timeStamp: Date.now(),
      status:"Pending",
      language:(localStorage.getItem("languageCode")?localStorage.getItem("languageCode"):"en")
    };
    fetch(
      "https://sheet.best/api/sheets/f38fbee0-5173-4aaf-8dcf-a2a973707444",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
    if (!(cardIndex + 1 >= filteredData.length)) {
      handleNextCard();
    }
  };

  return (
    <>
      {filteredData.length > 0 ? (
        <>
          <div className="container dFlexAICenterJCCenter flex-1 my-4">
            <div className="card px-5 m-3 card-styling">
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
                  <div
                    id="carouselExampleInterval"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div
                        className="carousel-item active"
                        data-bs-interval="3000"
                      >
                        <img src={cardData.imageUrl[0]} className="d-block w-100" alt="first Image"></img>
                      </div>
                      { cardData.imageUrl && cardData.imageUrl.slice(1).map((item, index) => (
                        <div
                          key={index}
                          className="carousel-item"
                          data-bs-interval="3000"
                        >
                          <img
                            src={item}
                            className="d-block w-100"
                            alt="hello"
                          ></img>
                        </div>
                      ))}
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleInterval"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleInterval"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                  {/* <img
                      src="/images/1.png"
                      className="card-img-top card-img-style"
                      alt="..."
                    ></img> */}
                </div>
                <div className="col-md-8 p-3 card-body-points flex-column">
                  <ul className="list-group list-group-flush">
                    {cardData.Tasks.map((task, index) => (
                      <li key={index} className="card-body-list">
                        {task}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 task-box">
                    <h5 className="fw-bold">
                      Did child complete the given task?
                    </h5>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        onClick={handleTaskYes}
                        //disabled={cardIndex + 1 >= filteredData.length}
                        className="mx-2 mt-2 btn btn-success task-button"
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        onClick={handleTaskSkip}
                        // disabled={cardIndex + 1 >= filteredData.length}
                        className="mx-2 mt-2 btn btn-danger task-button"
                      >
                        Skip
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0 mx-2 mb-3 mt-1 d-flex justify-content-between align-items-center">
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
                      onClick={handleBackToCategory}
                      className="m-2 btn btn-outline-primary p-1 cards-button"
                    >
                      Back to Category
                    </button>
                    {/* <button
                      type="button"
                      onClick={handleNeedHelp}
                      className="m-2 btn btn-outline-danger p-1 cards-button"
                    >
                      Need Help
                    </button> */}
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
          <div className="container dFlexAICenterJCCenter flex-1">
            <div className="card px-5 mx-2 card-styling home-card">
              <div className="card-body dFlexAICenterJCCenter flex-column">
                <h5 className="card-title mt-4 fw-bold display-6 text-center">
                  No cards to display
                </h5>
                <button
                  onClick={handleBack}
                  type="button"
                  className=" mt-3 btn btn-success"
                >
                  &#60; Back
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Card;
