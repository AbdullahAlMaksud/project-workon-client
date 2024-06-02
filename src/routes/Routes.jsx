import {createBrowserRouter} from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import ErrorPage from "../error/ErrorPage";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
]);

export default router;