import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import FindAndAddJob from "../Pages/FindAndAddJob";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },{
      path:'/register',
      element:<Registration></Registration>
    },{
      path:'/findandadd',
      element:<PrivateRoute><FindAndAddJob></FindAndAddJob></PrivateRoute>
    }
  ])

export default  router;