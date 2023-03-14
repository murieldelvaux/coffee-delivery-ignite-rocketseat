import { useEffect, useState } from "react";
import { SelectItemsButton, SelectItemsWrapper } from "./Select.styles";

interface SelectItemsProps {
  itemsAmount: number;
}
export function SelectItems({ itemsAmount }: SelectItemsProps) {
  const [numberItem, setNumberItem] = useState(itemsAmount);

  function handleChangeNumberItem(op: string) {
    op === "+"
      ? setNumberItem(numberItem + 1)
      : numberItem > 0
      ? setNumberItem(numberItem - 1)
      : setNumberItem(0);
  }
  return (
    <SelectItemsWrapper>
      <SelectItemsButton onClick={() => handleChangeNumberItem("-")}>
        -
      </SelectItemsButton>
      <p>{numberItem}</p>
      <SelectItemsButton onClick={() => handleChangeNumberItem("+")}>
        +
      </SelectItemsButton>
    </SelectItemsWrapper>
  );
}
