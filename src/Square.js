import React from "react";

class Square extends React.Component {

    render() {
        function saySomething(){
            alert("here I am");
        }

        return (
          <button onClick={saySomething} className="square">
            {this.props.value}
          </button>
        );
      }
}

export default Square;