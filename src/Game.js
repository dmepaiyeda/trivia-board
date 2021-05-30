import React from "react";
import Board from "./Board";

//Game component. Handles rendering the game board
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="board-heading">
          <h1>
            <b>Trivia Quiz</b>
          </h1>
          <p>Play and test your general knowledge</p>
        </div>
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;
