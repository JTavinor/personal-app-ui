import styled from "styled-components";
import colors from "../styles/colors";
import spacing from "../styles/spacing";

interface ContentContainerProps {
  width?: string;
}

export const ContentContainerWrapper = styled.div<ContentContainerProps>`
  width: ${({ width }) => width};
  padding: ${spacing.STANDARD};
  border: 1px solid ${colors.BLACK};
  border-radius: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.STANDARD};
`;
