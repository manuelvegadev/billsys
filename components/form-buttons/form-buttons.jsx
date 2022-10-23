import { Button, InlineLoading } from "@carbon/react";

export function FormButtons({
  isSubmitting,
  success,
  description,
}) {
  return (
    <div style={{ display: 'flex' }}>
      <Button kind="secondary" disabled={isSubmitting || success}>
        Cancel
      </Button>
      {isSubmitting || success ? (
        <InlineLoading
          style={{ marginLeft: '1rem' }}
          description={description}
          status={success ? 'finished' : 'active'}
        />
      ) : (
        <Button type="submit">Submit</Button>
      )}
    </div>
  );
}

export default FormButtons;
