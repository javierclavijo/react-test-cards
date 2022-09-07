/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { FieldValues, UseFormRegister, Validate } from "react-hook-form";
import { Colors } from "../styles/ts/constants";
import { CardFormData } from "../views/CardForm";

interface FormInputProps {
  labelName: string;
  id: "firstName" | "lastName" | "url";
  required?: string;
  register: UseFormRegister<CardFormData>;
  validate?: Validate<string> | Record<string, Validate<string>> | undefined;
}

function FormInput({
  labelName,
  id,
  required,
  register,
  validate,
}: FormInputProps) {
  return (
    <label htmlFor={id} css={label}>
      {labelName}
      <input
        type="text"
        css={input}
        {...register(id, { required, validate })}
      />
    </label>
  );
}

const label = css`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.875rem;
`;

const input = css`
  border: none;
  border-bottom: 1px solid ${Colors.PRIMARY};
  background-color: ${Colors.WHITE};

  &:focus {
    outline: none;
  }
`;

export default FormInput;
