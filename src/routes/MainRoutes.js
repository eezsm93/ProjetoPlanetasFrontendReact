import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import { useMessage } from "../context/MessageContext";
import ModalMessage from "../components/ModalHelper";
import { routes } from "./Routes";
import AccessDenied from "../helpers/AccessDenied";
import Header from "../components/Header";
import { useUser } from "../context/UserContext";

const MainRoutes = () => {
  const { message } = useMessage();
  const { user } = useUser();

  function RouteVerification({ route }) {
    return route.accessType.includes(user.profile) ? (
      <>
        <Header />
        {route.element}
      </>
    ) : (
      <AccessDenied />
    );
  }

  return (
    <BrowserRouter>
      {message.display && <ModalMessage />}
      <GlobalStyle />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.private ? (
                <RouteVerification route={route} />
              ) : (
                route.element
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
