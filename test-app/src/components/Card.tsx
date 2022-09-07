/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { CardEntity } from "../entities/CardEntity";
import { Colors } from "../styles/ts/constants";
import Preview from "./Preview";

interface CardProps {
  entity: CardEntity;
  deleteCard: (card: CardEntity) => void;
}

function Card({ entity, deleteCard }: CardProps) {
  return (
    <article css={card}>
      <button
        type="button"
        css={deleteButton}
        onClick={() => deleteCard(entity)}
      >
        ×
      </button>
      <Preview url={entity.url} />
      <p>{entity.firstName}</p>
      <p>{entity.lastName}</p>
    </article>
  );
}

const card = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${Colors.SECONDARY};
  border-radius: 5px;
  position: relative;
  gap: 1rem;
`;

const deleteButton = css`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background-color: ${Colors.CONTRAST};
  border-radius: 0 5px;
  width: auto;
  color: ${Colors.WHITE};
  cursor: pointer;
`;

export default Card;
