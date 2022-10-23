import { useState } from "react";

export function SubmissionHandler({ children }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [description, setDescription] = useState("Submitting...");

  function handleSubmit(
    formEvent,
    onSubmit
  ) {
    formEvent.preventDefault();
    setIsSubmitting(true);

    onSubmit()
      .then(() => {
        setError(false);
        setSuccess(true);
        setDescription("Submitted!");
      })
      .catch((errorMessage) => {
        setError(errorMessage);
        setDescription("Submitting...");
      })
      .finally(() => {
        setTimeout(() => {
          setIsSubmitting(false);
          setSuccess(false);
          setDescription("Submitting...");
        }, 500);
      });
  }

  return children({
    handleSubmit,
    isSubmitting,
    success,
    description,
    error,
  });
}
