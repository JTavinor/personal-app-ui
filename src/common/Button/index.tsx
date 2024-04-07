import { MouseEvent, ReactNode } from "react";
import { StyledButton } from "./styles";

const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
