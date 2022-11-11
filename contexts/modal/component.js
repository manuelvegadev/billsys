import {
  Button,
  ComposedModal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@carbon/react";

export const Modal = ({ contextValues, hook }) => {
  const { closeModal } = hook;
  const {
    isOpen,
    modalForm,
    setIsOpen,
    modalHeading,
    modalLabel,
    modalContent,
    secondaryButtonText,
    onPrimaryButtonClick,
    primaryButtonText,
  } = contextValues;

  return (
    <ComposedModal
      open={isOpen}
      onClose={function (e) {
        e.preventDefault();
        closeModal();
      }}
    >
      <ModalHeader
        buttonOnClick={() => setIsOpen(false)}
        title={modalHeading}
        label={modalLabel}
      />
      {modalForm ? (
        modalForm
      ) : (
        <>
          <ModalBody hasForm>{modalContent}</ModalBody>
          <ModalFooter>
            <Button type={"button"} kind={"secondary"} onClick={closeModal}>
              {secondaryButtonText}
            </Button>
            <Button type={"button"} onClick={onPrimaryButtonClick}>
              {primaryButtonText}
            </Button>
          </ModalFooter>
        </>
      )}
    </ComposedModal>
  );
};

export default Modal;
