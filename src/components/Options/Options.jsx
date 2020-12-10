import React, { useState, useEffect } from "react";
import "./options.css";
function Options({ option, index }) {
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  useEffect(() => {
    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4(false);
  }, [index]);
  function handleClick(e) {
    let id = e.target.id;
    if (id === "1") {
      setOption1(true);
      setOption2(false);
      setOption3(false);
      setOption4(false);
    } else if (id === "2") {
      setOption1(false);
      setOption2(true);
      setOption3(false);
      setOption4(false);
    } else if (id === "3") {
      setOption1(false);
      setOption2(false);
      setOption3(true);
      setOption4(false);
    } else if (id === "4") {
      setOption1(false);
      setOption2(false);
      setOption3(false);
      setOption4(true);
    }
  }
  return (
    <div className="options">
      <div className="option__section">
        <div className="option__dot">
          <h1>A</h1>
        </div>
        <div onClick={(e) => handleClick(e)} className="option__name">
          <h4 id="1">
            {option1
              ? "OPTION SELECTED"
              : `${
                  option[index]?.option1 ? option[index]?.option1 : "dream37"
                }`}
          </h4>
        </div>
      </div>
      <div className="option__section">
        <div className="option__dot">
          <h1>B</h1>
        </div>
        <div onClick={(e) => handleClick(e)} className="option__name">
          <h4 id="2">
            {option2
              ? "OPTION SELECTED"
              : `${
                  option[index]?.option2 ? option[index]?.option2 : "include38"
                }`}
          </h4>
        </div>
      </div>
      <div className="option__section">
        <div className="option__dot">
          <h1>C</h1>
        </div>
        <div onClick={(e) => handleClick(e)} className="option__name">
          <h4 id="3">
            {option3
              ? "OPTION SELECTED"
              : `${
                  option[index]?.option3 ? option[index]?.option3 : "faith39"
                }`}
          </h4>
        </div>
      </div>
      <div className="option__section">
        <div className="option__dot">
          <h1>D</h1>
        </div>
        <div onClick={(e) => handleClick(e)} className="option__name">
          <h4 id="4">
            {option4
              ? "OPTION SELECTED"
              : `${
                  option[index]?.option4 ? option[index]?.option4 : "cottage40"
                }`}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Options;
