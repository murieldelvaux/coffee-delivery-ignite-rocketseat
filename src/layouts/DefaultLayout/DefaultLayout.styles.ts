import styled, { css } from "styled-components";

export const LayoutContainer = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    background: ${theme.color.background};
  `}
`;
