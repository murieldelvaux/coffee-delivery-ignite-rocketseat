import styled, { css } from "styled-components";

export const HomeContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: ${theme.color.background};
    padding: 2rem 10rem;
    @media (max-width: 800px) {
      align-items: center;
      justify-content: center;

      padding: 1rem;
    }
  `}
`;
export const HomeBannerWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    background: ${theme.color.background};
    @media (max-width: 800px) {
      width: 100%;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
  `}
`;
export const HomeBannerContentWrapper = styled.div`
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
export const HomeBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const HomeBannerTitle = styled.h1`
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
export const HomeBannerSubtitle = styled.h5`
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
export const HomeBannerItemsWrapper = styled.div`
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

interface HomeBannerItemIconProps {
  backgroundColor: string;
}

export const HomeBannerItemIcon = styled.div<HomeBannerItemIconProps>`
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
export const HomeBannerItems = styled.div`
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
export const HomeBannerImage = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 27rem;
    height: 22.5rem;
    background-image: url("../../../public/Image/ImageCoffee.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `}
`;
