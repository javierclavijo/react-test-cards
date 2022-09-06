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
  const listDiv = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem;
  `;

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

export default CardList;
