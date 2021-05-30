import React, { useDebugValue } from "react";
import QuestionCard from "./QuestionCard";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

class Board extends React.Component{

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         category: "",
    //         color: "",
    //         questions: []
    //     }
    // }

  
    
    renderSquare(num){
        return <QuestionCard value={num}/>
    }

    render(){
        // const boxes = [100, 200, 300, 400];
        // const boardBoxes = boxes.map(box => 
        //     <button>box</button>
        // )

        const trivia = [{

            category: "Sports",
            key: "c1",
            color: "info",
            questions: [
                {
                    question: "What’s the diameter of a basketball hoop in inches?",
                    options: ["14 inches", "16 inches", "18 inches"],
                    answer: "18 inches",
                    score: 100
                },
                {
                    question:"How big is an Olympic sized swimming pool in meters? ",
                    options: ["50m x 30m", "50m x 25m", "60m x 30m"],
                    answer: "50m x 25m",
                    score: 200
                },
                {
                    question:"In professional basketball, how high is the basketball hoop from the ground? ",
                    options: ["10ft", "11ft", "12ft"],
                    answer: "10ft",
                    score: 300
                },
                {
                    question:"The Summer Olympics are held every how many years? ",
                    options: ["2 years", "4 years", "6 years"],
                    answer: "4 years",
                    score: 400
                }
            ],

            category: "Science", 
            key: "c2",
            color: "warning",
            questions: [{
                question:"This essential gas is important so that we can breathe",
                options: ["Oxygen ", "Nitrogen", "Helium"],
                answer: "Oxygen",
                score: 100
            },
            {
                question:"What is the nearest planet to the sun?",
                options: ["Earth", "Saturn", "Jupiter"],
                answer: "Jupiter",
                score: 200
            },
            {
                question:"What is the rarest blood type? ",
                options: ["O positive", "AB negative", "B negative"],
                answer: "AB negative",
                score: 300
            },
            {
                question:"On what part of your body would you find the pinna? ",
                options: ["Ear", "Eye", "Nose"],
                answer: "Ear",
                score: 400
            }
        ],

            category: "Music", 
            color: "secondary",
            key: "c3",
            questions: [{
                question:"Who was the very first American Idol winner?",
                options: ["Kelly Clarkson", "Ryan Starr", "Hilary Duff"],
                answer: "Kelly Clarkson",
                score: 100
            },
            {
                question:"Before Miley Cyrus recorded “Wrecking Ball,” it was offered to which singer?",
                options: ["Alicia Keys", "Beyoncé", "Leona Lewis"],
                answer: "Beyoncé",
                score: 200
            },
            {
                question:"What rock icon was the founder of The Society for the Prevention of Cruelty to Long-haired Men?",
                options: ["David Bowie", "Peter Frampton", "Mick Jagger"],
                answer: "David Bowie",
                score: 300
            },
            {
                question:"Eminem‘s 8 Mile is named after a road in which city?",
                options: ["Chicago", "San Francisco", "Detroit"],
                answer: "Detroit",
                score: 400
            }],

            category: "Nature", 
            key: "c4",
            color: "primary",
            questions: [{
                question:"What part of the plant conducts photosynthesis? ",
                options: ["Stem", "Flower", "Leaf"],
                answer: "Leaf",
                score: 100
            },
            {
                question:"What is the largest known land animal?",
                options: ["Hippopotamus", "Elephant", "Giraffe"],
                answer: "Elephant",
                score: 200
            },
            {
                question:"Dolly was the first ever living creature to be cloned. What type of animal was she?",
                options: ["Sheep", "Mouse", "Worm"],
                answer: "Sheep",
                score: 300
            },
            {
                question:"What is the tallest type of grass?",
                options: ["Northwind switch grass", "Pampas grass", "Bamboo"],
                answer: "Bamboo ",
                score: 400
            }],

        }]

        // var questionsList = trivia.questions.map((i) => {
        //     return(
        //         <li>{i.question}</li>
        //     )
        // });

        // var optionsList = trivia.map((value) => {
        //     return(
        //         <div>
        //             {
        //                 value.questions.map((j) => {
        //                     return(
        //                         <li>{j.options}</li>
        //                     )
        //                 })
        //         })
        //         </div>
        //     )
        // });

        // var answerList = trivia.questions.map((k) => {
        //     return(
        //         <li>{k.answer}</li>
        //     )
        // });

        // var scoreList = trivia.questions.map((point) => {
        //     return(
        //         <li>{point.score}</li>
        //     )
        // });

        return(
            
            <div>

            <Container fluid={true} className="card-list-styling">
                        <Col>
                        
                            <Row>
                                {trivia && trivia.map((info) => {
                                    console.log(info);
                                    return(
                                        <QuestionCard
                                        category={info.category}
                                        key={info.key}
                                        color={info.color}
                                        question={info.questions.map((i) => {     
                                            return (<li>{i.question}</li>) 
                                         })}
                                         options={info.questions.map((j)=> {
                                             return(<li>{j.options[j]}</li>)
                                         })}
                                         answer={info.questions.map((k)=> {
                                            return(<li>{k.answer}</li>)
                                        })}
                                        score={info.questions.map((point, m)=> {
                                            return(
                                                <div>
                                                    {/* <li key={m}>
                                                     Issue number: {value.questions.key}
                                                    </li> */}
                                                    <Col>
                                                        <Row>
                                                            {point.score}
                                                        </Row>
                                                    </Col>
                                                </div>
                            
                                        )})}

                                        />
                                    )
                                })}
                                
                            </Row>
                        </Col>
                        
            </Container>
               {/* <div className="board-row">
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
               </div> */}
            </div>
        );
    }
}

export default Board;
