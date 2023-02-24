import styled, { css } from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 2rem 10rem;
  gap: 2rem;
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
  flex-direction: column;
  gap: 0.75rem;
  width: 28%;
`;
