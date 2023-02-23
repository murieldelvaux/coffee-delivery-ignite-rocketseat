import { MapPin, ShoppingCartSimple } from "phosphor-react";
import ButtonCoffee from "../../components/Button/Button";
import CoffeeDeliveryIcon from "../../components/Icons/CoffeeDelivery";
import {
  ActionsHeader,
  ActionsLocationButton,
  HeaderWrapper,
} from "./Header.styles";

export function Header() {
  return (
    <HeaderWrapper>
      <CoffeeDeliveryIcon />
      <ActionsHeader>
        <ActionsLocationButton>
          <MapPin size={22} />
          <p>Porto Alegre, RS</p>
        </ActionsLocationButton>
        <ButtonCoffee variant={"cart"} number={0}>
          <ShoppingCartSimple size={24} />
        </ButtonCoffee>
      </ActionsHeader>
    </HeaderWrapper>
  );
}
