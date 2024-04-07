import { InputWrapper, StyledInput } from "./styles";
import InputLabel from "./InputLabel";

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void; // Change the type here
  value?: string | number; // Adjust the type here
  type?: string;
}

const InputField = ({
  label,
  placeholder,
  onChange,
  value,
  type = "text",
}: InputFieldProps) => {
  const inputId = `input_${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (type === "number") {
      const numericValue = parseFloat(value);
      if (!isNaN(numericValue)) onChange(value);
    } else onChange(value);
  };

  return (
    <InputWrapper>
      <InputLabel inputId={inputId} label={label} />
      <StyledInput
        type={type}
        id={inputId}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};

export default InputField;
