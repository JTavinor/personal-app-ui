import InputLabel from "./InputLabel";
import { generateRandomInputId } from "./inputHelper";
import { InputFieldProps } from "./inputs";
import { InputWrapper, StyledInput } from "./styles";

const InputField = ({
  label,
  placeholder,
  onChange,
  value,
  type = "text",
}: InputFieldProps) => {
  const inputId = generateRandomInputId();

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
