import { CoffeeList } from "./CoffeeList/CoffeeList";
import { HomeContainer } from "./Home.styles";
import { Introduction } from "./Intro/Intro";

export function Home() {
  return (
    <HomeContainer>
      <Introduction />
      <CoffeeList />
    </HomeContainer>
  );
}
