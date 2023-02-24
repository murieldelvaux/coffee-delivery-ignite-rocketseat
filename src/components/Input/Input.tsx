import { InputHTMLAttributes, useState } from "react";
import { InputCoffeeComponent, InputCoffeeWrapper } from "./Input.styles";

interface InputCoffeeProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  optionalPlaceholder?: string;
  width?: string;
}
function InputCoffee({
  placeholder = "Label",
  optionalPlaceholder = "Opcional",
  width,
}: InputCoffeeProps) {
  const [inputOnFocus, setInputOnFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  console.log(typeof inputValue);
  return (
    <InputCoffeeWrapper
      inputFocus={inputOnFocus ? true : false}
      optionalPlaceholder={inputValue ? true : false}
      width={width}
    >
      <InputCoffeeComponent
        placeholder={placeholder}
        value={inputValue}
        onBlur={() =>
          inputValue.length > 0 ? setInputOnFocus(true) : setInputOnFocus(false)
        }
        onFocus={() => setInputOnFocus(true)}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>{optionalPlaceholder}</p>
    </InputCoffeeWrapper>
  );
}

export default InputCoffee;
