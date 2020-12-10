import React, { useState, useEffect } from "react";
import "./designfacility.css";
import Options from "../Options/Options";
import ThankQ from "../ThankQ/ThankQ";
function DesignFacility({ section }) {
  //state for monitoring index of section ... section : [section1, section2, section3]
  const [sectionIndex, setIndex] = useState(0);

  // state to monitor questions and options
  const [count, setcount] = useState(sectionIndex);

  const [donetimer, setTimer] = useState(false);
  const [monitor, setMonitor] = useState(0);
  //state for rendering thank you message when time ends
  const [thankQMsg, setThankQMsg] = useState(false);

  useEffect(() => setTimer(true), []);
  const countdown = document.getElementById("countdown");

  // storing timer duration beforehand
  const startingMinutes = 1;
  let time = startingMinutes * 60;

  // function to trigger the 15min timer for test duration:1min
  function StartTime() {
    let inteval = setInterval(function () {
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      countdown.innerHTML = `Exam Time : ${minutes}: ${seconds}`;
      if (minutes <= 0 && seconds <= 0) {
        time = time;
        setThankQMsg(true);
        setcount(-1);
        clearInterval(inteval);
      } else {
        time--;
      }
    }, 1000);
  }

  function setSection(index) {
    let arr = [
      section[0]?.Section1,
      section[1]?.Section2,
      section[2]?.Section3,
    ];
    return arr[index];
  }
  let x;
  if (setSection(sectionIndex)) {
    x = setSection(sectionIndex);
  } else {
    x = 0;
  }
  let length = x.length;
  //clicking on the button"save&next"will trigger timer as well as
  // retrive next set of question and opions
  function handleCount(length) {
    if (donetimer) {
      setTimer(false);
      StartTime();
    }
    if (count !== length - 1) {
      setcount(count + 1);
      setMonitor(monitor + 1);
      if (monitor >= 6) {
        setcount(-1);
      }
    } else {
      setcount(0);
      setIndex(sectionIndex + 1);
    }
  }
  return (
    <div>
      <div className="design">
        <div className="design__header">
          <div className="inner__header">
            <h2>Design Facility</h2>
            <span class="dot"></span>
            <h2>EXAM TITLE</h2>
          </div>
          <div className="inner__header__button">
            <button id="countdown" className="btn">
              Exam Timer : 00:00
            </button>
          </div>
        </div>

        <div className="design__processbar">
          <div
            onClick={(e) => {
              setIndex(e.target.id * 1);
              setcount(0);
            }}
          >
            <h2
              id="0"
              className={`mini__process ${
                sectionIndex === 0 ? "highlight" : "textcolor"
              }`}
            >
              {sectionIndex === 0 ? (
                <span>Selected</span>
              ) : (
                <span className="spann">section #1</span>
              )}
            </h2>
          </div>
          <div
            onClick={(e) => {
              setIndex(e.target.id * 1);
              setcount(0);
            }}
          >
            <h2
              id="1"
              className={`mini__process ${
                sectionIndex === 1 ? `highlight` : "textcolor"
              }`}
            >
              {sectionIndex === 1 ? (
                <span>Selected</span>
              ) : (
                <span className="spann">section #2</span>
              )}
            </h2>
          </div>
          <div
            onClick={(e) => {
              setIndex(e.target.id * 1);
              setcount(0);
            }}
          >
            <h2
              id="2"
              className={`mini__process ${
                sectionIndex === 2 ? `highlight` : "textcolor"
              }`}
            >
              {sectionIndex === 2 ? (
                <span>Selected</span>
              ) : (
                <span>section #3</span>
              )}
            </h2>
          </div>
          <div className="mini__process"></div>
          <div className="mini__process"></div>
          <div className="mini__process"></div>
          <div className="mini__process"></div>
          <div className="mini__process"></div>
          <div className="mini__process"></div>
        </div>
        <h1>Question Number : {count + 1}</h1>
      </div>

      {/* thankq msg start */}
      {thankQMsg || monitor >= 7 ? (
        <>
          <ThankQ />
        </>
      ) : (
        <>
          <div className="question__text">
            <h1
              style={{
                textTransform: "capitalize",
              }}
            >
              {x[count]?.quesText ? x[count]?.quesText : "Concrete10"}
            </h1>
          </div>

          <Options option={x} index={count} />
        </>
      )}
      {/* thankq msg ends */}

      <div className="bottom">
        <div className="bottom__inner">
          <div>
            <button className="bottom__left__btn">
              Mark for Reviezw & Next
            </button>
            <button className="bottom__left__btn">Clear Response</button>
          </div>

          <button
            onClick={(e) => {
              handleCount(length);
            }}
            className="bottom__right__btn"
            id="stop"
          >
            Save and Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default DesignFacility;
