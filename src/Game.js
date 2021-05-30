import React from "react";
import Board from "./Board";
import Score from "./Score";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="board-heading">
          <h1> Trivia Quiz </h1>
        </div>
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;
