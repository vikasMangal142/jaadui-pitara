import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderContext from "../Context/HeaderContext";

function UserInfo() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo, setPageCount } = useContext(HeaderContext);

  const [data, setData] = useState({
    userName: "",
    userContact: "",
  });

  useEffect(() => {
    setPageCount(2);
    console.log("User Info", userInfo);
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUserInfo(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
    navigate("/language");
  };

  return (
    <>
      <div className="container dFlexAICenterJCCenter my-4 flex-1 p-1">
        <div className="container selection-buttons-outer-container">
          <div className="mt-4 text-center p-3 selection-header">
            <h1 className="fw-bold display-5">Please enter your details</h1>
          </div>

          <div className="container m-1 px-4 flex-lg-row">
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  placeholder="Your Name"
                  pattern="[a-zA-Z0-9]+"
                  title="Enter only alphanumeric characters"
                  onChange={changeHandler}
                  // value={ userInfo ? (userInfo.userName !== null ? userInfo.userName : ""):data.userName}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact No.</label>
                <input
                  type="text"
                  className="form-control"
                  id="userContact"
                  name="userContact"
                  placeholder="Your Contact No."
                  pattern="[1-9][0-9]{9}"
                  title="Enter a 10-digit contact number"
                  onChange={changeHandler}
                  // value={ userInfo ? (userInfo.userContact !== null ? userInfo.userContact: ""):data.userContact}
                  required
                />
              </div>
              <div className="dFlexAICenterJCCenter justify-content-between">
                <button
                  type="button"
                  onClick={handleBackClick}
                  className="my-4 btn btn-danger"
                >
                  &#60; Back
                </button>
                <button type="submit" className="my-4 btn btn-success">
                  Next &#62;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
