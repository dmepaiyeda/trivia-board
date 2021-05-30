import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/styles.css";
import Game from "./Game";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

// const CARD_DATA = [
//   {id}
// ]

ReactDOM.render(<Game />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
