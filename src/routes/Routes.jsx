import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import ErrorPage from "../error/ErrorPage";
import Home from "../Pages/Home/Home";
import SignUp from "../authentication/SignUp";
import SignIn from "../authentication/SignIn";
import Display from "../Pages/Dashboard/Display";
import Contact from "../Pages/Contact";
import WorkSheet from "../Pages/Dashboard/Empolyee/WorkSheet/WorkSheet";
import PaymentHistory from "../Pages/Dashboard/Empolyee/PaymentHistory/PaymentHistory";
import Authentication from "../authentication/Authentication";
import DashboardLayout from "../layout/DashboardLayout";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/authentication',
        element: <Authentication />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          {
            path: '/dashboard',
            element: <Display />
          },
          {
            path: '/dashboard/work-sheet',
            element: <WorkSheet />
          },
          {
            path: '/dashboard/payment-history',
            element: <PaymentHistory />
          }
        ]
      }
    ]
  },

]);

export default router;