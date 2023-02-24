import styled, { css } from "styled-components";

export const CheckoutCardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.color.grey.grey200};
    padding: 2.5rem;
    gap: 2rem;
    border-radius: 0.375rem;
  `}
`;
export const CheckoutCardElements = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  `}
`;
interface ICheckoutCardHeaderProps {
  colorIcon?: string;
}
export const CheckoutCardHeader = styled.div<ICheckoutCardHeaderProps>`
  ${({ theme, colorIcon }) => css`
    display: flex;

    gap: 0.5rem;
    svg {
      color: ${colorIcon};
      font-size: 1.375rem;
    }
  `}
`;
export const CheckoutCardHeaderTitles = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    p {
      font-family: "Roboto";
      font-size: ${theme.fonts.Roboto.size.xs};
      font-weight: ${theme.fonts.Roboto.regular};
      line-height: ${theme.fonts.Roboto.lineHeight.LH1};
      color: ${theme.color.grey.grey700};
    }
  `}
`;
export const CheckoutCardTitle = styled.h3`
  ${({ theme }) => css`
    display: flex;
    font-family: "Roboto";
    font-size: ${theme.fonts.Roboto.size.sm};
    font-weight: ${theme.fonts.Roboto.regular};
    line-height: ${theme.fonts.Roboto.lineHeight.LH1};
    color: ${theme.color.grey.grey800};
  `}
`;
