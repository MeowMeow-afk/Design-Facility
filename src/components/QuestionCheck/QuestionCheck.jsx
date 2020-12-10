import React from "react";
import "./questioncheck.css";
import Group1 from "../images/Group_100.svg";
import Group2 from "../images/Group_195.svg";
import Group3 from "../images/Group_196.svg";
import Group4 from "../images/Group_113.svg";
import Group5 from "../images/Group_114.svg";
import Group6 from "../images/Group_117.svg";
import Group7 from "../images/Group_197.svg";
import Group8 from "../images/Group_115.svg";
import Group9 from "../images/Group_118.svg";

function QuestionCheck() {
  return (
    <div className="question">
      <div className="inner__question">
        <div className="inner__question__1">
          <div></div>
          <h2>Best of luck!</h2>
        </div>
        <div className="inner__question__2">
          <div className="question__options">
            <img src={Group1} alt="image" />
            <h2>Question not Visited</h2>
          </div>
          <div className="question__options">
            <img src={Group2} alt="image" />
            <h2>Question not Answered</h2>
          </div>
          <div className="question__options">
            <img src={Group3} alt="image" />
            <h2>Question Answered</h2>
          </div>
          <div className="question__options">
            <img src={Group4} alt="image" />
            <h2>Question Marked</h2>
          </div>
          <div className="question__options last">
            <img src={Group5} alt="image" />
            <h2>
              Question Answered <br />& marked for review
            </h2>
          </div>
        </div>
        <div className="inner__question__3">
          <div className="section1">
            <h2>Name of Section</h2>
          </div>
          <h5>choose a question:</h5>
          <div className="section2">
            <img src={Group6} alt="image" />
            <img src={Group7} alt="image" />
            <img src={Group8} alt="image" />
            <img src={Group9} alt="image" />
          </div>
        </div>
      </div>
      <div className="Submit">
        <button className="submit__btn">SUBMIT EXAM</button>
      </div>
    </div>
  );
}

export default QuestionCheck;
