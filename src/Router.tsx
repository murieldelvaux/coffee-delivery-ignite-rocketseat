import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Checkout } from "./pages/Checkout/Checkout";
import { Home } from "./pages/Home/Home";

export function Router() {
  return (
    <Routes>
      {/* <DefaultLayout /> ----> trás o layout padrão da aplicação, para evitar de criar em cada componente da rota a mesma coisa */}
      <Route path="/" element={<DefaultLayout />}>
        {/* As rotas vão se somando, se aqui fosse /admin, para acessar History eu precisaria: /admin/history */}
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
