import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  MapPinLine,
  Money,
} from "phosphor-react";
import InputCoffee from "../../components/Input/Input";
import { CheckoutCard } from "../../components/CardCheckout/CheckoutCard";
import {
  CheckoutCartSeparator,
  CheckoutCartValuesWrapper,
  CheckoutContainer,
  CheckoutTitles,
  CheckoutWrapper,
  CheckoutWrapperCart,
} from "./Checkout.styles";
import { SelectOption } from "../../components/Select/SelectOption/SelectOption";
import CardCoffee from "../../components/Card/Card";
import ButtonCoffee from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { OrdersContext } from "../../contexts/OrderContext";
export function Checkout() {
  const navigate = useNavigate();
  const { orders, handleSumItemsAmount } = useContext(OrdersContext);
  handleSumItemsAmount();
  const deliveryRate = 4.0;
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
          title={"Pagamento"}
          description={
            "O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          }
          icon={<CurrencyDollar />}
          colorIcon={"#8047F8"}
        >
          <SelectOption children={"Cartão de Crédito"} icon={<CreditCard />} />
          <SelectOption children={"Cartão de Débito"} icon={<Bank />} />
          <SelectOption children={"Dinheiro"} icon={<Money />} />
        </CheckoutCard>
      </CheckoutWrapper>

      <CheckoutWrapperCart>
        <CheckoutTitles>Cafés selecionados</CheckoutTitles>

        <CheckoutCard header={true}>
          <div>
            {orders.map((item) => (
              <div>
                <CardCoffee
                  key={item.title}
                  title={item.title}
                  variant="Carrinho"
                  typeCoffee={item.typeCoffee}
                  valueCoffee={item.valueCoffee}
                  amountCoffee={item.amountCoffee}
                />
                <CheckoutCartSeparator />
              </div>
            ))}
          </div>
          <CheckoutCartValuesWrapper>
            <h6>Total de itens</h6>
            <p>R$ 29,70</p>
          </CheckoutCartValuesWrapper>
          <CheckoutCartValuesWrapper>
            <h6>Entrega</h6>
            <p>R${deliveryRate}</p>
          </CheckoutCartValuesWrapper>
          <CheckoutCartValuesWrapper>
            <h4>Total</h4>
            <h4>R$ 33,20</h4>
          </CheckoutCartValuesWrapper>
          <ButtonCoffee
            variant={"default"}
            width={"100%"}
            onClick={() => navigate("/order")}
          >
            Confirmar Pedido
          </ButtonCoffee>
        </CheckoutCard>
      </CheckoutWrapperCart>
    </CheckoutContainer>
  );
}
