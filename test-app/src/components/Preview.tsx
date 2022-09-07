/* eslint-disable jsx-a11y/alt-text */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface CardImageProps {
  url: string;
  showMessage?: boolean;
}

function Preview({ url, showMessage = false }: CardImageProps) {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("");

  const img = css`
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: ${loaded ? "block" : "none"};
  `;

  const handleLoad = () => {
    setMessage("");
    setLoaded(true);
  };

  const handleError = () => {
    setMessage("Insert a valid image URL to preview...");
    setLoaded(false);
  };

  return (
    <React.Fragment>
      <div css={imgContainer}>
        <img src={url} css={img} onLoad={handleLoad} onError={handleError} />
      </div>
      {showMessage && message ? <p css={loadingMessage}>{message}</p> : null}
    </React.Fragment>
  );
}

const imgContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-height: 8rem;
  max-width: 100%;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
`;

const loadingMessage = css`
  width: 100%;
  text-align: center;
`;

export default Preview;
