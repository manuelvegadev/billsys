import { useState } from "react";

/**
 * @param {Function} children
 * */
export function SubmissionHandler({ children }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [description, setDescription] = useState("Submitting...");

  /**
   * @param {React.FormEvent<HTMLFormElement>} formEvent
   * @param {Function} onSubmit
   * @return {void}
   * */
  function handleSubmit(formEvent, onSubmit) {
    formEvent.preventDefault();
    setIsSubmitting(true);

    onSubmit(formEvent.target)
      .then(() => {
        setError(false);
        setSuccess(true);
        setDescription("Submitted!");
      })
      .catch((errorMessage) => {
        setError(errorMessage);
        // setDescription("Submitting...");
      })
      .finally(() => {
        setTimeout(() => {
          setIsSubmitting(false);
          // setSuccess(false);
          // setDescription("Submitting...");
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
