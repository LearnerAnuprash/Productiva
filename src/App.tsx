import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import ForgotPasswordView from "./pages/auth/forgot-password-view";
import LoginView from "./pages/auth/login-view";
import SignupView from "./pages/auth/signup-view";
import DashboardView from "./pages/dashboard/dashboard-view";
import TasksView from "./pages/tasks/tasks-view";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true, // use 'index' instead of 'path' for the default route
        element: <DashboardView />,
      },
      {
        path: "login",
        element: <LoginView />,
      },

      {
        path: "signup",
        element: <SignupView />,
      },
      {
        path: "login/forgot-password",
        element: <ForgotPasswordView />,
      },
      {
        path: "tasks",
        element: <TasksView />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
