import React, { Component } from "react";

import "./styles.css";

class SquareCollab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "X"
        }
    }

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
        )
    }
}

// const handleClick = texto => () => console.log(texto);

// const SquareCollab = () => (
    // <button 
    //     onClick={handleClick("coiso")} 
    //     className="square-collab">X</button>
// );

export default SquareCollab;