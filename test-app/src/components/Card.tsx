/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { CardEntity } from "../entities/CardEntity";

interface CardProps {
  entity: CardEntity;
  deleteCard: (card: CardEntity) => void;
}

function Card({ entity, deleteCard }: CardProps) {
  const card = css`
    max-width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border: 2px solid grey;
    border-radius: 10px;
    position: relative;
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

  const deleteButton = css`
    position: absolute;
    right: 0;
    top: 0;
  `;

  return (
    <article css={card}>
      <button
        type="button"
        css={deleteButton}
        onClick={() => deleteCard(entity)}
      >
        X
      </button>
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
