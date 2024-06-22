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
import EmployeeList from "../Pages/Dashboard/Hr/EmployeeList ";
import EmployeeDetails from "../Pages/Dashboard/Hr/EmployeeDetails";
import Progress from "../Pages/Dashboard/Hr/Progress";
import AllEmployeeList from "../Pages/Dashboard/Admin/AllEmployeeList";
import Profile from "../authentication/Profile";
import EditEmployee from "../Pages/Dashboard/Admin/EditEmployee";
import PrivateRoute from "../private/PrivateRoute";
// import EmployeeList from "../Pages/Dashboard/Hr/EmployeeList";


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
        path: '/my-profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
      },
      {
        path: '/authentication',
        element: <Authentication />,
        children: [
          {
            path: 'login',
            element: <SignIn />
          },
          {
            path: 'signup',
            element: <SignUp />
          },
        ]

      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
          {
            path: '/dashboard',
            element: <PrivateRoute><Display /></PrivateRoute>
          },
          {
            path: '/dashboard/work-sheet',
            element: <PrivateRoute><WorkSheet /></PrivateRoute>
          },
          {
            path: '/dashboard/payment-history',
            element: <PrivateRoute><PaymentHistory /></PrivateRoute>
          },
          {
            path: '/dashboard/employee-list',
            element: <PrivateRoute><EmployeeList /></PrivateRoute>
          },
          {
            path: `/dashboard/details/:id`,
            element: <PrivateRoute><EmployeeDetails /></PrivateRoute>
          },
          {
            path: `/dashboard/progress`,
            element: <PrivateRoute><Progress /></PrivateRoute>
          },

          {
            path: `/dashboard/all-employee-list`,
            element: <PrivateRoute><AllEmployeeList /></PrivateRoute>
          },
          {
            path: `/dashboard/employee/:id`,
            element: <PrivateRoute><EditEmployee /></PrivateRoute>
          },

        ]
      }
    ]
  },

]);

export default router;