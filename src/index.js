import React from "react";
import { render } from "react-dom";
import MainRoutes from "./routes/MainRoutes";
import { MessageProvider } from "./context/MessageContext";
import { UserProvider } from "./context/UserContext";

render(
  <React.StrictMode>
    <UserProvider>
      <MessageProvider>
        <MainRoutes />
      </MessageProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
