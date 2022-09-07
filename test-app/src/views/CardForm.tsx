/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { nanoid } from "nanoid";
import React from "react";
import FormInput from "../components/FormInput";
import { CardEntity } from "../entities/CardEntity";

interface CardFormProps {
  cards: CardEntity[];
  setCards: React.Dispatch<React.SetStateAction<CardEntity[]>>;
}

function CardForm({ cards, setCards }: CardFormProps) {
  const [url, setUrl] = React.useState<string>("");
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newCard = {
      url: url,
      firstName: firstName,
      lastName: lastName,
      id: nanoid(),
    };
    setCards([...cards, newCard]);
    setUrl("");
    setFirstName("");
    setLastName("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} css={cardForm}>
        <FormInput
          value={firstName}
          setValue={setFirstName}
          labelName="First Name"
          id={"firstName"}
        />
        <FormInput
          value={lastName}
          setValue={setLastName}
          labelName="Last Name"
          id={"lastName"}
        />
        <FormInput value={url} setValue={setUrl} labelName="URL" id={"url"} />
        <button type="submit" css={submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

const cardForm = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const submitButton = css`
  max-width: max-content;
`;

export default CardForm;
