/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";
import Card from "../components/Card";
import { CardEntity } from "../entities/CardEntity";

interface CardListProps {
  cards: CardEntity[];
  setCards: React.Dispatch<React.SetStateAction<CardEntity[]>>;
}

function CardList({ cards, setCards }: CardListProps) {

  function deleteCard(card: CardEntity) {
    setCards(cards.filter((item) => item.id !== card.id));
  }

  return (
    <div css={listDiv}>
      {cards.map((card) => (
        <Card entity={card} deleteCard={deleteCard} key={card.id} />
      ))}
    </div>
  );
}

const listDiv = css`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-auto-rows: auto;
gap: 2rem;
padding: 2rem;
`;

export default CardList;
