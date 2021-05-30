import React from "react";
import { Button, Modal } from "react-bootstrap";

export default class QuestionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      show: false,
    };
  }

  handleClose = () => {
    this.setState(() => ({
      show: false,
    }));
  };

  //   tick() {
  //     const { duration, timeoutFn } = this.props;

  //     if (this.state.seconds === duration) {
  //       timeoutFn();
  //     } else {
  //       this.setState((prevState) => ({
  //         seconds: prevState.seconds + 1,
  //       }));
  //     }
  //   }

  render() {
    // const { duration } = this.props;
    // let timeLeft = duration - this.state.seconds;
    console.log(this.props);

    return <div></div>;
  }
}
