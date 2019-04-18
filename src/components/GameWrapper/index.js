import React from "react";

import NextPlayer from "../NextPlayer";
import BoardCollab from "../BoardCollab";
import HistoryCollab from "../HistoryCollab";

import "./styles.css";



class GameWrapper extends React.Component {
    state = {
        player: "X",
        squares: Array(9).fill("")
    };

    handleClick = index => {
        const { player, squares } = this.state;

        (!squares[index] && (squares[index] = player));

        this.setState({
            player: player === "X" ? "O" : "X",
            squares
        })
    }

    render() {
        const { player, squares } = this.state;
         
        return (
            <main className="game-wrapper">
                <NextPlayer player={player} />
                <BoardCollab squares={squares} onClick={this.handleClick} />
                <HistoryCollab />
            </main>
        );
    };
}

export default GameWrapper;