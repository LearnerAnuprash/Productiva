import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import ForgotPasswordView from "./pages/auth/forgot-password-view";
import LoginView from "./pages/auth/login-view";
import SignupView from "./pages/auth/signup-view";
import DashboardView from "./pages/dashboard/dashboard-view";
import TasksView from "./pages/tasks/tasks-view";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardView />,
      },
      {
        path: "tasks",
        element: <TasksView />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <LoginView />,
      },
      {
        path: "signup",
        element: <SignupView />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordView />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
