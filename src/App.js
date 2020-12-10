import React, { useState, useEffect } from "react";
import "./App.css";
import DesignFacility from "./components/DesignFacility/DesignFacility";

import QuestionCheck from "./components/QuestionCheck/QuestionCheck";
import axios from "axios";
function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchdata() {
      await axios
        .get(
          "http://5.181.217.46/DesignFacility/useGETMethodForTheResponse/yashchauhan"
        )
        .then((response) => {
          // console.log(
          //   response?.data?.exam?.sections[0].Section1[0],
          //   typeof response?.data?.exam?.sections[0]
          // );
          let x = response?.data?.exam?.sections;
          // console.log(x);
          setData(x);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchdata();
  }, []);
  // console.log(data);
  return (
    <div className="App">
      <div className="container__1">
        <DesignFacility section={data} />
      </div>
      <div className="container__2">
        <QuestionCheck />
      </div>
    </div>
  );
}

export default App;
