import { SubmissionHandler } from "../../utils";
import { InlineNotification, Stack } from "@carbon/react";
import { FormButtons } from "../form-buttons";

export function FullForm({ onSubmit, children }) {
  return (
    <SubmissionHandler>
      {({ handleSubmit, isSubmitting, success, description, error }) => {
        return (
          <form onSubmit={(event) => handleSubmit(event, onSubmit)}>
            <Stack gap={7}>
              {children({
                isSubmitting,
                success: !!success,
                error: !!error,
              })}
              <FormButtons
                isSubmitting={isSubmitting}
                success={!!success}
                description={description}
              />
              {error && <InlineNotification title={error} lowContrast={true} />}
            </Stack>
          </form>
        );
      }}
    </SubmissionHandler>
  );
}

export default FullForm;
