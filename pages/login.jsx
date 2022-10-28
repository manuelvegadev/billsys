import { LoginForm } from "../modules";
import { Layout } from "../components";

export function LoginPage() {
  return (
    <Layout type={"body-only-centered"}>
      <LoginForm />
    </Layout>
  );
}

export default LoginPage;
