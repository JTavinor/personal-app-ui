import { useState } from "react";
import { InputWrapper, StyledInput } from "./styles";
import InputLabel from "./InputLabel";

const InputField = ({
  label,
  placeholder,
}: {
  label?: string;
  placeholder?: string;
}) => {
  const [inputValue, setInputValue] = useState("");
  const inputId = `input_${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <InputWrapper>
      <InputLabel inputId={inputId} label={label} />
      <StyledInput
        type="text"
        id={inputId}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};

export default InputField;
