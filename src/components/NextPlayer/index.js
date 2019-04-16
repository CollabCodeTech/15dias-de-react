import React from "react";

import "./styles.css";

const NextPlayer = ({player, level}) => (
    <p className="next-player">Próximo jogador: {player}</p>
);

export default NextPlayer;