import { GlobalStyle } from "./styles/global";
import theme from "./styles/themes/defaultTheme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { OrdersContextProvider } from "./contexts/OrderContext";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <OrdersContextProvider>
          <Router />
        </OrdersContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
