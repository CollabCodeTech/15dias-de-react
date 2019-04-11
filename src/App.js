import React from "react";

import BoardCollab from "./components/BoardCollab";
import NextPlayer from "./components/NextPlayer";

const App = () => (
    <>
        <NextPlayer />
        <BoardCollab qtd="9" />
    </>
);

export default App;

