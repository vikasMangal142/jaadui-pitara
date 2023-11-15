import React from "react";
import { useNavigate } from "react-router-dom";

function NeedHelp() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container dFlexAICenterJCCenter my-4 flex-1">
        <div className="container  p-4 m-4 d-flex flex-column align-items-center justify-content-center bg-white contact-info-outer-container card-styling">
          <div className="container py-1 px-3 text-center contact-info-text">
            Contact Information
          </div>
          <h2 className="container text-center fw-bolder my-4">
            Get Appropriate help from our team
          </h2>
          <div className="container d-flex flex-sm-row flex-column align-items-center justify-content-center">
            <div className="card mb-3 p-3 card-contact mx-3">
              <div className="container contact-icon-box d-flex align-items-center justify-content-center">
                <span className="material-symbols-rounded">call</span>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center color-dark-gray">
                  +91 2458287241
                </h5>
              </div>
            </div>
            <div className="card mb-3  p-3 card-contact mx-3">
              <div className="container contact-icon-box d-flex align-items-center justify-content-center">
                <span className="material-symbols-rounded">chat</span>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center color-dark-gray">
                  +91 2458142282
                </h5>
              </div>
            </div>
            <div className="card mb-3 p-3 card-contact mx-3">
              <div className="container contact-icon-box d-flex align-items-center justify-content-center">
                <span className="material-symbols-rounded">email</span>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center color-dark-gray">
                  sasdgsd@gmail.com
                </h5>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleBackClick}
            className="m-2 btn btn-success p-1 cards-button"
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default NeedHelp;
