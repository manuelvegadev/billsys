import { Button, InlineLoading } from "@carbon/react";

export const FormButtons = ({
  isSubmitting,
  success,
  successMessage,
  submitButtonText,
  onSuccess,
}) => (
  <div style={{ display: "flex", gap: "1rem" }}>
    {isSubmitting || success ? (
      <InlineLoading
        style={{ marginLeft: "1rem", height: "3rem" }}
        description={
          isSubmitting ? "Submitting..." : successMessage || "Success!"
        }
        status={success ? "finished" : "active"}
        onSuccess={() => {
          if (onSuccess) onSuccess();
        }}
      />
    ) : (
      <Button type="submit">{submitButtonText ?? "Submit"}</Button>
    )}
    {isSubmitting || success ? null : (
      <Button kind="secondary" disabled={isSubmitting || success}>
        Cancel
      </Button>
    )}
  </div>
);

export default FormButtons;
