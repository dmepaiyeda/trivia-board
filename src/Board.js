import React from "react";
import Square from "./Square";

class Board extends React.Component{
    
    renderSquare(num){
        return <Square value={num}/>
    }

    render(){
        // const boxes = [100, 200, 300, 400];
        // const boardBoxes = boxes.map(box => 
        //     <button>box</button>
        // )
        return(
            <div>
               <div className="board-row">
                   {this.renderSquare(100)}
                   {this.renderSquare(100)}
                   {this.renderSquare(100)}
                   {this.renderSquare(100)}
               </div>
               <div className="board-row">
                   {this.renderSquare(200)}
                   {this.renderSquare(200)}
                   {this.renderSquare(200)}
                   {this.renderSquare(200)}
               </div>
               <div className="board-row">
                   {this.renderSquare(300)}
                   {this.renderSquare(300)}
                   {this.renderSquare(300)}
                   {this.renderSquare(300)}
               </div>
               <div className="board-row">
                   {this.renderSquare(400)}
                   {this.renderSquare(400)}
                   {this.renderSquare(400)}
                   {this.renderSquare(400)}
               </div>
            </div>
        );
    }
}

export default Board;
