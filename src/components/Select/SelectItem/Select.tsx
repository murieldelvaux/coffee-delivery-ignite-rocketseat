import { useState } from "react";
import { SelectItemsButton, SelectItemsWrapper } from "./Select.styles";

export function SelectItems() {
  const [numberItem, setNumberItem] = useState(0);
  function handleChangeNumberItem(op: string) {
    console.log(op);
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
