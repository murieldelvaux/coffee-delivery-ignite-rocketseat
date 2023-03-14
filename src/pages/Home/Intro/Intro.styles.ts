import styled, { css } from "styled-components";

export const IntroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 5.75rem 0rem;
  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;
export const IntroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 58%;
  max-width: 588px;
  flex-wrap: wrap;
  gap: 4.125rem;
  @media (max-width: 900px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const IntroTitle = styled.h1`
  ${({ theme }) => css`
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: ${theme.fonts.Baloo.extraBold};
    font-size: ${theme.fonts.Baloo.size.xl};
    color: ${theme.color.grey.grey900};
    line-height: ${theme.fonts.Baloo.lineHeight};
    font-display: swap;
    width: 100%;
  `}
`;
export const IntroSubtitle = styled.h5`
  ${({ theme }) => css`
    font-family: "Roboto";
    font-style: normal;
    font-weight: ${theme.fonts.Roboto.regular};
    font-size: ${theme.fonts.Roboto.size.l};
    line-height: ${theme.fonts.Roboto.lineHeight.LH1};
    color: ${theme.color.grey.grey800};
    font-display: swap;
    width: 100%;
  `}
`;
export const IntroItemsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: start;
    width: 100%;
    flex-wrap: wrap;
    background: ${theme.color.background};
    gap: 1.594rem 2.5rem;
    @media (max-width: 540px) {
      gap: 1rem;
    }
  `}
`;

interface IntroItemIconProps {
  backgroundColor: string;
}

export const IntroItemIcon = styled.div<IntroItemIconProps>`
  ${({ theme, backgroundColor }) => css`
    display: flex;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    align-items: center;
    flex-wrap: wrap;
    background: ${theme.color.background};
    background-color: ${backgroundColor};
    border-radius: 100%;

    svg {
      color: ${theme.color.background};
    }
  `}
`;
export const IntroItems = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    background: ${theme.color.background};
    p {
      color: ${theme.color.grey.grey700};
      font-family: "Roboto";
      font-style: normal;
      font-weight: ${theme.fonts.Roboto.regular};
      font-size: ${theme.fonts.Roboto.size.sm};
      line-height: ${theme.fonts.Roboto.lineHeight.LH1};
    }
  `}
`;
export const IntroImage = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27rem;
    height: 22.5rem;
    background-image: url("/ImageCoffee.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `}
`;
