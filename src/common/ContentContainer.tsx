import { ReactNode } from "react";
import { ContentContainerWrapper } from "./styles";

const ContentContainer = ({
  children,
  width = "100%",
}: {
  children: ReactNode;
  width?: string;
}) => {
  return (
    <ContentContainerWrapper width={width}>{children}</ContentContainerWrapper>
  );
};

export default ContentContainer;
