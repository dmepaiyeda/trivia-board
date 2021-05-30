import React from "react";
import Board from "./Board";

function Game() {
  return (
    <div className="game">
      <div className="board-heading">
        <h1> Trivia Quiz </h1>
        <h3> Your Score: 0 </h3>
        </div>
      <div className="game-board">
        <Board/>
      </div>
      
    </div>
  );
}

export default Game;
