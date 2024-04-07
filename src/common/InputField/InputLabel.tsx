import { StyledInputLabel } from "./styles";

const InputLabel = ({
  inputId,
  label,
}: {
  inputId: string;
  label?: string;
}) => {
  if (!label) return null;
  return <StyledInputLabel htmlFor={inputId}>{label}</StyledInputLabel>;
};

export default InputLabel;
