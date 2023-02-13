import "styled-components";
import defaultTheme from "../styles/themes/defaultTheme";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  /* aqui dentro eu não vou criar nada, só sobrescrever */
  export interface DefaultTheme extends ThemeType {}
}
