import { useState } from "react";

/**
 * @param {Function} children
 * */
export function SubmissionHandler({ children }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

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
        setSuccess(true);
      })
      .catch((reason) => {
        setError(true);
        setErrorMessage(reason);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return children({
    handleSubmit,
    isSubmitting,
    success,
    error,
    errorMessage,
  });
}
