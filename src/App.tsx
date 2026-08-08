import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layout/app-layout";
import ForgotPassword from "./pages/auth/forgot-password-page";
import Login from "./pages/auth/login-page";
import Signup from "./pages/auth/signup-page";
import Calendar from "./pages/calendar/calendar";
import Dashboard from "./pages/dashboard/dashboard";
import Tasks from "./pages/tasks/tasks";
import AuthLayout from "./layout/auth-layout";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
