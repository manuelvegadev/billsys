import { useState } from "react";
import { contextDefaultProps, ModalContext, setModalDefaultProps } from "./";
import Modal from "./component";

export const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(contextDefaultProps.isOpen);
  const [modalLabel, setModalLabel] = useState(setModalDefaultProps.label);
  const [modalHeading, setModalHeading] = useState(
    setModalDefaultProps.heading
  );
  const [modalContent, setModalContent] = useState(
    setModalDefaultProps.content
  );
  const [modalForm, setModalForm] = useState(setModalDefaultProps.form);
  const [primaryButtonText, setPrimaryButtonText] = useState(
    setModalDefaultProps.primaryButtonText
  );
  const [onPrimaryButtonClick, setOnPrimaryButtonClick] = useState(
    setModalDefaultProps.primaryButtonClick
  );
  const [secondaryButtonText, setSecondaryButtonText] = useState(
    setModalDefaultProps.secondaryButtonText
  );

  function setModal({
    heading = setModalDefaultProps.heading,
    content = setModalDefaultProps.content,
    form = setModalDefaultProps.form,
    label = setModalDefaultProps.label,
    primaryButtonText = setModalDefaultProps.primaryButtonText,
    secondaryButtonText = setModalDefaultProps.secondaryButtonText,
    primaryButtonClick = setModalDefaultProps.primaryButtonClick,
  }) {
    setModalHeading(heading);
    setModalLabel(label);
    setPrimaryButtonText(primaryButtonText);
    setSecondaryButtonText(secondaryButtonText);
    setOnPrimaryButtonClick(primaryButtonClick);
    setModalContent(content);
    setModalForm(form);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    /** Wait for transition */
    setTimeout(() => setModal({}), 240);
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        setModal,
      }}
    >
      <Modal
        contextValues={{
          isOpen,
          modalLabel,
          modalHeading,
          modalContent,
          modalForm,
          primaryButtonText,
          onPrimaryButtonClick,
          secondaryButtonText,
        }}
        hook={{
          openModal,
          closeModal,
        }}
      />
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
