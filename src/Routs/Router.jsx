import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Authentication/Login";
import Registration from "../Pages/Authentication/Registration";
import FindAndAddJob from "../Pages/FindAndAddJob";
import PrivateRoute from "./PrivateRoute";
import AddJobTAsk from "../Pages/AddJobTAsk";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },{
      path:'/register',
      element:<Registration></Registration>
    },{
      path:'/findandadd',
      element:<PrivateRoute><FindAndAddJob></FindAndAddJob></PrivateRoute>,
      
    },
    {
      path:'/findandadd/addjob',
      element:<AddJobTAsk></AddJobTAsk>
    },
  ])

export default  router;