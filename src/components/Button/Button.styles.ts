import styled, { css } from "styled-components";

interface IButtonWrapper {
  color: string;
  variant: "default" | "icon" | "remove" | "cart";
  width?: string;
}

export const ButtonWrapper = styled.button<IButtonWrapper>`
  ${({ variant, theme, width }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    width: ${width};
    ${variant == "default" &&
    css`
      background-color: ${theme.color.yellow.normal};
      outline: none;
      color: ${theme.color.white};
      padding: 12px 8px;
      min-width: 132px;
      gap: 4px;
      font-family: ${theme.fonts.Roboto.family};
      font-weight: ${theme.fonts.Roboto.bold};
      font-size: ${theme.fonts.Roboto.size.xs};
      line-height: ${theme.fonts.Roboto.lineHeight.LH2};
      text-transform: uppercase;

      &:hover {
        background-color: ${theme.color.yellow.dark};
      }
    `}
    ${variant == "icon" &&
    css`
      background-color: ${theme.color.purple.dark};
      color: ${theme.color.white};
      outline: none;

      padding: 8px;
      min-width: 38px;
      gap: 4px;
      font-family: ${theme.fonts.Roboto.family};
      font-weight: ${theme.fonts.Roboto.bold};
      font-size: ${theme.fonts.Roboto.size.xs};
      line-height: ${theme.fonts.Roboto.lineHeight.LH2};
      text-transform: uppercase;

      &:hover {
        background-color: ${theme.color.purple.normal};
      }
      svg {
        color: ${theme.color.grey.grey200};
      }
    `}
    ${variant == "remove" &&
    css`
      background-color: ${theme.color.grey.grey400};
      color: ${theme.color.grey.grey700};
      outline: none;

      padding: 8px;
      min-width: 38px;
      gap: 4px;
      font-family: ${theme.fonts.Roboto.family};
      font-weight: ${theme.fonts.Roboto.regular};
      font-size: ${theme.fonts.Roboto.size.xxs};
      line-height: ${theme.fonts.Roboto.lineHeight.LH2};
      text-transform: uppercase;

      &:hover {
        background-color: ${theme.color.grey.grey500};
        color: ${theme.color.grey.grey800};
      }
      svg {
        color: ${theme.color.purple.normal};
      }
    `}
    ${variant == "cart" &&
    css`
      background-color: ${theme.color.yellow.light};
      color: ${theme.color.yellow.dark};
      outline: none;
      min-width: 45px;
      padding: 8px;
      min-height: 45px;
      gap: 4px;
      font-family: ${theme.fonts.Roboto.family};
      font-weight: ${theme.fonts.Roboto.bold};
      font-size: ${theme.fonts.Roboto.size.xs};
      line-height: ${theme.fonts.Roboto.lineHeight.LH2};
      text-transform: uppercase;
    `}
  `}
`;
interface IButtonCartNumberProps {
  number?: number;
}
export const ButtonCartNumber = styled.div<IButtonCartNumberProps>`
  ${({ theme, number }) => css`
    display: ${number === 0 ? "none" : "flex"};
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background-color: ${theme.color.yellow.dark};
    color: ${theme.color.white};
    border-radius: 100%;
    position: absolute;
    margin-bottom: 2rem;
    margin-left: 2rem;
    font-family: ${theme.fonts.Roboto.family};
    font-weight: ${theme.fonts.Roboto.bold};
    font-size: ${theme.fonts.Roboto.size.xxs};
    line-height: ${theme.fonts.Roboto.lineHeight.LH1};

    p {
      padding: 0px;
      margin-top: 0.125rem;
    }
  `}
`;

export const ButtonContentCartNumber = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: start;
    align-items: flex-end;
  `}
`;
