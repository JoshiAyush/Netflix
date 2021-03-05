import React from "react";
import { useState } from "react";

import { PlayerStateProvider } from "../../context/StateProvider.js";

import { PlayerContainer } from "./style/Player.js";

function Player({ src }) {
    const [showPlayer, setShowPlayer] = useState(false);

    return (
        <PlayerStateProvider value={{ showPlayer, setShowPlayer }}>

            <PlayerContainer>

                <PlayerContainer.Button />

                <PlayerContainer.Video src={src} />

            </PlayerContainer>

        </PlayerStateProvider>
    );
}

export default Player;