import React from "react";
import {Card} from 'react-bootstrap';
class Square extends React.Component {
    
    render() {
    
        console.log(this.props);
        return (
        //   <button onClick={saySomething} className="square">
        //     {this.props.value}
        //   </button>
        
            <a style={{ cursor: 'pointer' }}>
                <Card className="card-item">
                   <Card.Body>
                        <Card.Title>{this.props.score}</Card.Title>
                    </Card.Body>
                </Card>
            </a>
        );
      }
}

export default Square;