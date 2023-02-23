import { Header } from "../../components/Header/Header";
import { LayoutContainer } from "./DefaultLayout.styles";
import { Outlet } from "react-router-dom";
export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      {/*Outlet -> esse componente trás os componentes filhos da rota que eu quero, 
      ex: se eu quero os componentes da rota Home, ele irá redirecionar */}
    </LayoutContainer>
  );
}
