import { createContext } from "react";

export const setModalDefaultProps = {
  heading: <></>,
  content: <></>,
  form: <></>,
  label: <></>,
  primaryButtonText: <></>,
  secondaryButtonText: <></>,
  primaryButtonClick: () => {},
};

export const contextDefaultProps = {
  isOpen: false,
  setModal: (
    heading = setModalDefaultProps.heading,
    content = setModalDefaultProps.content,
    form = setModalDefaultProps.form,
    label = setModalDefaultProps.label,
    primaryButtonText = setModalDefaultProps.primaryButtonText,
    secondaryButtonText = setModalDefaultProps.secondaryButtonText,
    primaryButtonClick = setModalDefaultProps.primaryButtonClick
  ) => {},
  openModal: () => {},
  closeModal: () => {},
};

export const ModalContext = createContext({
  isOpen: contextDefaultProps.isOpen,
  setModal: contextDefaultProps.setModal,
  openModal: contextDefaultProps.openModal,
  closeModal: contextDefaultProps.closeModal,
});

export default ModalContext;
