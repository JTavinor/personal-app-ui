import styled from "styled-components";
import spacing from "../../styles/spacing";

interface ContentContainerProps {
  width?: string;
}

export const CreateExpensesRowWrapper = styled.div<ContentContainerProps>`
  display: flex;
  gap: ${spacing.STANDARD};
  align-items: center;
`;
