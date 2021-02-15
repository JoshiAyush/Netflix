import React from "react";

function Loading({ src, ...restProps }) {
    return (
        <LoadingContainer>

            <Spinner>

                <LockBody />

                <Picture src={`/images/users/${src}.png`} />

            </Spinner>

        </LoadingContainer>
    );
}

export default Loading;