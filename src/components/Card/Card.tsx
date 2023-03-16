import { ShoppingCartSimple, Trash } from "phosphor-react";
import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";
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
import { useContext } from "react";
import { Order, OrdersContext } from "../../contexts/OrderContext";
interface ICardCoffeeProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  typeCoffee: string;
  variant?: "Catálogo" | "Carrinho";
  title: string;
  description?: string;
  valueCoffee: number;
  amountCoffee?: number;
  tagCoffee?: Array<string>;
}

function CardCoffee({
  typeCoffee,
  variant,
  title,
  description,
  valueCoffee,
  tagCoffee,
  amountCoffee = 1,
  ...props
}: ICardCoffeeProps) {
  const { createNewOrder, itemAmount } = useContext(OrdersContext);

  function handleCreateNewOrder() {
    const data = [
      {
        title: title,
        valueCoffee: valueCoffee,
        typeCoffee: typeCoffee,
        amountCoffee: itemAmount,
      },
    ];
    data.map((item, i, arr) => {
      console.log(item, i, arr[i]);
      createNewOrder(arr[i]);
    });
    console.log(data);
  }
  return (
    <CardWrapper variant={variant}>
      <ImageCoffee variant={variant} src={`/Type=${typeCoffee}.png`} />
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
            <SelectItems itemsAmount={amountCoffee} />
            {variant === "Carrinho" ? (
              <ButtonCoffee variant={"remove"}>
                <Trash size={16} />
                Remover
              </ButtonCoffee>
            ) : (
              <ButtonCoffee
                variant={"icon"}
                onClick={(e) => handleCreateNewOrder()}
              >
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
