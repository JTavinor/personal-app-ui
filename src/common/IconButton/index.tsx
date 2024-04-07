import { MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconButtonWrapper } from "./styles";

const IconButton = ({
  icon,
  onClick,
}: {
  icon: IconProp;
  onClick: (event: MouseEvent) => void;
}) => {
  return (
    <IconButtonWrapper onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </IconButtonWrapper>
  );
};

export default IconButton;
