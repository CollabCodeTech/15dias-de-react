import React from "react";

import "./styles.css";

const SquareCollab = ({content, onClick}) => (
    <button 
        onClick={onClick}
        className="square-collab"
    >
        {content}
    </button>
);

export default SquareCollab;