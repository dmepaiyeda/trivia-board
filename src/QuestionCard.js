import React from "react";
import { Card } from "react-bootstrap";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";

class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      seconds: 0,
      message: "",
    };
    this.countDown = this.countDown.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.timer = 0;
  }
  handleShow = () => {
    this.setState({
      showModal: true,
      seconds: 500,
    });
    this.timer = setInterval(this.countDown, 1000);
  };
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  countDown() {
    let seconds = this.state.seconds - 1;
    this.setState({
      seconds: seconds,
    });

    if (seconds === 0) {
      clearInterval(this.timer);
      this.setState({
        message: "Timeout",
      });
      this.props.handleScore(-this.props.score);
      this.handleClose();
    }
  }

  checkAnswer(e) {
    const answer = this.props.answer;
    console.log(answer);
    if (e.target.innerHTML === answer) {
      this.setState({
        message: "Correct answer!",
      });
      this.props.handleScore(this.props.score);
      this.handleClose();
    } else {
      this.setState({
        message: "Incorrect answer",
      });
      this.props.handleScore(-this.props.score);
      this.handleClose();
    }
    clearInterval(this.timer);
  }

  render() {
    const { category, key, color, question, options, totalScore, score } =
      this.props;
    return (
      <div>
        <Card
          bg={color}
          key={key}
          className="card-item"
          onClick={this.handleShow}
        >
          <Card.Body>
            <Card.Title>{score}</Card.Title>
            <Card.Subtitle>{category}</Card.Subtitle>
          </Card.Body>
        </Card>
        <Modal size="lg" show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Container fluid>
              <Row>
                <Col xs={12} md={8}>
                  <Modal.Title>{question}</Modal.Title>
                  <p>
                    This question is worth <b>{score}</b> points
                  </p>
                </Col>
                <Col>
                  <h5>YOUR SCORE: {totalScore}</h5>
                  <h5>TIME LEFT: {this.state.seconds}</h5>
                </Col>
              </Row>
            </Container>
          </Modal.Header>

          <Modal.Body>
            <div>
              {options.map((option) => {
                return (
                  <Button
                    variant="primary"
                    size="lg"
                    block
                    onClick={this.checkAnswer}
                  >
                    {option}
                  </Button>
                );
              })}
            </div>
            <h2> {this.state.message}</h2>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default QuestionCard;
