import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import {
  OrderCardData,
  OrderContainer,
  OrderInfoImage,
  OrderInfoItemIcon,
  OrderInfoItemWrapper,
  OrderSubTitle,
  OrderTitle,
  OrderTitleWrapper,
  OrderWrapper,
} from "./Order.styles";

export function Order() {
  const navigate = useNavigate();
  return (
    <OrderContainer>
      <OrderWrapper>
        <OrderTitleWrapper>
          <OrderTitle> Uhu! Pedido confirmado</OrderTitle>
          <OrderSubTitle>
            Agora é só aguardar que logo o café chegará até você
          </OrderSubTitle>
        </OrderTitleWrapper>
        <OrderCardData>
          <OrderInfoItemWrapper>
            <OrderInfoItemIcon background="#8047F8">
              <MapPin />
            </OrderInfoItemIcon>
            <p>
              Entrega em <b>Rua João Daniel Martinelli, 102</b> Farrapos - Porto
              Alegre, RS
            </p>
          </OrderInfoItemWrapper>
          <OrderInfoItemWrapper>
            <OrderInfoItemIcon background="#DBAC2C">
              <Timer />
            </OrderInfoItemIcon>
            <p>
              Previsão de entrega <br /> <b>20 min - 30 min</b>
            </p>
          </OrderInfoItemWrapper>
          <OrderInfoItemWrapper>
            <OrderInfoItemIcon background="#C47F17">
              <CurrencyDollar />
            </OrderInfoItemIcon>
            <p>
              Pagamento na entrega <br /> <b>Cartão de Crédito</b>
            </p>
          </OrderInfoItemWrapper>
        </OrderCardData>
      </OrderWrapper>

      <OrderInfoImage />
    </OrderContainer>
  );
}
