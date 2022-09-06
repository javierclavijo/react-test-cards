/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";
import Card from "../components/Card";
import { CardEntity } from "../entities/CardEntity";

interface CardListProps {
  cards: CardEntity[];
}

function CardList({ cards }: CardListProps) {
  const listDiv = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  return (
    <div>
      {cards.map((card) => (
        <Card entity={card} />
      ))}
    </div>
  );
}

export default CardList;
