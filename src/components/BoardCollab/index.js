import React from "react";

import SquareCollab from "../SquareCollab";

import "./styles.css";

const squareCollabs = qtd => {
    let max = qtd;
    const squares = [];

    while(max--) {
        squares.push(<SquareCollab key={max} />);
    }

    return squares;
} 

const BoardCollab = ({qtd}) => (
    <article className="board-collab">{squareCollabs(qtd)}</article>
);

export default BoardCollab;