import React, { Component } from "react";

import NextPlayer from "../NextPlayer";
import BoardCollab from "../BoardCollab";

import "./styles.css";


class GameWrapper extends Component {
    state = {player: "X", level: 10};

    handleClick = () => {   
        this.setState({player: this.state.player === "X" ? "O" : "X"})
    }

    render() {
        const {player, level} = this.state;
         
        return (
            <main className="game-wrapper">
                <NextPlayer player={player} level={level} />
                <BoardCollab onClick={this.handleClick} />
            </main>
        );
    };
}

export default GameWrapper;