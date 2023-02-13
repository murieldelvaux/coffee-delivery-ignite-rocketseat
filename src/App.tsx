import { GlobalStyle } from "./styles/global";
import theme from "./styles/themes/defaultTheme";
import { Home } from "./pages/Home/Home";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
