import styled, { css } from "styled-components";

export const SelectOptionWrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: ${theme.color.grey.grey400};
    border: none;
    cursor: pointer;
    border-radius: 6px;
    gap: 8px;
    text-transform: uppercase;

    svg {
      font-size: 16px;
      color: ${theme.color.purple.normal};
    }
    p {
      font-family: ${theme.fonts.Roboto.family};
      font-size: ${theme.fonts.Roboto.size.xxs};
      font-weight: ${theme.fonts.Roboto.regular};
      color: ${theme.color.grey.grey700};
    }

    &:hover {
      background-color: ${theme.color.grey.grey500};
      p {
        color: ${theme.color.grey.grey800};
      }
    }

    &:focus {
      border: 1px solid ${theme.color.purple.normal};
    }
  `}
`;
