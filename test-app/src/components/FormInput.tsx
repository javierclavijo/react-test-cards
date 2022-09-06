import React from "react";

interface FormInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  labelName: string;
  id: string;
}

function FormInput({ value, setValue, labelName, id }: FormInputProps) {
  return (
    <label htmlFor={id}>
      {labelName}
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
}

export default FormInput;
