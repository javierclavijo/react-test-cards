/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";
import Card from "../components/Card";
import { CardEntity } from "../entities/CardEntity";
import { h2 } from "../styles/ts/common";

interface CardListProps {
  cards: CardEntity[];
  setCards: React.Dispatch<React.SetStateAction<CardEntity[]>>;
}

function CardList({ cards, setCards }: CardListProps) {
  function deleteCard(card: CardEntity) {
    setCards(cards.filter((item) => item.id !== card.id));
  }

  return (
    <React.Fragment>
      <h2 css={h2}>All cards</h2>
      <div css={listDiv}>
        {cards.map((card) => (
          <Card entity={card} deleteCard={deleteCard} key={card.id} />
        ))}
      </div>
    </React.Fragment>
  );
}

const listDiv = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 2rem;
  padding: 1.5rem 0;
`;

export default CardList;
