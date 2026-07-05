import LoginView from "../../features/auth/login/components/login.view";
import { useLogin } from "../../features/auth/login/hooks/use-login";

const Login = () => {
  const { methods, onSubmit } = useLogin();

  return <LoginView methods={methods} onSubmit={onSubmit} />;
};

export default Login;
