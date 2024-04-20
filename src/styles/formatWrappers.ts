import styled from "styled-components";
import spacing from "./spacing";

interface HorizontalFlexWrapperProps {
  width?: string;
}

export const HorizontalFlexWrapper = styled.div<HorizontalFlexWrapperProps>`
  display: flex;
  gap: ${spacing.STANDARD};
  align-items: center;
`;
