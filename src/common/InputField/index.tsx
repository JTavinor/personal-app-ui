import { useState } from "react";
import { InputWrapper, StyledInput } from "./styles";
import InputLabel from "./InputLabel";

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value?: string;
}

const InputField = ({
  label,
  placeholder,
  onChange,
  value,
}: InputFieldProps) => {
  const [inputValue, setInputValue] = useState("");
  const inputId = `input_${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    onChange(value);
  };

  return (
    <InputWrapper>
      <InputLabel inputId={inputId} label={label} />
      <StyledInput
        type="text"
        id={inputId}
        value={value || inputValue}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};

export default InputField;
