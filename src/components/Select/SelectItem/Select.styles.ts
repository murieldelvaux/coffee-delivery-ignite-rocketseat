import styled, { css } from "styled-components";

export const SelectItemsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 72px;
    min-height: 38px;
    height: 100%;

    background-color: ${theme.color.grey.grey400};
    border-radius: 6px;
    gap: 8px;

    p {
      font-family: ${theme.fonts.Roboto.family};
      font-size: ${theme.fonts.Roboto.size.sm};
      font-weight: ${theme.fonts.Roboto.regular};
      color: ${theme.color.grey.grey900};
    }
  `}
`;

export const SelectItemsButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: ${theme.fonts.Roboto.family};
    font-size: ${theme.fonts.Roboto.size.l};
    font-weight: ${theme.fonts.Roboto.regular};
    color: ${theme.color.purple.normal};

    &:focus {
      color: ${theme.color.purple.dark};
    }
  `}
`;
