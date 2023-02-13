import styled, { css } from "styled-components";

interface InputCoffeeWrapperProps {
  inputFocus: boolean;
  optionalPlaceholder: boolean;
}
export const InputCoffeeWrapper = styled.div<InputCoffeeWrapperProps>`
  ${({ theme, inputFocus, optionalPlaceholder }) => css`
    display: flex;
    width: 100%;
    height: 2.625rem;
    align-items: center;
    border-radius: 0.25rem;
    border: none;
    background-color: ${theme.color.grey.grey400};
    p {
      display: ${inputFocus ? "none" : "flex"};
      color: ${theme.color.grey.grey600};
      font-size: 0.875rem;
      padding: 0.75rem;
      font-family: ${theme.fonts.Roboto.family};
      font-weight: ${theme.fonts.Roboto.regular};
      line-height: ${theme.fonts.Roboto.lineHeight.LH1};
      font-style: italic;
    }
  `}
`;
export const InputCoffeeComponent = styled.input`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 2.625rem;
    padding: 0.75rem;
    border-radius: 0.25rem;
    border: none;
    background-color: ${theme.color.grey.grey400};
    font-size: 0.875rem;
    color: ${theme.color.grey.grey700};
    font-family: ${theme.fonts.Roboto.family};
    font-weight: ${theme.fonts.Roboto.regular};
    line-height: ${theme.fonts.Roboto.lineHeight.LH1};
    &::placeholder {
      color: ${theme.color.grey.grey600};
    }

    &:focus {
      border: 1px solid ${theme.color.yellow.dark};
      outline: none;
    }
  `}
`;
