import React from "react";
import {Card} from 'react-bootstrap';
class QuestionCard extends React.Component {
    
    render() {
    
        console.log("questionscard", this.props.color);
        return (
        //   <button onClick={saySomething} className="square">
        //     {this.props.value}
        //   </button>
        
            <a style={{ cursor: 'pointer' }}>
                <Card  bg={this.props.color} key={this.props.key} className="card-item">
                   <Card.Body>
                        <Card.Title>{this.props.score}</Card.Title>
                    </Card.Body>
                </Card>
            </a>
        );
      }
}

export default QuestionCard;