import styled, { css } from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  width: 100%;
  padding: 2rem 10rem;
  gap: 2rem;
  justify-content: space-between;
  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
`;
export const OrderTitle = styled.h1`
  ${({ theme }) => css`
    display: flex;
    font-family: "Baloo 2";
    font-size: ${theme.fonts.Baloo.size.l};
    font-weight: ${theme.fonts.Baloo.extraBold};
    line-height: ${theme.fonts.Roboto.lineHeight.LH1};
    color: ${theme.color.yellow.dark};
  `}
`;
export const OrderSubTitle = styled.h3`
  ${({ theme }) => css`
    display: flex;
    font-family: "Roboto";
    font-size: ${theme.fonts.Roboto.size.l};
    font-weight: ${theme.fonts.Roboto.regular};
    line-height: ${theme.fonts.Roboto.lineHeight.LH1};
    color: ${theme.color.grey.grey800};
  `}
`;
export const OrderTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
export const OrderColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 60%;
`;

export const OrderCardData = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.purple.normal};
  max-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -4;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;
export const OrderInfoItemWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 1.25rem;
    align-items: center;
    p {
      font-family: "Roboto";
      font-weight: ${theme.fonts.Roboto.regular};
      color: ${theme.color.grey.grey700};
      font-size: ${theme.fonts.Roboto.size.sm};
      max-width: 310px;
    }
  `}
`;
interface OrderInfoItemIconProps {
  background?: "#8047F8" | "#DBAC2C" | "#C47F17";
}
export const OrderInfoItemIcon = styled.div<OrderInfoItemIconProps>`
  ${({ background, theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background-color: ${background};
    border-radius: 100%;

    svg {
      color: ${theme.color.white};
    }
  `}
`;
export const OrderInfoImage = styled.div`
  background-image: url("/Illustration.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 492px;
  height: 293px;
`;
