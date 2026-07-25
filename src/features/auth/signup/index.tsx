import SignupView from "./components/signup.view";
import { useSignup } from "./hooks/use-signup";

const Signup = () => {
  const { methods, onSubmit } = useSignup();
  return <SignupView methods={methods} onSubmit={onSubmit} />;
};

export default Signup;
