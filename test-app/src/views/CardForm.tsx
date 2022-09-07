/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { ErrorMessage } from "@hookform/error-message";
import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import Preview from "../components/Preview";
import FormInput from "../components/FormInput";
import { CardEntity } from "../entities/CardEntity";
import { h2 } from "../styles/ts/common";
import { Colors } from "../styles/ts/constants";

interface CardFormProps {
  cards: CardEntity[];
  setCards: React.Dispatch<React.SetStateAction<CardEntity[]>>;
}

export interface CardFormData {
  firstName: string;
  lastName: string;
  url: string;
}

function CardForm({ cards, setCards }: CardFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CardFormData>();

  const [url, setUrl] = React.useState<string>("");
  const [firstName, setFirstName] = React.useState<string>("");
  const [lastName, setLastName] = React.useState<string>("");

  function onSubmit(data: CardFormData) {
    const newCard = {
      url: data.url,
      firstName: data.firstName,
      lastName: data.lastName,
      id: nanoid(),
    };
    setCards([...cards, newCard]);
    setUrl("");
    setFirstName("");
    setLastName("");
  }

  const validateUrl = (value: string) => {
    try {
      new URL(value);
      return;
    } catch (e) {
      return "Image URL must be a valid URL.";
    }
  };

  return (
    <React.Fragment>
      <h2 css={h2}>Add a card</h2>
      <Preview url={url} />
      <form onSubmit={handleSubmit(onSubmit)} css={cardForm}>
        <FormInput
          register={register}
          labelName="First Name"
          id="firstName"
          required="First name is required."
        />
        <ErrorMessage
          errors={errors}
          name="firstName"
          render={({ message }) => <p css={errorStyle}>{message}</p>}
        />
        <FormInput
          register={register}
          labelName="Last Name"
          id="lastName"
          required="Last name is required."
        />
        <ErrorMessage
          errors={errors}
          name="lastName"
          render={({ message }) => <p css={errorStyle}>{message}</p>}
        />
        <FormInput
          register={register}
          labelName="Image URL"
          id="url"
          required="Image URL is required."
          validate={validateUrl}
        />
        <ErrorMessage
          errors={errors}
          name="url"
          render={({ message }) => <p css={errorStyle}>{message}</p>}
        />
        <button type="submit" css={submitButton}>
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}

const cardForm = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 16rem;
`;

const submitButton = css`
  max-width: max-content;
  background-color: ${Colors.CONTRAST};
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${Colors.WHITE};
`;

export const errorStyle = css`
  color: red;
  margin: 0;
  width: 100%;
  text-align: start;
`;

export default CardForm;
