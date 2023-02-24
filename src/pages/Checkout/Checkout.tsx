import { MapPin, MapPinLine } from "phosphor-react";
import InputCoffee from "../../components/Input/Input";
import { CheckoutCard } from "./Card/CheckoutCard";
import {
  CheckoutContainer,
  CheckoutTitles,
  CheckoutWrapper,
  CheckoutWrapperCart,
} from "./Checkout.styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutWrapper>
        <CheckoutTitles>Complete seu Pedido</CheckoutTitles>
        <CheckoutCard
          header={true}
          title={"Endereço de Entrega"}
          description={"Informe o endereço onde deseja receber seu pedido"}
          icon={<MapPinLine />}
          colorIcon={"#C47F17"}
        >
          <InputCoffee
            placeholder={"CEP"}
            width={"30%"}
            optionalPlaceholder={""}
          />
          <InputCoffee
            placeholder={"Rua"}
            width={"100%"}
            optionalPlaceholder={""}
          />
          <InputCoffee
            placeholder={"Número"}
            width={"40%"}
            optionalPlaceholder={""}
          />
          <InputCoffee placeholder={"Complemento"} width={"59%"} />
          <InputCoffee
            placeholder={"Bairro"}
            width={"40%"}
            optionalPlaceholder={""}
          />
          <InputCoffee
            placeholder={"Cidade"}
            width={"44%"}
            optionalPlaceholder={""}
          />
          <InputCoffee
            placeholder={"UF"}
            width={"14%"}
            optionalPlaceholder={""}
          />
        </CheckoutCard>
        <CheckoutCard
          header={true}
          title={"Endereço de Entrega"}
          description={"Informe o endereço onde deseja receber seu pedido"}
          icon={<MapPinLine />}
          colorIcon={"#C47F17"}
        >
          <InputCoffee placeholder={"CEP"} />
          <InputCoffee placeholder={"CEP"} />
          <InputCoffee placeholder={"CEP"} />
        </CheckoutCard>
      </CheckoutWrapper>
      <CheckoutWrapperCart>
        <CheckoutTitles>Cafés selecionados</CheckoutTitles>
        <CheckoutCard
          header={true}
          title={"Endereço de Entrega"}
          description={"Informe o endereço onde deseja receber seu pedido"}
          icon={<MapPinLine />}
          colorIcon={"#C47F17"}
        >
          <InputCoffee placeholder={"CEP"} width={"30%"} />
          <InputCoffee placeholder={"CEP"} />
          <InputCoffee placeholder={"CEP"} />
        </CheckoutCard>
        <CheckoutCard
          header={true}
          title={"Endereço de Entrega"}
          description={"Informe o endereço onde deseja receber seu pedido"}
          icon={<MapPinLine />}
          colorIcon={"#C47F17"}
        >
          <InputCoffee placeholder={"CEP"} />
          <InputCoffee placeholder={"CEP"} />
          <InputCoffee placeholder={"CEP"} />
        </CheckoutCard>
      </CheckoutWrapperCart>
    </CheckoutContainer>
  );
}
