import { Button, InlineLoading, ModalBody, ModalFooter } from "@carbon/react";
import { useModal } from "../../contexts";
import { SubmissionHandler } from "../../utils";

/** @type {ModalFormType} */
export const ModalForm = ({
  onSubmit,
  children,
  primaryButtonText,
  secondaryButtonText,
  successMessage,
  onSuccess,
}) => {
  const { closeModal } = useModal();

  return (
    <SubmissionHandler>
      {({ handleSubmit, isSubmitting, success, error }) => {
        return (
          <form
            onSubmit={(event) => handleSubmit(event, onSubmit)}
            className={"cds--modal-container-body"}
          >
            <ModalBody hasForm>
              {children({
                isSubmitting,
                success,
                error,
              })}
            </ModalBody>
            <ModalFooter>
              <Button type={"button"} kind={"secondary"} onClick={closeModal}>
                {secondaryButtonText}
              </Button>
              {isSubmitting || success ? (
                <InlineLoading
                  description={
                    isSubmitting
                      ? "Submitting..."
                      : successMessage || "Success!"
                  }
                  status={success ? "finished" : "active"}
                  onSuccess={() => {
                    closeModal();
                    if (onSuccess) {
                      onSuccess();
                      success = null;
                    }
                  }}
                />
              ) : (
                <Button type={"submit"}>{primaryButtonText}</Button>
              )}
            </ModalFooter>
          </form>
        );
      }}
    </SubmissionHandler>
  );
};

export default ModalForm;
