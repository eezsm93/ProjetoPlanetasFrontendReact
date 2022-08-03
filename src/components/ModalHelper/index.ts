import { Alert } from "@mui/material";
import React from "react";
import { useMessage } from "../../context/MessageContext";
import { ContainerModal } from "./style";

const ModalMessage = () => {
  const { setMessage, message } = useMessage();

  message.display &&
    setTimeout(() => {
      setMessage({ content: "", display: false, severity: "success" });
    }, 3000);

  return (
    <ContainerModal>
      <Alert style={{ width: "100%" }} severity={message.severity}>
        {message.content}
      </Alert>
    </ContainerModal>
  );
};

export default ModalMessage;
