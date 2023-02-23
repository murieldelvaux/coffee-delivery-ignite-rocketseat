import { ShoppingCartSimple, Tag, Trash } from "phosphor-react";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import ButtonCoffee from "../Button/Button";
import { SelectItems } from "../Select/SelectItem/Select";
import {
  CardBuy,
  CardBuyContent,
  CardContent,
  CardText,
  CardTitle,
  CardValueCoffe,
  CardWrapper,
  ImageCoffee,
  TagCoffeeItem,
  TagCoffeeWrapper,
} from "./Card.styles";

interface ICardCoffeeProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  typeCoffee?:
    | "Americano"
    | "Árabe"
    | "Café com Leite"
    | "Café Gelado"
    | "Cappuccino"
    | "Chocolate Quente"
    | "Cubano"
    | "Expresso Cremoso"
    | "Expresso"
    | "Havaiano"
    | "Irlandês"
    | "Latte"
    | "Macchiato"
    | "Mochaccino";
  variant?: "Catálogo" | "Carrinho";
  title?: string;
  description?: string;
  valueCoffee?: number;
  tagCoffee?: Array<string>;
}

function CardCoffee({
  typeCoffee,
  variant,
  title,
  description,
  valueCoffee,
  tagCoffee,
  ...props
}: ICardCoffeeProps) {
  return (
    <CardWrapper variant={variant}>
      <ImageCoffee
        variant={variant}
        src={`../../../public/Image/Type=${typeCoffee}.png`}
      />
      <CardContent variant={variant}>
        {variant === "Carrinho" ? (
          ""
        ) : (
          <TagCoffeeWrapper>
            {tagCoffee?.map((val, i) => (
              <TagCoffeeItem key={val + i}>{val}</TagCoffeeItem>
            ))}
          </TagCoffeeWrapper>
        )}
        <CardTitle variant={variant}>{title}</CardTitle>
        {variant === "Carrinho" ? "" : <CardText>{description}</CardText>}
        <CardBuy variant={variant}>
          <CardBuyContent>
            {variant === "Carrinho" ? (
              ""
            ) : (
              <CardValueCoffe>
                R$<span>{valueCoffee?.toPrecision(3).replace(".", ",")}</span>
              </CardValueCoffe>
            )}
            <SelectItems />
            {variant === "Carrinho" ? (
              <ButtonCoffee variant={"remove"}>
                <Trash size={16} />
                Remover
              </ButtonCoffee>
            ) : (
              <ButtonCoffee variant={"icon"}>
                <ShoppingCartSimple size={24} />
              </ButtonCoffee>
            )}
          </CardBuyContent>
        </CardBuy>
      </CardContent>
      {variant === "Carrinho" ? (
        <CardValueCoffe variant={variant}>
          R$<span>{valueCoffee?.toPrecision(3).replace(".", ",")}</span>
        </CardValueCoffe>
      ) : (
        ""
      )}
    </CardWrapper>
  );
}

export default CardCoffee;
