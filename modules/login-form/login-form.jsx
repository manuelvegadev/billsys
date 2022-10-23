import {
  Button,
  InlineLoading,
  TextInput,
  Tile,
  Stack,
  Heading,
} from "@carbon/react";
import { useId } from "react";
import { SubmissionHandler } from "../../utils";
import { ArrowRight } from "@carbon/icons-react";

export function LoginForm() {
  const baseId = useId();

  function submitHandler() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("nel prro no sirvio");
      }, 100);
    });
  }

  return (
    <Tile>
      <SubmissionHandler>
        {({ handleSubmit, isSubmitting, success, description, error }) => (
          <form onSubmit={(event) => handleSubmit(event, submitHandler)}>
            <Stack gap={7}>
              <Heading>Log in to Billsys</Heading>

              <TextInput
                id={baseId + "email"}
                labelText={"Email"}
                placeholder={"janedoe@billsys.dev"}
                disabled={isSubmitting}
              />

              {isSubmitting || success ? (
                <InlineLoading
                  style={{ marginLeft: "1rem", height: "3rem" }}
                  description={description}
                  status={success ? "finished" : "active"}
                />
              ) : (
                <Button type="submit" renderIcon={ArrowRight}>
                  Continue
                </Button>
              )}
            </Stack>
          </form>
        )}
      </SubmissionHandler>
    </Tile>
  );
}

export default LoginForm;
