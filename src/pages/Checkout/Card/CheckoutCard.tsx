import { ReactNode } from "react";
import {
  CheckoutCardElements,
  CheckoutCardHeader,
  CheckoutCardHeaderTitles,
  CheckoutCardTitle,
  CheckoutCardWrapper,
} from "./CheckoutCard.styles";

interface ICheckoutCardProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
  header?: boolean;
  colorIcon?: string;
}
export function CheckoutCard({
  icon,
  title,
  description,
  children,
  header,
  colorIcon,
}: ICheckoutCardProps) {
  return (
    <CheckoutCardWrapper>
      <CheckoutCardHeader colorIcon={colorIcon}>
        {icon}
        {header ? (
          <CheckoutCardHeaderTitles>
            <CheckoutCardTitle>{title}</CheckoutCardTitle>
            <p>{description}</p>
          </CheckoutCardHeaderTitles>
        ) : (
          ""
        )}
      </CheckoutCardHeader>
      <CheckoutCardElements>{children}</CheckoutCardElements>
    </CheckoutCardWrapper>
  );
}
