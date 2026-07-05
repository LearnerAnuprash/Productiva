import LoginView from "./components/login.view";
import { useLogin } from "./hooks/use-login";

const Login = () => {
  const { methods, onSubmit } = useLogin();

  return <LoginView methods={methods} onSubmit={onSubmit} />;
};

export default Login;
