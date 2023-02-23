import styled, { css } from "styled-components";

interface ICardContent {
  variant?: "Catálogo" | "Carrinho";
}

export const CardWrapper = styled.div<ICardContent>`
  ${({ theme, variant }) => css`
    display: flex;

    background-color: ${theme.color.grey.grey200};
    ${variant == "Catálogo" &&
    css`
      align-items: flex-end;
      justify-content: center;
      border-radius: 6px 36px;
      width: 256px;
      height: 310px;
    `}
    ${variant == "Carrinho" &&
    css`
      padding: 8px 4px;
      justify-content: center;
      align-items: flex-start;
      border-radius: 6px;
      width: 368px;
      height: 80px;
    `}
  `}
`;

export const CardContent = styled.div<ICardContent>`
  ${({ theme, variant }) => css`
    display: flex;

    flex-direction: column;
    ${variant == "Catálogo" &&
    css`
      align-items: center;
      justify-content: center;
      margin-bottom: 1.125rem;
    `}
    ${variant == "Carrinho" &&
    css`
      align-items: flex-start;
      justify-content: center;
      margin-left: 20px;
      margin-right: 50px;
    `};
  `}
`;
export const CardTitle = styled.h1<ICardContent>`
  ${({ theme, variant }) => css`
    line-height: ${theme.fonts.Baloo.lineHeight};
    color: ${theme.color.grey.grey800};

    ${variant == "Catálogo" &&
    css`
      font-family: "Baloo 2";
      font-weight: ${theme.fonts.Baloo.bold};
      font-size: 20px;
    `}
    ${variant == "Carrinho" &&
    css`
      font-family: ${theme.fonts.Roboto.family};
      font-weight: ${theme.fonts.Roboto.regular};
      font-size: 16px;
    `};
  `}
`;
export const CardBuy = styled.div<ICardContent>`
  ${({ variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    ${variant == "Catálogo" &&
    css`
      margin-top: 29px;
    `}
    ${variant == "Carrinho" &&
    css`
      margin-top: 8px;
    `};
  `}
`;
export const CardBuyContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  `}
`;
export const CardText = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.Roboto.family};
    font-weight: ${theme.fonts.Roboto.regular};
    line-height: ${theme.fonts.Roboto.lineHeight.LH1};
    font-size: 14px;
    text-align: center;
    color: ${theme.color.grey.grey600};
    margin-top: 12px;
    width: 90%;
  `}
`;
export const CardValueCoffe = styled.p<ICardContent>`
  ${({ theme, variant }) => css`
    font-family: ${theme.fonts.Roboto.family};
    font-weight: ${theme.fonts.Roboto.regular};
    line-height: ${theme.fonts.Roboto.lineHeight.LH1};
    font-size: 14px;
    text-align: right;
    color: ${theme.color.grey.grey700};

    ${variant == "Catálogo" &&
    css`
      margin-top: 29px;
      span {
        font-family: "Baloo 2";
        font-weight: ${theme.fonts.Baloo.extraBold};
        font-size: 24px;
      }
    `}
    ${variant == "Carrinho" &&
    css`
      font-family: ${theme.fonts.Roboto.family};
      font-weight: ${theme.fonts.Roboto.bold};
      font-size: 16px;
    `};
  `}
`;
export const ImageCoffee = styled.img<ICardContent>`
  ${({ variant }) => css`
    ${variant == "Catálogo" &&
    css`
      position: absolute;
      margin-bottom: 13.2rem;
      width: 120px;
      height: 120px;
    `}
    ${variant == "Carrinho" &&
    css`
      width: 64px;
      height: 64px;
    `};
  `}
`;
export const TagCoffeeWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 0.8rem;
    gap: 0.25rem;
  `}
`;
export const TagCoffeeItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem 0.5rem;
    background-color: ${theme.color.yellow.light};
    color: ${theme.color.yellow.dark};
    border-radius: 6.25rem;
    font-size: ${theme.fonts.Roboto.size.xxxs};
    font-family: "Roboto";
    font-weight: ${theme.fonts.Roboto.bold};
    line-height: ${theme.fonts.Roboto.lineHeight.LH1};
    text-transform: uppercase;
  `}
`;
