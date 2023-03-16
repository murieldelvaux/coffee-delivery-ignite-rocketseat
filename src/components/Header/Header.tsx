import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import ButtonCoffee from "../../components/Button/Button";
import CoffeeDeliveryIcon from "../../components/Icons/CoffeeDelivery";
import {
  ActionsHeader,
  ActionsLocationButton,
  HeaderWrapper,
} from "./Header.styles";
import { useContext, useState } from "react";
import { OrdersContext } from "../../contexts/OrderContext";

export function Header() {
  const navigate = useNavigate();
  const { orders } = useContext(OrdersContext);
  return (
    <HeaderWrapper>
      <Link to={"/"}>
        <CoffeeDeliveryIcon />
      </Link>
      <ActionsHeader>
        <ActionsLocationButton>
          <MapPin size={22} />
          <p>Porto Alegre, RS</p>
        </ActionsLocationButton>
        <ButtonCoffee
          variant={"cart"}
          number={orders.length}
          onClick={() => navigate("/checkout")}
        >
          <ShoppingCartSimple size={24} />
        </ButtonCoffee>
      </ActionsHeader>
    </HeaderWrapper>
  );
}
