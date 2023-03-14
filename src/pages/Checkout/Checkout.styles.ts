import styled, { css } from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
export const CheckoutTitles = styled.h2`
  ${({ theme }) => css`
    display: flex;
    font-family: "Baloo 2";
    margin-bottom: 0.188rem;
    font-size: ${theme.fonts.Baloo.size.sm};
    font-weight: ${theme.fonts.Baloo.bold};
    line-height: ${theme.fonts.Roboto.lineHeight.LH1};
    color: ${theme.color.grey.grey800};
  `}
`;
export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 60%;
`;
export const CheckoutWrapperCart = styled.div`
  display: flex;
  max-width: 448px;
  flex-direction: column;
  gap: 0.75rem;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const CheckoutCartSeparator = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    border: 1px solid ${theme.color.grey.grey400};
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  `}
`;
export const CheckoutCartValuesWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    line-height: 130%;
    margin-bottom: 0.75rem;
    h4 {
      font-family: "Roboto";
      font-size: ${theme.fonts.Roboto.size.l};
      font-weight: ${theme.fonts.Roboto.bold};
      color: ${theme.color.grey.grey800};
      margin-bottom: 0.75rem;
    }
    h6 {
      font-family: "Roboto";
      font-size: ${theme.fonts.Roboto.size.xs};
      font-weight: ${theme.fonts.Roboto.regular};
      color: ${theme.color.grey.grey700};
    }
    p {
      font-family: "Roboto";
      font-size: ${theme.fonts.Roboto.size.sm};
      font-weight: ${theme.fonts.Roboto.regular};
      color: ${theme.color.grey.grey700};
    }
  `}
`;
