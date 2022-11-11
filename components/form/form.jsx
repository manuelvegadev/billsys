import { Stack } from "@carbon/react";
import { SubmissionHandler } from "../../utils";
import { FormButtons } from "../form-buttons";

export const Form = ({
  children,
  onSubmit,
  onSuccess,
  successMessage,
  submitButtonText,
}) => (
  <SubmissionHandler>
    {({ handleSubmit, isSubmitting, success, error }) => {
      return (
        <form onSubmit={(event) => handleSubmit(event, onSubmit)}>
          <Stack gap={7}>
            {children({
              isSubmitting,
              success: success,
              error: error,
            })}
            <FormButtons
              submitButtonText={submitButtonText}
              isSubmitting={isSubmitting}
              success={success}
              successMessage={successMessage}
              onSuccess={onSuccess}
            />
          </Stack>
        </form>
      );
    }}
  </SubmissionHandler>
);

export default Form;
