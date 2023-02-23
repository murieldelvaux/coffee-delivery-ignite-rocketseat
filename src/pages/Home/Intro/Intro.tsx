import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";

import {
  IntroContent,
  IntroContentWrapper,
  IntroImage,
  IntroItemIcon,
  IntroItems,
  IntroItemsWrapper,
  IntroSubtitle,
  IntroTitle,
  IntroWrapper,
} from "./Intro.styles";

export function Introduction() {
  return (
    <IntroWrapper>
      <IntroContentWrapper>
        <IntroContent>
          <IntroTitle>
            Encontre o café perfeito para qualquer hora do dia
          </IntroTitle>
          <IntroSubtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </IntroSubtitle>
        </IntroContent>
        <IntroItemsWrapper>
          <IntroItems>
            <IntroItemIcon backgroundColor={"#C47F17"}>
              <ShoppingCartSimple />
            </IntroItemIcon>
            <p>Compra simples e segura</p>
          </IntroItems>
          <IntroItems>
            <IntroItemIcon backgroundColor={"#574F4D"}>
              <Package />
            </IntroItemIcon>
            <p>Compra simples e segura</p>
          </IntroItems>
          <IntroItems>
            <IntroItemIcon backgroundColor={"#DBAC2C"}>
              <Timer />
            </IntroItemIcon>
            <p>Compra simples e segura</p>
          </IntroItems>
          <IntroItems>
            <IntroItemIcon backgroundColor={"#8047F8"}>
              <Coffee />
            </IntroItemIcon>
            <p>Compra simples e segura</p>
          </IntroItems>
        </IntroItemsWrapper>
      </IntroContentWrapper>
      <IntroImage></IntroImage>
    </IntroWrapper>
  );
}
