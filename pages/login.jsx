import { LoginForm } from "../modules";
import { Layout } from "../components";

export function Login() {
  return (
    <Layout type={"body-only-centered"}>
      <LoginForm />
    </Layout>
  );
}

export default Login;
