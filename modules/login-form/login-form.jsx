import {
  Button,
  Heading,
  InlineLoading,
  InlineNotification,
  Stack,
  TextInput,
  Tile,
} from "@carbon/react";
import { useId } from "react";
import { SubmissionHandler } from "../../utils";
import { Send } from "@carbon/icons-react";
import { useSessionContext } from "@supabase/auth-helpers-react";
import styles from "./login-form.module.scss";

export function LoginForm() {
  const baseId = useId();
  const { supabaseClient } = useSessionContext();

  /** @param {HTMLFormElement} form */
  function submitHandler(form) {
    const {
      elements: {
        email: { value: email },
      },
    } = form;

    return new Promise(async (resolve, reject) => {
      const { data, error } = await supabaseClient.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: false,
          emailRedirectTo: location.origin + "/login/otp-validating",
        },
      });
      return error ? reject(error) : resolve(data);
    });
  }

  return (
    <Tile
      className={styles["login-form__tile"]}
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: 0,
      }}
    >
      <SubmissionHandler>
        {({ handleSubmit, isSubmitting, success, description, error }) => (
          <form
            onSubmit={(event) => handleSubmit(event, submitHandler)}
            style={{
              flex: "100%",
              padding: "1rem",
            }}
          >
            <Stack gap={7}>
              <Heading className={styles["login-form__heading"]}>
                Log in to Billsys
              </Heading>

              <TextInput
                id={baseId + "email"}
                labelText={"Email"}
                placeholder={"janedoe@billsys.org"}
                type={"email"}
                name={"email"}
                light
                disabled={isSubmitting}
                required
              />

              {isSubmitting || success ? (
                <InlineLoading
                  style={{ marginLeft: "1rem", height: "3rem" }}
                  description={description}
                  status={success ? "finished" : "active"}
                />
              ) : (
                <Button type="submit" renderIcon={Send}>
                  Send magic link
                </Button>
              )}
              {success ? (
                <InlineNotification
                  title={
                    "The magical link has been sent, please check your inbox."
                  }
                  subtitle={
                    "When you have confirmed your login, return to this tab to continue."
                  }
                  kind={"success"}
                  lowContrast={true}
                  hideCloseButton
                />
              ) : null}
              {error ? (
                <InlineNotification
                  title={error.toString()}
                  kind={"error"}
                  lowContrast={true}
                  hideCloseButton
                />
              ) : null}
            </Stack>
          </form>
        )}
      </SubmissionHandler>
      <div
        style={{
          alignSelf: "end",
          flex: "100%",
          padding: "1rem",
          borderTop: "1px solid rgba(255,255,255,.15)",
        }}
      >
        <small>
          <b>Dont have an account?</b>
          <br />
          Create new accounts is currently disabled
        </small>
      </div>
    </Tile>
  );
}

export default LoginForm;
