/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { h2 } from "../styles/ts/common";

function Home() {
  return (
    <div css={welcome}>
      <h2 css={h2}>Home</h2>
      <p>Welcome to CardApp!</p>
    </div>
  );
}

const welcome = css`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export default Home;
