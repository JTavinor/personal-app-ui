import { MouseEvent, ReactNode } from "react";
import { StyledButton } from "./styles";

const Button = ({
  children,
  onClick,
  disabled,
}: {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
