import React from "react";

import { LoadingContainer } from "./style/Loading.js";

function Loading({ ...restProps }) {
    return (
        <LoadingContainer>

            <LoadingContainer.Spinner>

                <LoadingContainer.LockBody />

                <LoadingContainer.Picture src={restProps?.src} />

            </LoadingContainer.Spinner>

        </LoadingContainer>
    );
}

export default Loading;