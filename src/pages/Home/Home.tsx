import { ShoppingCartSimple, Trash } from "phosphor-react";
import ButtonCoffee from "../../components/Button/Button";
import { SelectItems } from "../../components/Select/SelectItem/Select";
import { SelectOption } from "../../components/Select/SelectOption/SelectOption";
import { HomeContainer } from "./Home.styles";
import { CreditCard } from "phosphor-react";
import InputCoffee from "../../components/Input/Input";
import { useState } from "react";
import CardCoffee from "../../components/Card/Card";
export function Home() {
  const [isValue, setIsValue] = useState("");
  return (
    <HomeContainer>
      <ButtonCoffee variant={"default"}>Label</ButtonCoffee>

      <ButtonCoffee variant={"cart"} number={0}>
        <ShoppingCartSimple size={24} />
      </ButtonCoffee>
      <ButtonCoffee variant={"remove"}>
        <Trash size={16} />
        Remover
      </ButtonCoffee>
      <p>oii</p>
      <SelectItems />
      <SelectOption icon={<CreditCard />}>Cartão de Crédito</SelectOption>
      <InputCoffee
        placeholder="label"
        onChange={(e) => setIsValue(e.target.value)}
        value={isValue}
        optionalPlaceholder={"Opcional"}
      />
      <CardCoffee variant="Carrinho" typeCoffe="Expresso" />
    </HomeContainer>
  );
}
