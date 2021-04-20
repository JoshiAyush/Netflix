import { Inner } from "./style.js";
import { Video } from "./style.js";
import { Button } from "./style.js";
import { Source } from "./style.js";
import { Overlay } from "./style.js";
import { Container } from "./style.js";

import ReactDOM from "react-dom";

import { usePlayerContext } from "../../../context/StateProvider.js";

PlayerContainer.Button = function PlayerContainerButton({ ...restProps }) {
    const { showPlayer, setShowPlayer } = usePlayerContext();

    return (
        <Button onClick={() => setShowPlayer(!showPlayer)} {...restProps}>
            Play
        </Button>
    );
}

PlayerContainer.Video = function PlayerContainerVideo({ src, ...restProps }) {
    const { showPlayer, setShowPlayer } = usePlayerContext();

    return showPlayer ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
            <Inner>
                <Video id="netflix-player" controls {...restProps}>
                    <Source src={src} type="video/mp4" />
                </Video>
            </Inner>
        </Overlay>,
        document.body
    ) : <></>;
}

export function PlayerContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
}