import React, { Component } from "react";

import SquareCollab from "../SquareCollab";

import "./styles.css";

class BoardCollab extends Component {
    createSquares = () => {
        const squares = Array(9).fill();
    

        return squares.map(
            (square, index) => (
                <SquareCollab 
                    player={this.props.squares[index]}
                    key={index} 
                    onClick={() => this.props.onClick(index)} 
                />
            )
        );
    };

    render () {
        return (
            <article className="board-collab">
                {this.createSquares()}
            </article>
        )       
    };
};




export default BoardCollab;