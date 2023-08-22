// project import
import MainLayout from "../layout/MainLayout";

// render - dashboard
import Index from "../pages/index.jsx";
import SignUp from "../pages/sign-up.jsx";
import SignIn from "../pages/sign-in.jsx";

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <Index />,
    },
    {
      path: "join",
      element: <SignUp />,
    },
    {
      path: "login",
      element: <SignIn />,
    },
  ],
};

export default MainRoutes;
