import { useContext } from "react";
import ModalContext from "./context";

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    console.error("Error deploying the ModalContext");
  }

  return context;
};

export default useModal;
