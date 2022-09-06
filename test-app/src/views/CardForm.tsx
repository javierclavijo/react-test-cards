import { nanoid } from "nanoid";
import React from "react";
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
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">
          First name
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label htmlFor="lastName">
          Last name
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label htmlFor="url">
          URL
          <input
            type="text"
            name="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CardForm;
