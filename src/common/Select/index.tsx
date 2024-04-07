import InputLabel from "../InputField/InputLabel";
import { InputWrapper } from "../InputField/styles";
import { StyledSelect } from "./styles";

export interface SelectOptions {
  value: string;
  label: string;
}

const Select = ({
  options,
  onChange,
  value,
  label,
}: {
  options: SelectOptions[];
  onChange: (value: string) => void;
  value: string;
  label?: string;
}) => {
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
