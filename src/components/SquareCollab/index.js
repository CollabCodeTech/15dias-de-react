import React, { Component } from "react";

import "./styles.css";

class SquareCollab extends Component {
    state = {content: "X"};

    handleClick = () => {
        this.setState(
            this.state.content === "X" ? 
                {content: "O"} : 
                {content: "X"}
            );
    };

    render() {
        return (
            <button 
                onClick={this.handleClick} 
                className="square-collab"
            >
                {this.state.content}
            </button>
        );
    };
}

export default SquareCollab;