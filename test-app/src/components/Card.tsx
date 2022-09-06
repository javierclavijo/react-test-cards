/** @jsxImportSource @emotion/react */

import { jsx, css } from "@emotion/react";
import React from "react";
import { CardEntity } from "../entities/CardEntity";

interface CardProps {
  entity: CardEntity;
}

function Card({ entity }: CardProps) {
  const card = css`
    max-width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border: 2px solid grey;
    border-radius: 10px;
  `;

  const imgContainer = css`
    max-height: 8rem;
    max-width: 100%;
  `;

  const img = css`
    height: 100%;
    width: 100%;
    object-fit: contain;
  `;

  return (
    <article css={card}>
      <div css={imgContainer}>
        <img src={entity.url} css={img} />
      </div>
      <p>{entity.firstName}</p>
      <p>{entity.lastName}</p>
      <a href={entity.url}>{entity.url}</a>
    </article>
  );
}

export default Card;
