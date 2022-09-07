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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<CardFormData>();

  const url: string = watch("url");

  function onSubmit(data: CardFormData) {
    const newCard = {
      url: data.url,
      firstName: data.firstName,
      lastName: data.lastName,
      id: nanoid(),
    };
    setCards([...cards, newCard]);
    reset();
    navigate("/cards");
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
      <div css={formContainer}>
        <div css={previewContainer}>
          <Preview url={url} showMessage />
        </div>
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
      </div>
    </React.Fragment>
  );
}

const formContainer = css`
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 0;
`;

const previewContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const cardForm = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const submitButton = css`
  max-width: max-content;
  background-color: ${Colors.CONTRAST};
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${Colors.WHITE};
`;

const errorStyle = css`
  color: red;
  margin: 0;
  width: 100%;
  text-align: start;
`;

export default CardForm;
