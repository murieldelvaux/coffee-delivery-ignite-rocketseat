import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import {
  ButtonCartNumber,
  ButtonContentCartNumber,
  ButtonWrapper,
} from "./Button.styles";

interface IButtonCoffeeProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  Icon?: ReactNode;
  color?: string;
  variant: "default" | "icon" | "remove" | "cart";
  number?: number;
  width?: string;
}

function ButtonCoffee({
  ref,
  Icon,
  color = "#DBAC2C",
  variant = "default",
  number,
  width,
  ...props
}: IButtonCoffeeProps) {
  return variant === "cart" ? (
    <ButtonContentCartNumber>
      <ButtonCartNumber number={number}>
        <p>{number}</p>
      </ButtonCartNumber>
      <ButtonWrapper color={color} variant={variant} {...props}>
        {Icon}
        {props.children}
      </ButtonWrapper>
    </ButtonContentCartNumber>
  ) : (
    <ButtonWrapper color={color} variant={variant} {...props} width={width}>
      {Icon}
      {props.children}
    </ButtonWrapper>
  );
}

export default ButtonCoffee;
