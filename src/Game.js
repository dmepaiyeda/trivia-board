import React from "react";
import Board from "./Board";

function Game() {
  return (
    <div className="game">
      <header> Trivia</header>
      <h3 className="board-heading"> Your Score: 0 </h3>
      <div className="game-board">
        <Board/>
      </div>
      
    </div>
  );
}

export default Game;
