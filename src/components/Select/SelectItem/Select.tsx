import { useState, useContext } from "react";
import { OrdersContext } from "../../../contexts/OrderContext";
import { SelectItemsButton, SelectItemsWrapper } from "./Select.styles";

interface SelectItemsProps {
  itemsAmount: number;
}
export function SelectItems({ itemsAmount }: SelectItemsProps) {
  const [numberItem, setNumberItem] = useState(1);
  const { setItemsAmount } = useContext(OrdersContext);
  function handleChangeNumberItem(op: string) {
    op === "+"
      ? setNumberItem(numberItem + 1)
      : numberItem > 0
      ? setNumberItem(numberItem - 1)
      : setNumberItem(0);

    itemsAmount = handleSetNumberItem(numberItem + 1);
    setItemsAmount(itemsAmount);
  }
  function handleSetNumberItem(item: number) {
    return item;
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
