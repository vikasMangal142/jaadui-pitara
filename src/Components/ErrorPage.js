import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clear the interval when the countdown reaches 0
    if (seconds === 0) {
      clearInterval(interval);
    }

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    // Redirect or perform any action when countdown reaches 0
    if (seconds === 0) {
      //   navigate("/userInfo");
      console.log("Countdown completed!");
    }
  }, [seconds]);

  const tryAgainHandler = () => {
    setSeconds(5);
    // e.preventDefault();
  };
  return (
    <div className="container dFlexAICenterJCCenter my-4 flex-1">
      <div className="container selection-buttons-outer-container">
        <div className="mt-4 text-center p-3 selection-header">
          <h1 className="fw-bold display-5">
            Please try again in {seconds} seconds
          </h1>
        </div>
        <div className="container m-2 flex-lg-row selection-buttons">
          <button
            type="button"
            onClick={tryAgainHandler}
            className="btn btn-success cards-button"
            disabled = {seconds>0}
          >
            Try again
          </button>
        </div>
        <button
          type="button"
          onClick={handleBackClick}
          className="mt-2 mb-4 btn btn-danger cards-button"
        >
          &#60; Back
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
