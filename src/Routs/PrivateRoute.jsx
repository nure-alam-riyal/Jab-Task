import { Navigate } from "react-router-dom";
import LoadingSpin from "../Component/Shared/LoadingSpin";
import useAuth from "../Hooks/Auth";


const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()
    if(loading)
    return <LoadingSpin></LoadingSpin>
    if(user)
        return children
    else
    return <Navigate to={'/'} ></Navigate>

};

export default PrivateRoute;