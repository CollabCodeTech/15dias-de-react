import React from "react";

import SquareCollab from "../SquareCollab";

const squareCollabs = qtd => {
    let max = qtd;
    const squares = [];

    while(max--) {
        squares.push(<SquareCollab key={max} />);
    }

    return squares;
} 

const BoardCollab = ({qtd}) => (
    <article>{squareCollabs(qtd)}</article>
);

export default BoardCollab;