import React from "react";

import "./styles.css";

const SquareCollab = ({player, onClick}) => (
    <button 
        onClick={onClick}
        className="square-collab"
    >
        {player}
    </button>
);

export default SquareCollab;