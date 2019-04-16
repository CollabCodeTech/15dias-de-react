import React from "react";

import NextPlayer from "../NextPlayer";
import BoardCollab from "../BoardCollab";

import "./styles.css";


class GameWrapper extends React.Component {
    state = {player: "X"};

    handleClick = () => {   
        this.setState({player: this.state.player === "X" ? "O" : "X"})
    }

    render() {
        const {player} = this.state;
         
        return (
            <main className="game-wrapper">
                <NextPlayer player={player} />
                <BoardCollab onClick={this.handleClick} />
            </main>
        );
    };
}

export default GameWrapper;