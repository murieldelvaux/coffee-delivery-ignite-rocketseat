import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  padding: 2rem 10rem;
  @media (max-width: 800px) {
    padding: 1rem;
  }
  @media (max-width: 340px) {
    gap: 1rem;
  }
`;

export const ActionsHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  `}
`;
export const ActionsLocationButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    padding: 0.5rem;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
    background-color: ${theme.color.purple.light};
    color: ${theme.color.purple.dark};
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 0.375rem;
    svg {
      color: ${theme.color.purple.normal};
    }
    p {
      font-size: 0.875rem;
      font-family: ${theme.fonts.Roboto.family};
      font-weight: ${theme.fonts.Roboto.regular};
      line-height: ${theme.fonts.Roboto.lineHeight.LH1};
    }
  `}
`;
