import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import ModalMessage from "../components/ModalHelper";
import { useMessage } from "../context/MessageContext";
import { routes } from "./Routes";

const MainRoutes = () => {
  const { message } = useMessage();
  return (
    <BrowserRouter>
      {message.display && <ModalMessage />}
      <GlobalStyle />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
