import React from "react";

import { LoadingContainer } from "./style/Loading.js";

function Loading({ ...restProps }) {
  return (
    <LoadingContainer>
      <LoadingContainer.Spinner>
        <LoadingContainer.LockBody />

        <LoadingContainer.Picture
          src={restProps?.src}
          data-testid="loading-picture"
        />
      </LoadingContainer.Spinner>
    </LoadingContainer>
  );
}

export default Loading;
