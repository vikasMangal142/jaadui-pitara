import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HeaderContext from "../Context/HeaderContext";

function Header() {
  const { language, userAge, category, userInfo, pageCount } =
    useContext(HeaderContext);

  return (
    <div className="sticky-header">
      <nav
        className="navbar navbar-expand-lg navbar-light header-styling"
        aria-label="breadcrumb"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="https://diksha.gov.in/">
            <img
              src="/header_logo.png"
              alt="diksha.gov.in"
              className="header-logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse px-4 pt-3"
            id="navbarSupportedContent"
          >
            <ol className="breadcrumb">
              {pageCount >= 1 && (
                <li className="breadcrumb-item m-2">
                  <Link to="/">
                    {pageCount === 1 ? <b>Home</b> : <>Home</>}
                  </Link>
                </li>
              )}
              {pageCount >= 2 && (
                <li className="breadcrumb-item p-2">
                  <Link to="/userInfo">
                    {pageCount === 2 ? <b>User Details</b> : <>User Details</>}
                  </Link>
                </li>
              )}
              {pageCount >= 3 && (
                <li className="breadcrumb-item p-2">
                  <Link to="/language">
                    {pageCount === 3 ? (
                      <b>Language {language && <>({language})</>}</b>
                    ) : (
                      <>Language {language && <>({language})</>}</>
                    )}
                  </Link>
                </li>
              )}
              {pageCount >= 4 && (
                <li className="breadcrumb-item p-2">
                  <Link to="/category">
                    {/* Category {category && <>({category})</>} */}
                    {pageCount === 4 ? (
                      <b>Category {category && <>({category})</>}</b>
                    ) : (
                      <>Category {category && <>({category})</>}</>
                    )}
                  </Link>
                </li>
              )}
              {pageCount >= 5 && (
                <li className="breadcrumb-item p-2">
                  <Link to="/age">
                    {/* Age Group {userAge && <>({userAge})</>} */}
                    {pageCount === 5 ? (
                      <b>Age Group {userAge && <>({userAge})</>}</b>
                    ) : (
                      <>Age Group {userAge && <>({userAge})</>}</>
                    )}
                  </Link>
                </li>
              )}
              {pageCount >= 6 && (
                <li className="breadcrumb-item active p-2" aria-current="page">
                  <Link to="/card">
                    {pageCount === 6 ? <b>Cards</b> : <>Cards</>}
                  </Link>
                </li>
              )}
            </ol>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
