import CardCoffee from "../../../components/Card/Card";
import {
  CoffeeListItems,
  CoffeeListTitle,
  CoffeeListWrapper,
} from "./CoffeeList.styles";
import CoffeeItems from "../../../CoffeeItems.json";
export function CoffeeList() {
  const coffee = CoffeeItems;
  coffee.map((val, i) => {
    console.log(val, i);
  });
  return (
    <CoffeeListWrapper>
      <CoffeeListTitle>Nossos cafés</CoffeeListTitle>
      <CoffeeListItems>
        {coffee.map((val, i) => (
          <CardCoffee
            variant="Catálogo"
            title={val.title}
            description={val.description}
            valueCoffee={val.valueCoffee}
            tagCoffee={val.tagCoffee}
            typeCoffee={val.typeCoffee}
          />
        ))}
      </CoffeeListItems>
    </CoffeeListWrapper>
  );
}
