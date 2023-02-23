import styled, { css } from "styled-components";

export const CoffeeListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;

  margin-top: 1rem;
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;
export const CoffeeListTitle = styled.h1`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.color.grey.grey800};
    font-family: "Baloo 2";
    font-weight: ${theme.fonts.Baloo.extraBold};
    font-size: ${theme.fonts.Baloo.size.l};
    line-height: ${theme.fonts.Roboto.lineHeight.LH1};
    margin-bottom: 3rem;
  `}
`;
export const CoffeeListItems = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    max-width: 1125px;
    gap: 2rem;
    @media (max-width: 800px) {
      align-items: center;
      justify-content: center;
    }
  `}
`;
