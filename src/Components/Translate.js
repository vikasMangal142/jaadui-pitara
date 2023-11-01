import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';

function Translate() {
    const navigate = useNavigate();
  const [translatedText, setTranslatedText] = useState("");
  const [givenText, setGivenText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [errorMessage, setErrorMessage] = useState("   ");
  
  const handlePreviousPage = () =>{
    navigate(-1);
  }

  const handleSourceLanguageSelection = (newValue) => {
    setSourceLanguage(newValue);
  };

  const handleTargetLanguageSelection = (newValue) => {
    setTargetLanguage(newValue);
  };

  const handleGivenText = (e) => {
    setGivenText(e.target.value);
    setTranslatedText("");
  };

  const handleTranslation = (event) => {
    event.preventDefault();
    if (givenText.length === 0) {
      setErrorMessage("This field can't be empty");
    } else {
      const data = {
        "pipelineTasks": [
            {
                "taskType": "translation",
                "config": {
                    "language": {
                        "sourceLanguage": "",
                        "targetLanguage": ""
                    }
                }
            }
        ],
        "pipelineRequestConfig": {
            "pipelineId": "64392f96daac500b55c543cd"
        }
    }
        setErrorMessage("")
        axios.post(`http://localhost:8080/Translate/myEndpoint/${sourceLanguage}/${targetLanguage}/${givenText}`, data).then((response)=>{
          console.log("Response: ", response);
          // const jsondata = JSON.stringify(response.data.pipelineResponse);
          console.log(response.data.pipelineResponse);
          const firstElement = response.data.pipelineResponse.length > 0  ? response.data.pipelineResponse[0] : null;
          const fetchText = firstElement.output.length > 0 ? firstElement.output[0].target : null;
          console.log(firstElement.output);
          setTranslatedText(fetchText);
        })
        .catch((error)=>{
          console.error("Error: ", error);
        });
      // setTranslatedText(fetchedTranslatedText);
    }
  };


  return (
    <>
      <div
        style={{
          height: "100vh",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#a2d2ff",
        }}
      >
        <div
          className="container-fluid p-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "1rem",
            margin: "auto",
            width: "max-content",
            backgroundColor: "white",
          }}
        >
          <div className="container text-center">
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Quick</div>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              translation
            </div>
          </div>
          <select
            className="form-select text-center"
            aria-label="Default select example"
            style={{ border: "none", width: "auto", fontSize:"0.8rem" }}
            value={sourceLanguage}
            onChange={(event) => {
              handleSourceLanguageSelection(event.target.value);
            }}
          >
            <option value="" disabled>
              Source Language
            </option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
          </select>
          <div className="mt-3">
            <textarea
              className="form-control"
              rows="3"
              value={givenText}
              onChange={handleGivenText}
              style={{ border: "none", backgroundColor: "#f3ecdd" }}
            ></textarea>
          </div>
          <div
            className="container-fluid mt-0 p-0"
            style={{ fontSize: "0.7rem", color: "red", height:"1rem" }}
          >
            {errorMessage}
          </div>
          <div className="container text-center mt-2">
            <div style={{ fontSize: "0.8rem" }}>Translate to</div>
          </div>
          <select
            className="form-select text-center"
            aria-label="Default select example"
            style={{ border: "none", width: "auto", fontSize:"0.8rem" }}
            value={targetLanguage}
            onChange={(event) => {
              handleTargetLanguageSelection(event.target.value);
            }}
          >
            <option value="" disabled>
              Target Language
            </option>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
          </select>
          <div className="mb-3 mt-1">
            <textarea
              className="form-control"
              rows="3"
              value={translatedText}
              style={{ border: "none", backgroundColor: "#f3ecdd" }}
            ></textarea>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-outline-primary p-1"
              onClick={handleTranslation}
            >
              Translate
            </button>
            <div>

            <button type="button" className="mt-3 btn btn-outline-info" onClick={handlePreviousPage}>&larr; Back</button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Translate;
