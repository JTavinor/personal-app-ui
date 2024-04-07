import styled from "styled-components";

export const StyledInputLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StyledInputBase = styled.input.attrs({ as: "input" })`
  height: 34px;
  border-radius: 4px;
  border: 1px solid gray;
  padding: 4px 6px 3px;
  font-size: 16px;
  max-width: 280px;
  box-sizing: border-box;
`;

export const StyledInput = styled(StyledInputBase)``;

export const StyledSelect = styled(StyledInputBase).attrs({ as: "select" })``;
