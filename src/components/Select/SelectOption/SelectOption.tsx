import { ReactNode } from "react";
import { SelectOptionWrapper } from "./SelectOption.styles";

interface ISelectOptionProps {
  children: string;
  icon: ReactNode;
}
export function SelectOption({ children, icon }: ISelectOptionProps) {
  return (
    <SelectOptionWrapper>
      {icon}
      <p>{children}</p>
    </SelectOptionWrapper>
  );
}
