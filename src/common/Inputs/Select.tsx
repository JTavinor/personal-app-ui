import InputLabel from "./InputLabel";
import { SelectProps } from "./inputs";
import { InputWrapper, StyledSelect } from "./styles";

const Select = ({ options, onChange, value, label }: SelectProps) => {
  const inputId = `input_${Math.random().toString(36).substr(2, 9)}`;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <InputWrapper>
      <InputLabel inputId={inputId} label={label} />

      <StyledSelect value={value} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </InputWrapper>
  );
};

export default Select;
