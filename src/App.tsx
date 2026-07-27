import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import ForgotPassword from "./pages/auth/forgot-password";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Calendar from "./pages/calendar/calendar";
import Dashboard from "./pages/dashboard/dashboard";
import Tasks from "./pages/tasks/tasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
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
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />,
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
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
